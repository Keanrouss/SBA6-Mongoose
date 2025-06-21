import mongoose from 'mongoose'
const commentSchema = new mongoose.Schema({

    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    comment: {
        type: String,
        required: true,
        minLength: 10,
    },
    rating: {
        type: Number,
        required: true,
        minimum: 1,
        maximum: 5,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_At" } })
export default mongoose.model('Comment', commentSchema)
