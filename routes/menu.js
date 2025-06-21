import {Router} from 'express';
import Dish from '../model/Menu.js'
const menuRouter = Router()

//To get all food info
menuRouter.post ('/', async (req, res, next)=>{
try {
    const newFood = new Dish(req.body)
    const meal = await newFood.save()
    console.log(meal)
    res.send('Hello Clients!')
} catch (error) {
    next(error)
}

})

export default menuRouter;
