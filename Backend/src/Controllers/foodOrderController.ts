import {Request, Response } from "express"; 
class FoodOrder {
public orderFood = (req:Request,res:Response)=>{
    res.send("ordered food");

};


   
}


export default FoodOrder;