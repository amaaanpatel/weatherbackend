
const config = require("../../config/config.json")
const axios = require('axios');
const City =  require('../../models/cities');

module.exports = {
    // add and get the city to the  database
    addCity: async (req,res) => {
        try {
            console.log(req.body)
            if(!req.body.city) return res.json({status:false,data:{},message:"Invalid Request"});
            //check if the city exist in the database 
            let city = await getCityInDataBase(req.body.city);
            //if city exist
            if(city.length) return res.json({status:true,data:city[0].data});
            let result = await axios.get(`${config.OW_BASE}/weather?q=${req.body.city}&appid=${process.env.OW_KEY}`);
            //add the city to the database for futhure
            if(result.data.cod == 200) await addCityToDatabase(result.data);
            //send the respnse
            res.json({status:true,data:result.data})
        } catch (error) {
            console.log('Error getdefaultcity >>>>>', error);
            res.json({status:false,data:{},message:"Some error"})
        }
    },
    //get all the cites for the list
    getCities:async (req,res) => {
        try {
            let result = await City.find({},{cityName:1,_id:0});
            res.json({status:true,data:result})
        } catch (error) {
            res.json({status:false})
        }
    }

}

// get the cities from the database
async function getCityInDataBase (cityName){
    try {
        let result = await City.find({cityName:cityName});
        return result
    } catch (error) {
        return []
    }
}

// add the city to the data base
async function addCityToDatabase  (citydata){
    try {
        let city = new City({cityName:citydata.name,data:citydata})
        await city.save();
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}