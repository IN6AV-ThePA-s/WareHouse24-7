'use strict'

const Service = require('./service.model');

exports.test = (req, res) => {
    res.send({ message: `Hi services` });
}