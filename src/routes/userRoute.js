const express = require("express");
const userSchema = require("../models/users");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:id", (req, res) => {
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
  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
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
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
