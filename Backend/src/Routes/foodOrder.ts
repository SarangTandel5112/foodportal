import express from "express";
import FoodOrder from "../Controllers/foodOrderController";
const food = new FoodOrder();

class FoodOrderRoutes {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  private routes() {
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
export default FoodOrderRoutes;