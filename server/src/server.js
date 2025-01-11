require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { authDb, inspoDb } = require('./config');
const inspoRoutes = require('./routes/api/insporoutes');
const authRoutes = require('./routes/api/authRoutes');
const { PORT = 5000 } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/inspo', inspoRoutes);

// DB connection and server start
authDb.authenticate()  // Connect to auth database
  .then(() => {
    console.log('Connected to Authentication database successfully.');

    return inspoDb.authenticate();  // Connect to inspiration database
  })
  .then(() => {
    console.log('Connected to Inspiration database successfully.');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to one or more databases:', error);
  });

