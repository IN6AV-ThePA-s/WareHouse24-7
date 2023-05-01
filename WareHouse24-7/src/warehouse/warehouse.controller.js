'use strict'

const WareHouse = require('./warehouse.model');
const Branch = require('../branch/branch.model');
const { validateData } = require('../utils/validate');
const fs = require('fs');
const path = require('path');

/* ----- ADD ----- */
exports.add = async(req, res) => {
    try {
        let data = req.body;
        data.size.area = Number(data.size.heigth * data.size.length).toFixed(2);
        let warehouse = new WareHouse(data);
        await warehouse.save();
        return res.send({ message: `The warehouse was added`, warehouse });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding warehouse` });
    }
}

/* ----- GETs ----- */
exports.gets = async(req, res) => {
    try {
        let warehouses = await WareHouse.find({}, { 'size._id': 0 })
            .populate('services.service')
            .populate({
                path: 'lessee',
                select: 'name surname phone'
            });
        return res.send({ warehouses });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting warehouses` });
    }
}

/* ----- GET ----- */
exports.get = async(req, res) => {
    try {
        let idWarehouse = req.params.id;
        let warehouse = await WareHouse.findOne({ _id: idWarehouse }, { 'size._id': 0 })
            .populate('services.service')
            .populate({
                path: 'lessee',
                select: 'name surname phone'
            });
        return res.send({ warehouse });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting warehouse` });
    }
}

/* ----- UPDATE ----- */
exports.upd = async(req, res) => {
    try {
        let idWarehouse = req.params.id;
        let data = req.body;
        data.size.area = Number(data.size.heigth * data.size.length).toFixed(2);
        let updWare = await WareHouse.findOneAndUpdate({
                _id: idWarehouse
            },
            data, {
                new: true
            }
        )
        if (!updWare)
            return res.status(401).send({ message: `Warehouse not found or not updated` });
        return res.send({ updWare });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error updatting warehouse` });
    }
}

/* ----- DELETE ----- */
exports.dele = async(req, res) => {
    try {
        let idWarehouse = req.params.id;
        await Branch.updateMany({}, { $pull: { warehouses: idWarehouse } }, { multi: true });
        let deleteWare = await WareHouse.findOneAndDelete({ _id: idWarehouse });
        if (!deleteWare)
            return res.status(401).send({ message: `Warehouse not found or not deleted` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deletting warehouse` });
    }
}

/* ----- ASSIGN LESSEE ----- */
exports.assign = async(req, res) => {
    try {
        let idWarehouse = req.params.id;
        let data = {
            lessee: req.body.lessee
        };
        let msg = validateData(data);
        if (msg)
            return res.status(418).send(msg);
        let updWare = await WareHouse.findOneAndUpdate({
            _id: idWarehouse
        }, {
            lessee: data.lessee,
            state: 'DISABLE'
        }, {
            new: true
        });
        if (!updWare)
            return res.status(401).send({ message: `Warehouse not found or not assigning lessee` });
        return res.send({ updWare });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error assigning lessee` });
    }
}

/* ----- DEALLOCATE LESSEE ----- */
exports.deallocate = async(req, res) => {
    try {
        let idWarehouse = req.params.id;
        let updWare = await WareHouse.findOneAndUpdate({
            _id: idWarehouse
        }, {
            $unset: { lessee: '' },
            state: 'ACTIVE'
        }, {
            new: true
        });
        if (!updWare)
            return res.state(401).send({ message: `Warehouse not found or not assigning lessee` });
        return res.send({ updWare });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deallocated lessee` });
    }
}

/* ---- UPLOAD IMG ----- */
exports.uploadImg = async(req, res) => {
    try {
        const idWarehouse = req.params.id;
        const existImage = await WareHouse.findOne({ _id: idWarehouse });
        let pathFile = './src/uploads/warehouses/';

        if (existImage.photo)
            fs.unlinkSync(`${pathFile}${existImage.photo}`);
        if (!req.files.image ||
            !req.files.image.type
        ) return res.status(400).send({ message: `Hace not sent an image` });

        const filePath = req.files.image.path;
        const fileSplit = filePath.split('\\');
        const fileName = fileSplit[3];
        const extension = fileName.split('\.');
        const fileExt = extension[1];

        if (
            fileExt == 'png' ||
            fileExt == 'jpg' ||
            fileExt == 'jpeg'
        ) {
            let updWare = await WareHouse.findByIdAndUpdate({
                _id: idWarehouse
            }, {
                photo: fileName
            }, {
                new: true
            });
            if (!updWare)
                return res.status(404).send({ message: `Warehouse nor found or not updated` });
            return res.send({ message: `Warehpuse updated photo`, updWare });
        }
        fs.unlinkSync(filePath)
        return res.status(400).send({ message: 'File extension not admited' })

    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding image` });
    }
}

/* ----- GET WAREHOUSE PHOTO ----- */
exports.getImg = async(req, res) => {
    try {
        let fileName = req.params.file;
        const pathFile = `./src/uploads/warehouses/${fileName}`;
        console.log(pathFile);
        let img = fs.existsSync(pathFile);
        if (!img)
            return res.status(404).send({ message: `Image not found` });
        return res.sendFile(path.resolve(pathFile));
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting photo` });
    }
}

exports.test = (req, res) => {
    res.send({ message: `Hi Warehouses` });
}