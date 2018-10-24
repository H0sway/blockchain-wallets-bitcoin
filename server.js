// Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(express.static('build'));

// Routes
app.use('/api/scam', require('./routes/scam-routes'));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.listen(PORT, () => {
  console.log(`Live on port ${PORT}`);
});
