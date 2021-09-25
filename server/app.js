const express = require('express')
const app= express()
const dotenv = require('dotenv').config()

if(dotenv.error)
    throw dotenv.error;

require('../gateway').gateway(app)
app.listen( process.env.EXPRESS_PORT , ()=>{
    console.log(`RUNNING EXPRESS SERVER AT : ${process.env.EXPRESS_PORT}`)
})