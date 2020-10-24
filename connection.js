const { Sequelize } = require('sequelize');
const UserModel = require('./models/Users');

const sequelize = new Sequelize('minh', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,                  // Default, displays the first parameter of the log function call
});
      
UserModel(sequelize)


module.exports = sequelize;