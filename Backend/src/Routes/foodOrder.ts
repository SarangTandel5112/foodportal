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
      .get(food.orderFood);
  }
}
export default FoodOrderRoutes;