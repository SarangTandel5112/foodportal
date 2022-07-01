import mongoose  from "mongoose"

interface feedbackInterface extends mongoose.Document {
    name:String,
    email:String,
    rating: Number,
    feedback: String
}

export default feedbackInterface;