
const config = require("../../config/config.json")
const axios = require('axios');
const cityController = require('../controller/city')

module.exports = {
    // get the weathe deatils for the default city mumbai
    getDefaultCityWeather: async (req,res) => {
        try {
            let result = await axios.get(`${config.OW_BASE}/weather?q=mumbai&appid=${process.env.OW_KEY}`);
            //get the search cities
            res.json({status:true,data:result.data})
        } catch (error) {
            console.log('Error getdefaultcity >>>>>', error);
            res.json({status:false,message:"Some error"})
        }
    },
}