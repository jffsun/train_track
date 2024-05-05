import { Sequelize } from 'sequelize';

// Define a type for the configuration object
interface SequelizeConfig {
  host: string;
  dialect: 'mysql';
}

// Instantiate 'sequelize' object of the imported class Sequelize
const sequelize = new Sequelize(
 'train_track_db',
 'jeffreysun',
 'Raven510',
  { // 2nd param that's passed in constructor conforms to the SequelizeConfig interface
    host: 'localhost',
    dialect: 'mysql'
  } as SequelizeConfig
);

// Export our sequelize object
export default sequelize;