import mongoose, { Types } from "mongoose"

interface userInterface extends mongoose.Document {
    name: String,
    item: String,
    email:String,
    completed:Boolean,
    table:Boolean,
    tableNo:Number
}

export default userInterface;