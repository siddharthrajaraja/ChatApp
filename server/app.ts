import bodyParser from "body-parser"
import express from 'express'
import {gateway} from './gateway'
const app= express()
const dotenv = require('dotenv').config()
const jsonParser = bodyParser.json()

gateway(app)

if(dotenv.error)
    throw dotenv.error;
app.use(jsonParser)

app.listen( process.env.EXPRESS_PORT , ()=>{
    console.log(`RUNNING EXPRESS SERVER AT : ${process.env.EXPRESS_PORT}`)
})