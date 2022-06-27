import { Schema, model } from "mongoose"
import userInterface from "../Interface/user"

const userSchema = new Schema<userInterface>({
    name: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    }
},{timestamps:true})

const FoodOrder = model<userInterface>("Order", userSchema)

export default FoodOrder;