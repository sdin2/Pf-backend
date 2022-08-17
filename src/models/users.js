const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: false,
  },
  deleteFlag: {
    type: Boolean,
    default: true,
  },
  bannedFlag: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  matched_users: {
    type: String,
    required: false,
  },
  coins: {
    type: Number,
    default: 0,
  },
  favoriteGames: {
    type: Array,
    required: false,
  },
  servers: {
    type: Array,
    default: [],
  },
  missionCompleted: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Object,
    default: { user: true, admin: false, superAdmin: false },
  },
  rating: {
    type: Number,
    default: 0,
  },
  plan: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
