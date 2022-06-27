import { Schema, model } from "mongoose"
import feedbackInterface from "../Interface/feedback"

const feedbackSchema = new Schema<feedbackInterface>({
    rating: {
        type: Number,
        required: true
    },
    feedback: {
        type: String
    }
})

const Feedback = model<feedbackInterface>("Feedback", feedbackSchema)

export default Feedback;