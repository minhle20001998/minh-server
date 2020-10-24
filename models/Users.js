const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            unique: true,
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
        },
        address: {
            type: DataTypes.STRING,
        },
    }, {
        // Other model options go here
    });
};