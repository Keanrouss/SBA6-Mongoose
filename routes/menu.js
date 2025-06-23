import {Router} from 'express';
import Dish from '../model/Menu.js'
const menuRouter = Router()


menuRouter.post ('/', async (req, res, next)=>{
try {
    const newFood = new Dish(req.body)
    const meal = await newFood.save()
    console.log(meal)
    res.send('Hello Clients!')
} catch (error) {
    next(error)
}
//To get all food info
menuRouter.get ('/', async (req, res)=>{
    const dishes = await Dish.find().populate('category').populate('addedBy');
    res.json(dishes)
})

})
menuRouter.delete ('/:id', async (req, res)=>{
    try {
    const mealgone = await Dish.findByIdAndDelete(req.params.id)
    console.log(mealgone)
    res.status(200).json('dish deleted successfully')
    } catch (error) {
        next (error)
    }
})
export default menuRouter;
