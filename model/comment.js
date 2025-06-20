import mongoose from 'mongoose'
const commentSchema = new mongoose.Schema({

    foodname: {
        type: String,
        required : true,
    },
    username: {
        type : String,
        required : true,
    },
    email :{
        type : String,
        required: true,
    },
    comment :{
        type: String,
        required: true,
        minLength: 25,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})
 export default mongoose.model('review', commentSchema)