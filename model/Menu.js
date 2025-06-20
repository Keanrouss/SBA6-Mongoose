import mongoose from 'mongoose'
const recipeSchema = new mongoose.Schema({
    title: {
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
