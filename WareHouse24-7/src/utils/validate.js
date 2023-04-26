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