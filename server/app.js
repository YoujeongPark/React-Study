import express from 'express'
import mongoose from 'mongoose'
import config from './config'

const app = express()
const {MONGO_URI} = config

mongoose.connet(MONGO_URI,{
    useNewUrlParser : true
})
.then(()=> console.log("MongoDB conncting Success!! "))
.catch((e) => console.log(e))

app.get('/')

export default app; 
