const { DataTypes } = require("sequelize");
const sequelize = require('../config');
const User = require('./user.model');

// Define TrainingSet model
const TrainingSet = sequelize.define('TrainingSet', {
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
  }
});

// Define association
TrainingSet.belongsTo(User);

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('TrainingSet table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = TrainingSet;