require("dotenv").config();
const { Router } = require("express");
const { auth } = require("express-openid-connect");
const router = Router();
const newsRoute = require("./newsRoute");
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");
const genreRoute = require("./genreRoute");
const gamesRoute = require("./gamesRoute");

router.use("/news", newsRoute);
router.use("/users", userRoute);
router.use("/login", loginRoute);
router.use("/genre", genreRoute);
router.use("/games", gamesRoute);

module.exports = router;
