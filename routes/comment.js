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
})//to post a comment
commentRouter.post('/', async (req, res) => {
        try {
            const Comment = await Comment.create(req.body);
            res.status(201).json(Comment)
        } catch (error) {
            res.status(400).json('Please Try again!')
        }
    }) //to allow user to update comment
commentRouter.patch('/:id', async (req, res) => {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    })
// allow users to delete comments
    commentRouter.delete('/:id', async (req, res) => {
    try {
        const oldComment = await Comment.findByIdAndDelete(req.params.id);
        console.log(oldComment)
        res.json('deletation Successfully!')
    } catch (error) {
    }
})

export default commentRouter;