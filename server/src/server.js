import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import authRoutes from './routes/auth-routes.js'; // Import auth routes properly

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // To parse incoming JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

// Routes
app.use(routes); // Default routes
app.use('/api', authRoutes); // Auth routes (signup, login)

// Sync DB and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
.catch((err) => {
  console.log(`Failed to sync database or start server: ${err.message}`);
});

