import { Request, Response } from "express";
import FoodOrders from "../Model/user";
class FoodOrder {
    public orderFood = async (req: Request, res: Response) => {
        const { name, email, item, table, tableNo } = req.body;

        if (!name) {
            return res.status(200).json({ status: false, data: "Please Provide Name" });
        }
        if (!item) {
            return res.status(200).json({ status: false, data: "Please Provide Item" });
        }
        if (!email) {
            return res.status(200).json({ status: false, data: "Please Provide Email" });
        }

        if (!table) {

            return res.status(200).json({ status: false, data: "Please Provide Table Selection" });
        }

        if (table === 'yes') {
            if (!tableNo) {
                return res.status(200).json({ status: false, data: "Please Provide Table No" });
            }
        }

        if (tableNo) {
            const order = new FoodOrders({
                name: name,
                item: item,
                email: email,
                table: table,
                tableNo: tableNo
            })
            await order.save();
        } else {
            const order = new FoodOrders({
                name: name,
                item: item,
                email: email,
                table: table,
            })
            await order.save();
        }


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





}


export default FoodOrder;