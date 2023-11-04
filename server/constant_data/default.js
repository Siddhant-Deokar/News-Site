const data = require('./data.js');
const news = require('../model/newsSchema.js');

const DefaultData = async() =>{
    try{
        
        await news.insertMany(data);
        console.log('Data imported successfully')
    }catch(err){
        
    }
}

module.exports = DefaultData