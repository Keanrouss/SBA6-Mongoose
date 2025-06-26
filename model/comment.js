import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    
    




    
},{ timestamps: { createdAt: "created_at", updatedAt: "updated_At" } })
export default mongoose.model('Comment', commentSchema)
