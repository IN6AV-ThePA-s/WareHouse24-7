'use strict'

const api = require('express').Router();
const { test } = require('./branch.controller');

api.get('/test', test);

module.exports = api;