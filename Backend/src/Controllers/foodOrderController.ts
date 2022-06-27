import { Request, Response } from "express";
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
public comepleteOrder = async (req:Request , res:Response) =>{
    const orderId = req.params.orderId.trim();
    await FoodOrders.findByIdAndUpdate(orderId,{$set:{completed:true}});
    return res.status(200).json({status:true,data:"Order Completed Successfully"});
};

public getActiveorders = async (req:Request , res:Response)=>{
    const orders = await FoodOrders.find({completed:false});
    return res.status(200).json({status:true,data:orders})
}


   
}


export default FoodOrder;