// const axios = require("axios");
// const express = require("express");
// // const newsSchema = require("../models/New");
// const getAllNews = require("../controllers/NewsController");

// router.get("/", async (req, res, next) => {
//   const { title } = req.query;
//   try {
//     let allNews = await getAllNews();
//     if (title) {
//       let newsTitle = allNews.filter((el) =>
//         el.title.toLowerCase().includes(title.toLowerCase())
//       );
//       newsTitle.length
//         ? res.status(200).json(newsTitle)
//         : res.status(500).json("No se encontraron resultados");
//     } else {
//       res.status(200).json(allNews);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   newsSchema
//     .findById(id)
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.post("/", (req, res) => {
//   const news = newsSchema(req.body);
//   news
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// router.put("/", (req, res) => {
//   const { id } = req.params;
//   const { deleteFlag } = req.body;
//   newsSchema
//     .updateOne(
//       { _id: id },
//       {
//         $set: {
//           deleteFlag,
//         },
//       }
//     )
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

// const router = express.Router();
