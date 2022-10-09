const express = require('express')
const app = express()
const cors = require('cors')
const axios= require('axios')
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); }
    app.use(cors())
  
    app.get('/', function(req,res){
    var a = getRandomIntInclusive(-1,5)
    res.send(a.toString())
})
app.listen(4000, function(req, res){
    console.log('runing')
})
