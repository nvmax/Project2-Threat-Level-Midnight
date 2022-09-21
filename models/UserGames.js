const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our UserGames model
class UserGames extends Model {}

// create fields/columns for Trip model
UserGames.init(
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
        model: "User",
        key: "id",
        unique: false,
      },
    },
    steam_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Steam",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "usergames",
  }
);

module.exports = UserGames;
