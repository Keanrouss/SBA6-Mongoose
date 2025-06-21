import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import user from "./model/user.js"
import menuSchema from "./model/Menu.js"
import comment from "./model/comment.js"
import userRoutes from "./routes/user.js"
import menuRouter from "./routes/menu.js"
import commentRouter from "./routes/comment.js"

const app = express()
const PORT = process.env.PORT


// const PORT = 3000
mongoose.connect(process.env.MONGO_URL) //added after adding the env isolation method.
console.log("connected")
//middleware to read JSON
app.use(express.json());
app.use('/api/users', userRoutes)
app.use ('/api/menus', menuRouter)
app.use ('/api/comments', commentRouter)
app.get('/', (req, res) => {
    res.send('Hello Mongoose')
}),

    app.listen(3000, () => {
        console.log(`Listening on port http://localhost:${3000}`);
    })