'use strict'

const api = require('express').Router();
const { ensureAdvance, isAdmin } = require('../services/authenticated');
const { test, login, register, update, del, deleteUser, updatePassword, updateUser, save } = require('./user.controller');

api.get('/test', test);

api.post('/login', login)
api.post('/register', register)

api.put('/update', ensureAdvance, update)
api.put('/updatePassword', ensureAdvance, updatePassword)
api.delete('/delete', ensureAdvance, del)

api.post('/save', [ensureAdvance, isAdmin], save)
api.put('/update/:id', [ensureAdvance, isAdmin], updateUser)
api.delete('/delete/:id', [ensureAdvance, isAdmin], deleteUser)


module.exports = api;