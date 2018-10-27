// Makes calls to the BTC API
const axios = require('axios');

// Instantiate the controller
const btcController = {};

// Makes a request to the BTC.com API using the wallet address provided by the frontend. Sends transaction data back as a JSON object
btcController.search = (req, res) => {
  const url = `https://chain.api.btc.com/v3/address/${req.body.address}/tx`;
  axios({
    method: 'GET',
    url: url
  })
  .then(data => {
    res.json({
      message: 'success',
      data: data.data.data.list
    })
  })
  .catch(err => {
    res.json(err);
  });
};

// Export the controller
module.exports = btcController;
