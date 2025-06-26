import { Router } from 'express';
import Comment from '../model/comment.js'
const commentRouter = Router()

//to get all of comments
commentRouter.get('/', async (req, res, next) => {
   try {
    res.json(await Comment.find())
   } catch (error) {
    error.status = 404
    next(error)
   }
})//to post a comment
commentRouter.post('/', async (req, res) => {
        try {
            const Comment = await Comment.create(req.body);
            res.status(201).json(Comment)
            console.log(Comment)
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