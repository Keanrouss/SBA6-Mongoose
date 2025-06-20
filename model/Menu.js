import mongoose from 'mongoose'
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     description: {
        ingredients : String,
        allergens : required,
     },
     price :{
        type : Number,
        required : true,
        minimum : 9.99,
     },
     
})
 export default mongoose.model('Dish', foodSchema)