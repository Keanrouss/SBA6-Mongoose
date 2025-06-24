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
app.use((error, req, res, next) =>{
    console.error('Express Error Middleware', error);
    if (error) {
        res.status(error.status).json({
            message:error.message });
    } else {
       res.status(500).json ({message:'Internal Server Error',error:error.message||error}); 
    }
});
    app.listen(3000, () => {
        console.log(`Listening on port http://localhost:${3000}`);
    })