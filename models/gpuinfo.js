const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GpuInfo extends Model {}


GpuInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gpu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    benchmark: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    type : {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: 'gpuinfo'
  }
);

module.exports = GpuInfo;