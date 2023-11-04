const news = require('../model/newsSchema.js');

const getNews = async(req,res) =>{
    try{
        let data = await news.find({});
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({message : data.message})
    }
}


module.exports = getNews;
