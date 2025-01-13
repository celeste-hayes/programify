import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { InspirationFactory } from './inspiration.js';

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
});

const User = UserFactory(sequelize);
const Inspiration = InspirationFactory(sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

export { sequelize, User, Inspiration };

