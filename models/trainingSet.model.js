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
const User = require('./user.model')

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// Define Training set properties 
const TrainingSet = sequelize.define("trainingSets", {
  date: {
    type: DataTypes.DATEONLY,
  }, 
  exercise: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reps: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  set_type: {
    type: DataTypes.STRING,
    defaultValue: "Straight"
  },
});

// Define Training set and User model associations
TrainingSet.belongsTo(User);
User.hasMany(TrainingSet);

// Deletes a Training set table if it already exists
sequelize.sync({ force: true }).then(() => {
  console.log('Training set table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});