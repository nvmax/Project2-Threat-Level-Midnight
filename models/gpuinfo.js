const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class gpuinfo extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
}

gpuinfo.init(
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
    Type : {
        type: DataTypes.STRING,
        allowNull: true,
    },
  
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gpuinfo',
  }
);

module.exports = gpuinfo;