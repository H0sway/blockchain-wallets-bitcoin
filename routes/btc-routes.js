// Import express and the controller, define the router.
const express = require('express');
const btcRouter = express.Router();
const btcController = require('../controllers/btc-controller');

btcRouter.post('/', btcController.search);

module.exports = btcRouter;
