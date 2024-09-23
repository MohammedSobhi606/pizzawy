import {
  addToCart,
  removeFromCart,
  getCartItems,
} from "../controllers/CartController.js";
import authenticateToken from "../middlewares/auth.js";
import express from "express";

const cartRouter = express.Router();

cartRouter.post("/get", authenticateToken, getCartItems);

cartRouter.post("/add", authenticateToken, addToCart);

cartRouter.post("/remove", authenticateToken, removeFromCart);

export default cartRouter;
