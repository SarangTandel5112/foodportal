"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodOrderController_1 = __importDefault(require("../Controllers/foodOrderController"));
const food = new foodOrderController_1.default();
class FoodOrderRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router
            .route("/")
            .post(food.orderFood);
        this.router
            .route("/getactivetableorders")
            .get(food.getActiveordersOnTable);
        this.router
            .route("/getallactiveorders")
            .get(food.getAllActiveOrders);
        this.router
            .route("/getactiveshoporders")
            .get(food.getActiveordersOnShop);
        this.router
            .route("/placeorder")
            .post(food.placeOrder);
    }
}
exports.default = FoodOrderRoutes;
