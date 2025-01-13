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
      allowNull: false,
    },
    text: { // Change 'text' to 'description' is better then 'text'
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: { // Added a description field to replace 'text' but I did not want to break the code
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'inspo_cards',
    timestamps: false, // No timestamps needed
  });

  return Inspiration;
}

