"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedback_1 = __importDefault(require("../Model/feedback"));
class FoodFeedback {
    constructor() {
        this.collectFeedback = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, rate, feedback } = req.body;
            if (!name) {
                return res.status(200).json({ status: false, data: "Please provide name" });
            }
            if (!rate) {
                return res.status(200).json({ status: false, data: "Please provide rating" });
            }
            const feedbackobj = new feedback_1.default({
                name: name,
                rating: Number(rate),
                feedback: feedback
            });
            yield feedbackobj.save();
            return res.status(201).json({ status: false, data: `Thank You ${name}! ,FeedBack Collected Succssfully` });
        });
    }
}
exports.default = FoodFeedback;
