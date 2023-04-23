'use strict'

const api = require('express').Router();
const { test } = require('./winey.controller');

api.get('/test', test);

module.exports = api;