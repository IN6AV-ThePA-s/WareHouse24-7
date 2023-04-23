'use strict'

const mongoose = require('mongoose');

const branchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: [{
            altitude: {
                type: String,
                required: true
            },
            length: {
                type: String,
                required: true
            }
        }],
        required: true
    },
    capitalGain: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['ACTIVE', 'DISABLE']
    },
    services: {
        type: [{
            service: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
                required: true
            }
        }]
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    wineries: {
        type: [{
            winery: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Winerie',
                required: true
            }
        }]
    }
}, {
    versionKey: false
});


module.exports = mongoose.model('Branche', branchSchema);