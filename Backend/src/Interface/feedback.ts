import mongoose, { Types } from "mongoose"

interface feedbackInterface extends mongoose.Document {
    rating: Number,
    feedback: String
}

export default feedbackInterface;