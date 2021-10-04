import dotenv from 'dotenv';
import pkg from 'sequelize';
const { Sequelize } = pkg;
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

// Test connection to the DB
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
