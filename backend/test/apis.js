const fetch = require("isomorphic-fetch");
const apiRoot = require("../config/config.json")


//get ALL the airline data
const getDefaultCity = ()=>{
    return fetch(`${apiRoot.TEST_API}/`, {
        method: "GET"
    });
}

// get the arilne name according to the code
const getCity = ()=>{
    return fetch(`${apiRoot.TEST_API}/api/city/getcity`, {
        method: "POST",
        headers:{'Content-Type': 'application/json','Accept': 'application/json',},
        body:JSON.stringify({city:"Delhi"})
    });
}



module.exports = {
    getDefaultCity:getDefaultCity,
    getCity:getCity
}