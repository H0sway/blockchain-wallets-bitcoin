// Makes calls to the BitcoinWhosWho Scam API
const axios = require('axios');

const scamController = {};

scamController.search = (req,res) => {
  const url = `https://bitcoinwhoswho.com/api/scam/${process.env.api_key}?address=${req.body.address}`
  axios({
    method: 'GET',
    url: url
  })
  .then(data => {
    console.log(data.data)
    res.json({
      message: "Success",
      data: data.data.scams
    })
  })
  .catch(err => {
    res.json(err);
  });
};

module.exports = scamController;
