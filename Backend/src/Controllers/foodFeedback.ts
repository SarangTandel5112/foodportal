import { Request, Response } from "express";
import Feedback from "../Model/feedback";
class FoodFeedback {
    public collectFeedback = async (req: Request, res: Response) => {
        const { name, rating, feedback } = req.body;
        if (!name) {
            return res.status(422).json({ status: false, data: "Please provide name" })
        }
        if (!rating) {
            return res.status(422).json({ status: false, data: "Please provide rating" })
        }
        const feedbackobj: any = new Feedback({
            name: name,
            rating: rating,
            feedback: feedback
        });
        await feedbackobj.save();
        return res.status(201).json({ status: false, data: `Thank You ${name}! ,FeedBack Collected Succssfully` })

    };



}


export default FoodFeedback;