import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from '../models/user.js'; // Import UserFactory

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_DATABASE || '',
      process.env.DB_USER || '',    
      process.env.DB_PASSWORD || '', // Ensure a default empty string
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
        port: process.env.DB_PORT || 5432,
      }
    );

// //sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// const User = UserFactory(sequelize);

// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log('Database & tables are synced!');
//   })
//   .catch(err => {
//     console.error('Syncing error:', err);
//   });

export { sequelize};
