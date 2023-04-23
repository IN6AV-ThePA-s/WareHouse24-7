'use strict'

const mongoose = require('mongoose');

const winerySchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: {
            height: {
                type: Number,
                required: true
            },
            length: {
                type: Number,
                required: true
            },
            depth: {
                type: Number,
                required: true
            },
            area: {
                type: Number,
                required: true
            }
        }
    },
    services: {
        type: [{
            service: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
                required: true
            }
        }],
        required: true
    },
    state: {
        type: String,
        required: true,
        uppercase: true,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'DISABLE']
    },
    lessee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Winerie', winerySchema);