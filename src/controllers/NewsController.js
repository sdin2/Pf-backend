const axios = require ('axios')
require('dotenv').config()
const {API_KEY} = process.env
const newsSchema = require("../models/news");


async function getNewsApi(){
    const newsApi = await axios.get(`https://mmo-games.p.rapidapi.com/latestnews?key=${API_KEY}`)
    const array = newsApi.map((e)=>{
        return {
            id: e.id,
            title: e.title,
            short_description: e.short_description,
            main_image: e.main_image,
            article_content: e.article_content
        }
    })
    return array;
}

const getNewsDB = async ()=>{
    newsSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };
  
async function getAllNews(){
    const apiNews = await getNewsApi()
    const DBNews = await getNewsDB()
    const allNews = apiNews.concat(DBNews)
    return allNews;
} 

module.exports={
    getNewsApi,
    getNewsDB,
    getAllNews
}