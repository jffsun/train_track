import { Sequelize } from 'sequelize'; // Import Sequelize class from sequelize module
import sequelize from './config'; // Import sequelize instance from /config.ts

const sequelizeInstance: Sequelize = sequelize;

async function connectToDatabase() {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
}

connectToDatabase();