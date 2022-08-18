const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const { User } = require("../db.js");

// create user
router.post("/", async (req, res, next) => {
  const { email, nickname, img, password, favoriteGames } = req.body;
  try {
    const createUser = await User.create({
      email,
      nickname,
      img,
      password,
      favoriteGames,
    });
    res.send(createUser);
  } catch (error) {
    next(error);
  }
});

// get all users
router.get("/", async (req, res, next) => {
  try {
    const userData = await User.findAll();
    res.send(userData);
  } catch (error) {
    next(error);
  }
});

// get a user
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  try {
    const userData = User.findByPk(id);
    res.send(userData);
  } catch (error) {
    next(error);
  }
});

// update a user
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const {
    email,
    nickname,
    img,
    deleteFlag,
    bannedFlag,
    password,
    matched_users,
    coins,
    favoriteGames,
    servers,
    missionCompleted,
    isAdmin,
    rating,
    plan,
  } = req.body;

  try {
    const userData = await User.findByPk(id);
    // await User.findOne({ where: { firstName: 'John' } });
    const userUpdate = await userData.update(
      {
        where: {
          nickname: nickname,
        },
      }
      // email,
      // nickname,
      // img,
      // deleteFlag,
      // bannedFlag,
      // password,
      // matched_users,
      // coins,
      // favoriteGames,
      // servers,
      // missionCompleted,
      // isAdmin,
      // rating,
      // plan
    );
    res.status(200).json(userUpdate);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
