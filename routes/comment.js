import { Router } from 'express';
import Comment from '../model/comment.js'
const commentRouter = Router()

//to get all of comments
commentRouter.post('/', async (req, res, next) => {
    try {
        const newComment = new Comment(req.body)
        const review = await newComment.save()
        console.log(review)
        res.send('Hello Clients!')
    } catch (error) {
        next(error)
    }
})
commentRouter.get('/', async (req, res, next)=>{
    res.send('leave words!')
    try {
        const reviews = awwait 
    } catch (error) {
        
    }
})
export default commentRouter;