'use strict'

const User = require('../user/user.model');
const { encrypt, validateData, check } = require('../utils/validate');
const { createToken } = require('../services/jwt')

/* ----- DEFAULT USER ----- */
exports.defaultUser = async() => {
    try {
        if (!(await User.findOne({ username: 'ADMIN' }))) {
            let data = {
                names: 'admin',
                surnames: 'admin',
                phone: '+000 00000000',
                email: 'admin@admin',
                password: 'admin',
                username: 'admin',
                role: 'admin'
            }
            data.password = await encrypt(data.password);
            let user = new User(data);
            await user.save();
            console.log(`User created`);
        }
    } catch (err) {
        console.error(err);
        return err;
    }
}

exports.test = (req, res) => {
    res.send({ message: `Hi users` });
}

/* ----- REGISTER CLIENT ----- */
exports.register = async(req, res) => {
    try {
        let data = req.body

        let msg = validateData({password: data.password})
        if(msg) return res.status(400).send({message: 'Please introduce a password'})
        data.password = await encrypt(data.password)
        data.role = 'CLIENT'

        let user = new User(data)
        await user.save()

        return res.send({message: 'Account created successfully'})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error creating account', error: err})
    }
}

/* ----- LOGIN ----- */
exports.login = async(req, res) => {
    try {
        let data = req.body
        let credentials = {username: data.username, password: data.password}
        let msg = validateData(credentials)

        if(msg) return res.status(400).send({message: msg})

        let user = await User.findOne({username: data.username})

        if(user && await check(data.password, user.password)) {
            let token = await createToken(user)
            return res.send({message: 'User logged successfully', token: token})
        }
        
        return res.status(401).send({message: 'Invalid credentials'})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error, user not logged', error: err})
    }
}

/* ----- UPDATE ----- */
exports.update = async(req, res) => {
    try {
        let data = req.body

        if(data.password) return res.send({message: 'Cannot update password here'})
        if(data.role && req.user.role !== 'ADMIN' ) 
            return res.status(401).send({message: 'You do not have permision to update this param "ROLE"'})

        let upUser = await User.findOneAndUpdate(
            {_id: req.user.sub},
            data,
            {new: true}
        )

        return res.send({message: 'Your user was updated successfully', user: upUser})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error, user not updated', error: err})
    }
}

/* ----- DELETE ----- */
exports.del = async(req, res) => {
    try {
        let id = req.user.sub

        let delUser = await User.findOneAndDelete({_id: id})
        if(delUser.username === 'admin') return res.status(500).send({message: 'Cannot delete default user'})
        if(!delUser) return res.status(404).send({message: 'User not found and not deleted'})

        res.send({message: 'User deleted successfully', user: delUser})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting user', error: err})
    }
}

/* ----- UPDATE PASSWORD ----- */
exports.updatePassword = async(req, res) => {
    try {
        let data = req.body
        let form = {
            password: data.password,
            newPassword: data.newPassword
        }
        if(validateData(form)) return res.status(400).send({message: validateData(form)})

        let user = await User.findOne({_id: req.user.sub})

        if(user && await check(data.password, user.password)) {
            await User.findOneAndUpdate({_id: req.user.sub}, {password: await encrypt(data.newPassword)})

            return res.send({message: 'Password updated successfully'})
        }

        return res.status(401).send({message: 'The password does not coincide or user not found'})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating password', error: err})
    }
}


/* ----- SAVE USER - ADMIN ----- */
exports.save = async(req, res) => {
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        
        let params = {
            names: data.names,
            surnames: data.surnames,
            phone: data.phone,
            email: data.email,
            password: data.password,
            username: data.username,
            role: data.role,
        }
        console.log(data.role)

        let msg = validateData(params)
        if(msg) return res.status(400).send({message: msg})
        
        let user = new User(data)
        await user.save()

        return res.send({message: 'Account created successfully'})
            
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error saving new user', error: err})
    }
}

/* ----- DELETE - ADMIN ----- */
exports.deleteUser = async(req, res) => {
    try {
        let id = req.params.id

        let user = await User.findOne({_id: id})
        if(!user) return res.status(404).send({message: 'User not found'})
        if(user.role === 'ADMIN') 
            return res.status(401).send({message: 'Cannot delete ADMIN'})

        let delUser = await User.findOneAndDelete({_id: id})
        if(!delUser) return res.status(404).send({message: 'User not found and not deleted'})

        return res.send({message: 'User deleted successfully', user: delUser})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting user', error: err})
    }
}

/* ----- UPDATE - ADMIN ----- */
exports.updateUser = async(req, res) => {
    try {
        let id = req.params.id
        let data = req.body

        let user = await User.findOne({_id: id})
        if(!user) return res.status(404).send({message: 'User not found'})

        if(user.role === 'ADMIN') return res.status(401).send({message: 'Cannot update ADMIN'})
        if(data.password || data.password === '') return res.status(401).send({message: 'Cannot update password'})

        let upUser = await User.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )

        return res.send({message: 'User updated successfully', user: upUser})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating userd', error: err})
    }
}