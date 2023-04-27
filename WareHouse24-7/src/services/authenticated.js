'use strict'

const jwt = require('jsonwebtoken');

exports.ensureAdvance = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: `Doesn't contain header "AUTHORIZATION"` });
    } else {
        try {
            let token = req.headers.authorization.replace(/['"]+/g, '');
            var payload = jwt.decode(token, `${process.env.KEY_DECODE}`);
            if (Date.now() >= payload.exp) {
                return res.status(401).send({ message: `EXPIRED TOKEN :]` });
            }
        } catch (err) {
            console.error(err);
            return res.status(418).send({ message: `Token Invalid` });
        }
        req.user = payload;
        next();
    }
}