import mongoose  from "mongoose"

interface feedbackInterface extends mongoose.Document {
    name:String
    rating: Number,
    feedback: String
}

export default feedbackInterface;