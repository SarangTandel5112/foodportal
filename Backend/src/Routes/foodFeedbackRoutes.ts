import express from "express";
import FeedbackClasss from "../Controllers/foodFeedback";
const feedback = new FeedbackClasss();

class FeedBackRouter {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  private routes() {
    this.router
      .route("/")
      .post(feedback.collectFeedback);
  }
}
export default FeedBackRouter;