import {Router} from 'express';
import Client from '../model/user.js'
const userRouter = Router()

//to get all of users
userRouter.post ('/', async (req, res, next)=>{
try {
    const newUser = new Client(req.body)
    const visitor = await newUser.save()
    console.log(visitor)
    res.send('Hello Clients!')
} catch (error) {
    next(error)
}
})

userRouter.get('/', async (req,res, next)=>{
    res.json(await newUser.find())

});




export default userRouter;