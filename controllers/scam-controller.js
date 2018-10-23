// Makes calls to the BitcoinWhosWho Scam API
const axios = require('axios');

const scamController = {};

scamController.search = (req,res) => {
  const url = `https://bitcoinwhoswho.com/api/scam/${process.env.api_key}?address=${req.body.address}`
  console.log(url);
  axios({
    method: 'GET',
    url: url
  })
  .then(data => {
    res.json({
      message: "Success",
      data: data
    })
  })
  .catch(err => {
    res.json(err);
  });
};

module.exports = scamController;
