const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,      
      validate: {
        len: [6],
      },
    },
    ramsize: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hddsize: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cpu_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "cpuinfo",
            key: "id",
        },    
    },
    gpu_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "gpuinfo",
            key: "id",
        },
    },
    steam_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "steam",
            key: "id",
        },
      },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;