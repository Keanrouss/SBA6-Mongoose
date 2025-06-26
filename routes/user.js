import { Router } from 'express';
import Client from '../model/user.js'
const userRouter = Router()

// create an user
userRouter.post('/', async (req, res, next) => {
    try {
        const user = await Client.create(req.body)
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        error.status = 400
        next(error)
    }
})
//to get all of users
userRouter.get('/', async (req, res, next) => {
   try {
    res.json(await Client.find())
   } catch (error) {
    error.status = 404
    next(error)
   }
    

});
//patch so users can update info
userRouter.patch('/:id', async (req, res) => {
    try{
    res.json(await Client.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        error.status = 404

    }
});

userRouter.delete('/:id', async (req, res) => {
    try {
        const result = await Client.deleteOne({_id: req.params.id});
        if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
        console.log(req.params.id)
        res.json('Client deleted Successfully!')
    } catch (error) {
    }
});




export default userRouter;