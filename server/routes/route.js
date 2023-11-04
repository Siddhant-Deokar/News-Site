const express = require('express');
// import { getNews } from '../controller/news-controller.js';
const getNews = require('../controller/news-controller.js');
const route = express.Router();

route.get('/news' ,getNews)

module.exports = route;