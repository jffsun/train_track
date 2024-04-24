const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'train_track_db',
 'jeffreysun',
 'Raven510',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});