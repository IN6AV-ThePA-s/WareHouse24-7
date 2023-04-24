'use strict'

const api = require('express').Router();
const { test } = require('./warehouse.controller');

api.get('/test', test);

module.exports = api;