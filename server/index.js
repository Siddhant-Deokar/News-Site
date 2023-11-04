const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const route = require('./routes/route.js');

const DefaultData = require('./constant_data/default');

const app = express();

app.use(cors());

const PORT =  8000;


app.use('/',route)


const Connection = async() =>{
    const url = 'mongodb://localhost:27017/GothamNewz'
    try{
        await mongoose.connect(url)
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Error while connecting to databse")
    }
}
Connection();

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})
DefaultData();