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
    },
    table:{
        type:Boolean,
        required:true
    },
    tableNo:{
        type:Number,
        required:true,
        default:9999

    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

const FoodOrder = model<userInterface>("Order", userSchema)

export default FoodOrder;