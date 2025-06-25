import { Router } from 'express';
import Client from '../model/user.js'
const userRouter = Router()

// create an user
userRouter.post('/', async (req, res, next) => {
    try {
        const user = await newUser.create(req.body)
        console.log(user)
        res.send('Hello Clients!')
    } catch (error) {
        next(error)
    }
})
//to get all of users
userRouter.get('/', async (req, res, next) => {
    res.json(await Client.find())

});
//patch so users can update info
userRouter.patch('/:id', async (req, res) => {
    res.json(await Client.findByIdAndUpdate(req.params.id, req.body))
});

userRouter.delete('/:id', async (req, res) => {
    try {
        const Client = await Client.findByIdAndDelete(req.params.id);
        console.log(Client)
        res.json('Client deleted Successfully!')
    } catch (error) {
    }
});




export default userRouter;