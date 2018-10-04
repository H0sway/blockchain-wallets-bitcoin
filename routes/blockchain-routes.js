// Handles the calls to the blockchain API.
const express = require('express');
const blockchainRouter = express.Router();
const blockchainController = require('../controllers/blockchain-controller');

// Route to the only call we're making now. Sends the single wallet information to the frontend.
blockchainRouter.get('/:address', blockchainController.search);

module.exports = blockchainRouter;
