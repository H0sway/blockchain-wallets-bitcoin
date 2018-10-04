// Handles the calls to the blockchain API.
const express = require('express');
const blockchainRouter = express.Router();
import BlockchainController from '../controllers/blockchain-controller';

// Route to the only call we're making now. Sends the single wallet information to the frontend.
blockchainRouter.get('/', blockchainController.search);

module.exports = blockchainRouter;
