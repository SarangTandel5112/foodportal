import mongoose, { Types } from "mongoose"

interface userInterface extends mongoose.Document {
    name: String,
    item: String
}

export default userInterface;