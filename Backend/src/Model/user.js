"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    table: {
        type: Boolean,
        required: true
    },
    tableNo: {
        type: Number,
        required: true,
        default: 9999
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });
const FoodOrder = (0, mongoose_1.model)("Order", userSchema);
exports.default = FoodOrder;
