const axios = require("axios");
const { Router } = require("express");
const { New } = require("../db");
const { getAllNews } = require("../controllers/NewsController");
require ('dotenv').config()
const {API_KEY} = process.env

const router = Router();

router.get("/", async (req, res, next) => {
  const { title } = req.query;
  try {
    let allNews = await getAllNews();
    if (title) {
      let newsTitle = allNews.filter((el) =>
        el.title.toLowerCase().includes(title.toLowerCase())
      );
      newsTitle.length
        ? res.status(200).json(newsTitle)
        : res.status(500).json("No se encontraron resultados");
    } else {
      res.status(200).json(allNews);
    }
  } catch (err) {
    next(err);
  }
});


router.get('/:id', async(req, res, next)=>{
    const {newsId} = req.params;
    try {
        if(newsId){
            let newsDB = await New.findOne({where: {id: newsId} })
            if(createInDb === "true"){
                return res.send({
                    id: newsDB.id,
                    title: newsDB.title,
                    short_description: newsDB.short_description,
                    main_image: newsDB.main_image,
                    article_content: newsDB.article_content,
                })}
        }else if(Number(newsId)!== NaN) {
        let newsById = await axios.get(`https://www.mmobomb.com/api1/latestnews?key=${API_KEY}`)
        newsById = newsById.data.find(e=>e.id === Number(newsId));
        if(newsById){
            newsById = {
                id: newsById._id,
                title: newsById.title,
                short_description: newsById.short_description,
                main_image: newsById.main_image,
                article_content: newsById.article_content,
        }
        }
        newsById ? res.status(200).send(newsById) : res.status(400).send('Id invalidate')
        }
        } catch (err) {
            next(err)   
        }

    });

router.post("/", async(req, res, next) => {
  const {title, short_description, main_image, article_content} = req.body;
  try {
      let newPost = await New.create({
        title ,
        short_description,
        main_image,
        article_content
      })
    res.send(newPost)
  } catch (err) {
    next(err)
  }
});

router.put("/", async (req, res, next) => {
  const { id } = req.params;
  const  newsData  = req.body;
   try {
    let newData = await New.findByPk(id)
    await newData.update({
        deleteFlag: newsData.deleteFlag,
        short_description: newsData.short_description,
        main_image: newsData.main_image,
        title: newsData.title,
        article_content: newsData.article_content
    })
    res.status(200).send('Update correctly');
   } catch (err) {
        next(err)
   }
});

// router.delete('/news', (req, res, next)=>{

// })

module.exports = router;
