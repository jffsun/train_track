const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
 'train_track_db',
 'jeffreysun',
 'Raven510',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
const TrainingSet = require('./trainingSet.model');

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const User = sequelize.define("users", {
  user_id: {
     type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
     primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

User.hasMany(TrainingSet);
TrainingSet.belongsTo(User);

sequelize.sync().then(() => {
  console.log('User table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = User;