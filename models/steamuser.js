const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SteamUsers extends Model {}

SteamUsers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false,
            },
        },
        steam_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'steam',
                key: 'id',
                unique: false,
            },
        },        
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,        
        modelName: 'steamuser'
    }
);

module.exports = SteamUsers;
