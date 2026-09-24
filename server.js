const express = require('express')
const ConnectDB = require('./config/ConnectDB')
require('dotenv').config()
const app = express()
const studentRouter = require('./routes/studentRoutes')
const courseRouter = require('./routes/courseRoutes')

app.use(express.json())
app.use('/api/v1/std',studentRouter)
app.use('/api/v1/crs',courseRouter)
ConnectDB()

app.listen(process.env.PORT,()=>{
    console.log('server is running');
    
})