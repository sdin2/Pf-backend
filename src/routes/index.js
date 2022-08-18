require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { New, User } = require("../db.js");
const { Op } = require("sequelize");
const router = Router();
// const newsRoute = require("./newsRoute");
const userRoute = require("./userRoute");

// router.use("/news", newsRoute);
router.use("/users", userRoute);

module.exports = router;
