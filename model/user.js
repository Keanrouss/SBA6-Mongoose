import mongoose from 'mongoose'
 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,// an username must be entered.
        unique: true, //unique cannot be the same as other users info
    },
    email: {
        type: String,
        required: true,
        unique: true, //can't be same as other users' emails.
    },
    password: {
        type: String,
        required: true,
        minLength: 12, //has to be 12 characters long or won't be accepted
    },

 },{timestamps: {createdAt : "created_at", updatedAt: "updated_At"}})
 userSchema.index({username: 1})
 
 export default mongoose.model('Client', userSchema)