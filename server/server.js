const cors = require("cors");
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const appRoutes = require('./routes/appRoutes')

app.use(cors())

const PORT = 3001

// database connection
const dbURI = "mongodb://localhost:27017/todoapp";

mongoose.connect(dbURI,{
}).then(()=>{
 console.log('database connected')
}).catch(err=>{
console.log('database not connected',err)
})

app.get('/',(req,res)=>{
    res.json({
        message:"Hello My name is tanniru kailash!"
    })
})

app.get('/api',(req,res)=>{
    res.json({
        message:"Hello from the server!"
    })
})

app.listen(PORT ,()=>{
    console.log(`Server running on ${PORT}`)
})

app.use(appRoutes)