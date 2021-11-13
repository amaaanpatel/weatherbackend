const express = require('express');
const router = express.Router();
const debug = require('debug')("Home route*");
const cityController = require('../controller/city')


//route for home items 
router.post('/getcity',cityController.addCity);
router.get('/getcities',cityController.getCities);

module.exports = router;