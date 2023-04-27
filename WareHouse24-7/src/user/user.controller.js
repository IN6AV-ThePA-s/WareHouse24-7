'use strict'

const User = require('../user/user.model');
const { encrypt } = require('../utils/validate');

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