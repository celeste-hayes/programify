import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import sequelize from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS before routes
app.use(cors());  // Enable CORS first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your routes after middleware
app.use('/api', routes);  // Make sure to use '/api' as the route prefix

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
.catch((err) => {
    console.log(`Failed to sync database or start server: ${err.message}`);
});
