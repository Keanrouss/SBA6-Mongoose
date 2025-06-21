import mongoose from 'mongoose'
const menuSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      ingredients: {
         type: String,
      }
      // allergens : Boolean,
   },
   price: {
      type: Number,
      required: true,
      minimum: 9.99,
   },

},{timestamps: {createdAt : "created_at", updatedAt: "updated_At"}})
export default mongoose.model('Dish', menuSchema)