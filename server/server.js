import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { sequelize } from './config/connection.js'; // Ensure correct path
import { authRouter } from './routes/api/auth-routes.js'; // Ensure correct path

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/api/auth', authRouter);

//app.use('/api', apiRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error details:', err);
  res.status(500).json({ error: 'Something went wrong!', details: err.message }); // Send JSON response with error details
});

// Sync DB and start the server
sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Failed to sync database or start server: ${err.message}`);
  });
