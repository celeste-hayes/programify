const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/inspoconnection');

const InspoCard = sequelize.define('InspoCard', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'inspo_cards',
  timestamps: false,
});

module.exports = InspoCard;
