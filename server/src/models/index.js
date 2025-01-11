// models/index.js
import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { InspirationFactory } from './inspiration.js';

const User = UserFactory(sequelize);
const Inspiration = InspirationFactory(sequelize);

export { sequelize, User, Inspiration };  // Exporting both User and Inspiration
