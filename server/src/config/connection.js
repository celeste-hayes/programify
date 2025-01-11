import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_DATABASE || '',
      process.env.DB_USER || '',    
      process.env.DB_PASSWORD,    
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
        port: process.env.DB_PORT || 5432
      }
    );

export default sequelize;
