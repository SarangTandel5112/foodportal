"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../Model/user"));
class FoodOrder {
    constructor() {
        this.orderFood = (req, res) => __awaiter(this, void 0, void 0, function* () {
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
                const order = new user_1.default({
                    name: name,
                    item: item,
                    email: email,
                    table: table,
                    tableNo: tableNo
                });
                yield order.save();
            }
            else {
                const order = new user_1.default({
                    name: name,
                    item: item,
                    email: email,
                    table: table,
                });
                yield order.save();
            }
            return res.status(201).json({ status: true, data: 'Your Order has been placed successfully' });
        });
        this.comepleteOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orderId = req.params.orderId.trim();
            yield user_1.default.findByIdAndUpdate(orderId, { $set: { completed: true } });
            return res.status(200).json({ status: true, data: "Order Completed Successfully" });
        });
        this.getActiveordersOnTable = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orders = yield user_1.default.find({ completed: false, table: true });
            return res.status(200).json({ status: true, data: orders });
        });
        this.getActiveordersOnShop = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orders = yield user_1.default.find({ completed: false, table: false });
            return res.status(200).json({ status: true, data: orders });
        });
        this.getAllActiveOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orders = yield user_1.default.find({});
            return res.status(200).json({ status: true, data: orders });
        });
        this.placeOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.body.id;
            id = id.trim();
            if (!id) {
                return res.status(400).json({ status: false, data: "id not found" });
            }
            const orderdata = yield user_1.default.findById(id);
            // console.log(orderdata);
            if (!orderdata) {
                return res.status(400).json({ status: false, data: "Order not found" });
            }
            orderdata.completed = true;
            orderdata.save();
            res.status(200).json({ status: true, data: "Status changed successfully" });
        });
    }
}
exports.default = FoodOrder;
