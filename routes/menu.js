import { Router } from 'express';
import Dish from '../model/Menu.js'
const menuRouter = Router()



    //to create a dish where users can add on the menu
    menuRouter.post('/', async (req, res) => {
        try {
            const newDish = await Dish.create(req.body);
            res.status(201).json(newDish)
        } catch (error) {
            res.status(404).json('Failed to add dish, try again later')
        }
    })
    //To get all food info
    menuRouter.get('/', async (req, res, next) => {
        res.json(await Dish.find())
    })

    // patch route
    menuRouter.patch('/:id', async (req, res) => {
        const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    })


menuRouter.delete('/:id', async (req, res) => {
    try {
        const mealgone = await Dish.findByIdAndDelete(req.params.id)
        console.log(mealgone)
        res.status(200).json('dish deleted successfully')
    } catch (error) {
        next(error)
    }
})
export default menuRouter;
