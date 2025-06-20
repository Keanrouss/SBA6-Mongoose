import express from "express"
import mongoose from "mongoose"
import User from "./model/users"

const app = express()

import 'dotenv/config'
const PORT= process.env.PORT


// const PORT = 3000
mongoose.connect(process.env.MONGO_URL) //added after adding the env isolation method.
console.log("connected")
//middleware to read JSON
app.use (express.json());

app.get('/', (req, res)=> {
    res.send('Hello Mongoose')
}),
//to get all of users
app.get ('/users',async(req,res)=>{
    let data = await User.find({})
res.send(data)
})

app.listen(3000, () => {
    console.log(`Listening on port http://localhost:${3000}`);
})