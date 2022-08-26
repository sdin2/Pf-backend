const { axios } = require("axios");
const express = require("express");
const router = express.Router();
const { Answer, Forum } = require("../db.js");

router.post("/", async (req, res, next) => {
  const id = req.body.id ? req.body.id : req.query.id;
  const forum = req.body;
  try {
    await Answer.create({
      comment: forum.comment,
      forumId: id,
    });
    res.send("Comment posted!");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const forumData = await Answer.findAll({
      include: {
        model: Forum,
        attributes: ["id", "title", "deleteFlag"],
      },
    });
    res.send(forumData);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const allBody = req.body;
  try {
    let forumData = await Answer.findByPk(id);
    await forumData.update({
      comment: allBody.comment,
      like: allBody.like,
      deleteFlag: allBody.deleteFlag,
    });
    res.json("Commentario editado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
