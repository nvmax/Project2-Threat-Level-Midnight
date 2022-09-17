const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class CpuInfo extends Model {}

CpuInfo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cpu: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        benchmark: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },

    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,        
        modelName: 'cpuinfo'
    }
);

module.exports = CpuInfo;
