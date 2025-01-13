// models/inspiration.js
import { DataTypes, Model } from 'sequelize';

// Define the Inspiration model
export class Inspiration extends Model {}

// Create and initialize the Inspiration model
export function InspirationFactory(sequelize) {
  Inspiration.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      
    },
    description: { 
      type: DataTypes.TEXT,
      
    },
  }, {
    sequelize,
    tableName: 'inspo_cards',
    timestamps: false, // No timestamps needed
  });

  return Inspiration;
}

