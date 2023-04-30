'use strict'

const bcrypt = require('bcrypt');

exports.encrypt = async(password) => {
    try {
        return bcrypt.hash(password, 10);
    } catch (err) {
        console.error(err);
        return err;
    }
}

exports.check = async(password, hash) => {
    try {
        return bcrypt.compare(password, hash);
    } catch (err) {
        console.error(err);
        return err;
    }
}

exports.validateData = (data) => {
    let keys = Object.keys(data), msg = ''

    for(let key of keys) {
        if(data[key] !== null &&
            data[key] !== undefined &&
            data[key] !== '') continue

        msg += `Param ${key} is required \n`
    }

    return msg.trim()
}