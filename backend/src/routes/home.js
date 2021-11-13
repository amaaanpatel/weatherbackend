const express = require('express');
const router = express.Router();
const debug = require('debug')("Home route*");
const homeController = require('../controller/home')


//route for home items 
router.get('/',homeController.getDefaultCityWeather);

module.exports = router;