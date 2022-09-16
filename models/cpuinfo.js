const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Cpu extends Model {}

Cpu.init(
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
        catagory: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        
        modelName: 'cpuinfo'
    }
);

module.exports = Cpu;
