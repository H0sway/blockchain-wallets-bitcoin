// Controller that handles calls to the blockchain API
const axios = require('axios');

// Define the controller and methods
class BlockchainController {
  search(req, res) {
    axios({
      method: 'GET',
      url: `https://blockchain.info/rawaddr/${req.body.address}?cors=true`
    })
    .then(data => {
      res.json({
        message: 'Transactions loaded',
        data: data
      })
    })
    .catch(err => {
      res.send(err);
    })
  }
};

export default BlockchainController;
