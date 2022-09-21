const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Steam extends Model {}

Steam.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        appid: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,        
        modelName: 'steam'
    }
);

module.exports = Steam;
