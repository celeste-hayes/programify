require('dotenv').config();
const { Sequelize } = require('sequelize');

//User/Auth
const authDb = new Sequelize(
  process.env.DB_NAME,           
  process.env.DB_USER,            
  process.env.DB_PASSWORD,       
  {
    host: "localhost",  
    port: "5432", 
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,       
  }
);

// Inspiration Database
const inspoDb = new Sequelize(
  process.env.INSPIRATION_DB_NAME,
  process.env.INSPIRATION_DB_USER,
  process.env.INSPIRATION_DB_PASSWORD,
  {
    host: "localhost",
    port: "5432",
    dialect: "postgres",
    username: process.env.INSPIRATION_DB_USER,
    password: process.env.INSPIRATION_DB_PASSWORD,
    database: process.env.INSPIRATION_DB_NAME,              
  }
);

module.exports = { authDb, inspoDb };

