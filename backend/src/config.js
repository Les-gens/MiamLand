import dotenv from 'dotenv';
import pkg from 'sequelize';
const { Sequelize } = pkg;
dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});

// Test connection to the DB
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
