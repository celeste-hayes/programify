import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
});

export { sequelize };
