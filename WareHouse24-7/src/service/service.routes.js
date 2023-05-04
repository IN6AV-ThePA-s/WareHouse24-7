'use strict'

const api = require('express').Router();
const {ensureAdvance,isAdmin} = require('../services/authenticated')
const serviceController = require('./service.controller');

api.get('/test',[ensureAdvance,isAdmin], serviceController.test);
api.get('/get',[ensureAdvance,isAdmin], serviceController.getServices)
api.get('/getOne/:id',[ensureAdvance,isAdmin],serviceController.getService)
api.post('/add',[ensureAdvance,isAdmin], serviceController.addService)
api.put('/update/:id',[ensureAdvance,isAdmin],serviceController.updateService)

module.exports = api;