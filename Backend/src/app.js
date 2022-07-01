"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const connect_1 = __importDefault(require("./DBConnection/connect"));
const foodFeedbackRoutes_1 = __importDefault(require("./Routes/foodFeedbackRoutes"));
const foodOrder_1 = __importDefault(require("./Routes/foodOrder"));
const foodRouter = new foodOrder_1.default().router;
const feedbackRouter = new foodFeedbackRoutes_1.default().router;
new connect_1.default();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.app.use((err, req, res, next) => {
            res.status(500).json({ status: false, data: "Some Internal Server Error Occured" });
            console.log(err.stack);
            console.log("Internal Server Error Occured");
            next();
        });
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/foodorder', foodRouter);
        this.app.use('/feedback', feedbackRouter);
    }
}
exports.default = App;
