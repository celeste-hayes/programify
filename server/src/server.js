import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import authRoutes from './routes/auth-routes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);
app.use('/api', authRoutes);


// Sync DB and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
.catch((err) => {
  console.log(`Failed to sync database or start server: ${err.message}`);
});

