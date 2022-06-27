import {Request, Response } from "express"; 
class FoodFeedback {
public collectFeedback = (req:Request,res:Response)=>{
    res.send("feedback send");

};


   
}


export default FoodFeedback;