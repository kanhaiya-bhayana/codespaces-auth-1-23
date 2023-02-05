const express = require('express')
const app  = express()

require('dotenv').config()

module.exports =  app;

app.get("/",(req, res)=>{
    res.send("<h1>Server is working</h1>")
})