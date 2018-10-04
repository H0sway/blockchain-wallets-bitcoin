// Import dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors =  require('cors');
require('dotenv').config();

// Import Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Set up static files
app.use(express.static('build'));

// Configure routes
app.use('/api/blockchain', require('./routes/blockchain-routes'));
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'))
});

// Set the port
app.listen(PORT, () => {
  console.log(`Live on port ${PORT} but also it's the Shrek movie`);
});
