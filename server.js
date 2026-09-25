require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require('express')
require('dotenv').config()
const app = express()
const ConnectDB = require('./config/ConnectDB')
const studentRouter = require('./routes/studentRoutes')
const courseRouter = require('./routes/courseRoutes')

app.use(express.json())
app.use('/api/v1/std',studentRouter)
app.use('/api/v1/crs',courseRouter)
ConnectDB()

app.listen(process.env.PORT,()=>{
    console.log('server is running');
    
})