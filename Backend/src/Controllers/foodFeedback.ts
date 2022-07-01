import { Request, Response } from "express";
import Feedback from "../Model/feedback";
class FoodFeedback {
    public collectFeedback = async (req: Request, res: Response) => {
        let { name, rate, feedback ,email } = req.body;
        name=name.trim();
        feedback=feedback.trim();
        email=email.trim();
        if (!name) {
            return res.status(200).json({ status: false, data: "Please provide name" })
        }
        if (!email) {
            return res.status(200).json({ status: false, data: "Please provide email" })
        }
        if (!rate) {
            return res.status(200).json({ status: false, data: "Please provide rating" })
        }
        const feedbackobj: any = new Feedback({
            name: name,
            rating: Number(rate),
            email:email,
            feedback: feedback
        });
        await feedbackobj.save();
        return res.status(201).json({ status: false, data: `Thank You ${name}! ,FeedBack Collected Succssfully` })

    };



}


export default FoodFeedback;