const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
    },
    img: {
      type: DataTypes.STRING,
      allownull: true,
    },
    deleteFlag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bannedFlag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    matched_users: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    coins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    favoriteGames: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    servers: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    missionCompleted: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    isAdmin: {
      type: DataTypes.JSON,
      defaultValue: { user: true, admin: false, superAdmin: false },
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    plan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
