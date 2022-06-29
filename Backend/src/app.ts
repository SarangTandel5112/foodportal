import express from 'express';
import "dotenv/config";
import connection from "./DBConnection/connect"
import FeedBackRouter from './Routes/foodFeedbackRoutes';
import FoodOrderRoutes from './Routes/foodOrder';
const foodRouter = new FoodOrderRoutes().router;
const feedbackRouter = new FeedBackRouter().router;
new connection();


class App{
    private app:express.Application;
    constructor(){
        this.app=express();
        this.middlewares();
        this.routes();
        this.app.use((err: any, req: any, res: any, next: any) => {
            res.status(500).json({status: false,data:"Some Internal Server Error Occured"});
            console.log(err.stack)
            console.log("Internal Server Error Occured")
            next();

        });


        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
         });
    }
    private middlewares(){
       this.app.use(express.json());
       this.app.use(express.urlencoded({ extended: false }));

    }
    private routes(){
        this.app.use('/foodorder',foodRouter);
        this.app.use('/feedback',feedbackRouter)


    }
}
export default App;
