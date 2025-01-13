import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

export class User extends Model {}

export function UserFactory(sequelize) {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
     
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      
    },
    firstName: {
      type: DataTypes.STRING,
      
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      
      field: 'last_name',
    },
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
  });
  return User;
}
