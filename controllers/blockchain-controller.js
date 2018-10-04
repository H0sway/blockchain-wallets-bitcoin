// Controller that handles calls to the blockchain API
const axios = require('axios');
// json-stringify-safe deals with circular objects being converted to JSON
const stringify = require('json-stringify-safe')

// Define the controller and methods
const blockchainController = {}

blockchainController.search = (req, res) => {
  axios({
    method: 'GET',
    url: `https://blockchain.info/rawaddr/${req.body.address}?cors=true`
  })
  .then(data => {
    const wallet = stringify(data);
    res.send({
      message: 'Transactions loaded',
      data: wallet
    })
  })
  .catch(err => {
    res.send(err);
  })
}

module.exports = blockchainController;
