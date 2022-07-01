"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodFeedback_1 = __importDefault(require("../Controllers/foodFeedback"));
const feedback = new foodFeedback_1.default();
class FeedBackRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router
            .route("/")
            .post(feedback.collectFeedback);
    }
}
exports.default = FeedBackRouter;
