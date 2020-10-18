const { Sequelize } = require('sequelize');

module.exports = connectDatabase = async () => {
    const sequelize = new Sequelize('minh', 'root', '12345678', {
        host: 'localhost',
        dialect: 'mysql',
        logging: console.log,                  // Default, displays the first parameter of the log function call
    });
      
    return await sequelize.authenticate();
}

