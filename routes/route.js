const express = require('express');
const router = express.Router(); 
const axios = require('axios');
//home 
router.use("/", express.static("../covid19-app/public"));

//API
const API_worldTotal = "https://api.covid19api.com/world/total";
const API_country ="https://api.covid19api.com/live/country/";

//json management on world data
router.get("/covid/world", (req, res) => {

axios(API_worldTotal)
.then((result) => {

    res.json(result.data.TotalConfirmed);

}).catch((err) => {
    res.writeHead(404);
    res.json({"ERRORE: " : "RIPROVA TRA UN PO " +err});

});

});
//json management looking for status
router.get("/covid", (req, res) => {
    axios.get(API_country+req.query.countries)
    
    .then((result) => { 
        let x = result.data.length;
    res.json(result.data[x-1]);
    
    }).catch((err) => {
        res.send("La citta non è stata trovata "+err);

    });
   
});




module.exports = router;   