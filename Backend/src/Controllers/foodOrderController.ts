import {Request, Response } from "express"; 
import FoodOrders from "../Model/user";
class FoodOrder {
public orderFood = async (req:Request,res:Response)=>{
    const {name , item} =req.body;
    if(!name){
        return res.status(422).json({status:false,data:"Please provide name"})
    }
    if(!item){
        return res.status(422).json({status:false,data:"Please provide item"})
    }
    const order = new FoodOrders({
        name:name,
        item:item
    })
    await order.save();
    return res.status(201).json({status:true,data:'Your Order has been placed successfully'})

    

};


   
}


export default FoodOrder;