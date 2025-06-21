import { Router } from 'express';
import Comment from '../model/comment.js'
const commentRouter = Router()

//to get all of comments
commentRouter.post('/', async (req, res, next) => {
    try {
        const newComment = new Comment(req.body)
        const review = await newComment.save()
    
        res.status(201).json(review)
    } catch (error) {
        next(error)
    }
})
commentRouter.get('/', async (req, res, next)=>{
   
    try {
        const reviews = await Comment.find().populate({path:'menuId'}).populate({path:'userId', select: {username: 1,_id: 0}})
        res.status(200).json(reviews)
    } catch (error) {
        next(error) //connect menuId
    }
})
export default commentRouter;