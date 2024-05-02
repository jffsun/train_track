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
const User = require('./models/user.model');
const TrainingSet = require('./models/trainingSet.model')

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const user_data = [
   {name : "John Baker", gradeId: 2},
   {name : "Max Butler", gradeId: 1},
   {name : "Ryan Fisher", gradeId: 3},
   {name : "Robert Gray", gradeId: 2},
   {name : "Sam Lewis", gradeId: 1}
]

sequelize.sync({ force: true }).then(() => {
   Grade.bulkCreate(grade_data, { validate: true }).then(() => {
       Student.bulkCreate(user_data, { validate: true }).then(() => {
  
       }).catch((err) => { console.log(err); });
   }).catch((err) => { console.log(err); });
}).catch((error) => {
   console.error('Unable to create the table : ', error);
});