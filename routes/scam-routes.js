// Import express and the controller, define the router.
const express = require('express');
const scamRouter = express.Router();
const scamController = require('../controllers/scam-controller');

scamRouter.post('/', scamController.search);

module.exports = scamRouter
