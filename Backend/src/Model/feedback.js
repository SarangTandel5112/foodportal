"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const feedbackSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    feedback: {
        type: String
    }
});
const Feedback = (0, mongoose_1.model)("Feedback", feedbackSchema);
exports.default = Feedback;
