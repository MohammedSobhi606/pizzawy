import express from "express";
import { placeOrder } from "../controllers/OrderController.js";
const Ordersrouter = express.Router();
import auth from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", auth, placeOrder);

export default orderRouter;
