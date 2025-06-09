const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Export the app to be used in server.js
module.exports = app;
