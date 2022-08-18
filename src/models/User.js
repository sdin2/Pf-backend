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
      default: false,
    },
    bannedFlag: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    matched_users: {
      type: DataTypes.STRING,
      default: [],
    },
    coins: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    favoriteGames: {
      type: DataTypes.JSON,
      default: [],
    },
    servers: {
      type: DataTypes.JSON,
      default: [],
    },
    missionCompleted: {
      type: DataTypes.JSON,
      default: [],
    },
    isAdmin: {
      type: DataTypes.JSON,
      default: { user: true, admin: false, superAdmin: false },
    },
    rating: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    plan: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  });
};
