"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DBConnection {
    constructor() {
        mongoose_1.default.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("Database Connected with atlas");
        }).catch((error) => {
            console.log(error);
        });
    }
}
exports.default = DBConnection;
