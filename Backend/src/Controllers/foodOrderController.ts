import { Request, Response } from "express";
import FoodOrders from "../Model/user";
import xlsx from 'xlsx';
class FoodOrder {
    constructor(){
        this.generateExelFile();
    }
    public orderFood = async (req: Request, res: Response) => {
        let { name, email, item, table, tableNo } = req.body;
        name = name.trim();
        console.log(name.length)
        email=email.trim();


        if (name.length < 4) {
            return res.status(200).json({ status: false, data: "Please Provide Name" });
        }
        if (!item) {
            return res.status(200).json({ status: false, data: "Please Provide Item" });
        }
        if (!email) {
            return res.status(200).json({ status: false, data: "Please Provide Email" });
        }


       

       
            const order = new FoodOrders({
                name: name,
                item: item,
                email: email,
            })
            await order.save();
        


        return res.status(201).json({ status: true, data: 'Your Order has been placed successfully' })



    };
    public comepleteOrder = async (req: Request, res: Response) => {
        const orderId = req.params.orderId.trim();
        await FoodOrders.findByIdAndUpdate(orderId, { $set: { completed: true } });
        return res.status(200).json({ status: true, data: "Order Completed Successfully" });
    };

    public getActiveordersOnTable = async (req: Request, res: Response) => {
        const orders = await FoodOrders.find({ completed: false, table: true });
        return res.status(200).json({ status: true, data: orders })
    }

    public getActiveordersOnShop = async (req: Request, res: Response) => {
        const orders = await FoodOrders.find({ completed: false, table: false });
        return res.status(200).json({ status: true, data: orders })
    }
    public getAllActiveOrders = async (req: Request, res: Response) => {
        const orders = await FoodOrders.find({});
        return res.status(200).json({ status: true, data: orders })
    }
    public placeOrder = async (req: Request, res: Response) => {
        let id = req.body.id;
        id = id.trim();
        if (!id) {
            return res.status(400).json({ status: false, data: "id not found" })
        }
        const orderdata = await FoodOrders.findById(id);
        // console.log(orderdata);
        if (!orderdata) {
            return res.status(400).json({ status: false, data: "Order not found" })
        }
        orderdata.completed = true;
        orderdata.save();
        res.status(200).json({ status: true, data: "Status changed successfully" })
    }

    public generateExelFile = async() => {
        const completedorders = await FoodOrders.find({completed:true}).select(["-_id","-__v","-createdAt","-updatedAt"]).lean();
        const allorders = await FoodOrders.find().select(["-_id","-__v","-createdAt","-updatedAt"]).lean();
        const tableorders = await FoodOrders.find({table:true}).select(["-_id","-__v","-createdAt","-updatedAt"]).lean();
        const stallOrders = await FoodOrders.find({table:false}).select(["-_id","-__v","-createdAt","-updatedAt"]).lean();

        const wb = xlsx.utils.book_new();
        const newWs = xlsx.utils.json_to_sheet(completedorders);
        const newWs2 = xlsx.utils.json_to_sheet(allorders);
        const newWs3 = xlsx.utils.json_to_sheet(tableorders);
        const newWs4 = xlsx.utils.json_to_sheet(stallOrders);


        xlsx.utils.book_append_sheet(wb,newWs2,"All Orders");
        xlsx.utils.book_append_sheet(wb,newWs," Completed Orders");
        xlsx.utils.book_append_sheet(wb,newWs3," Table Orders");
        xlsx.utils.book_append_sheet(wb,newWs4," Stall Orders");


        xlsx.writeFile(wb,"Orders.xlsx");




        

    }





}


export default FoodOrder;