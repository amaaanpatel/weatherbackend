const express = require('express');
const router = express.Router();
const debug = require('debug')("Home route*");


//route for home items 
router.get('/',async(req,res)=>{
    debug('Home get /');
    try {
        // let data = await cartController.getCartItems(req);
        res.json({status:true});
    } catch (error) {
        
    }
});

module.exports = router;