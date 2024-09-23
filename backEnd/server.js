import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { ConnectDB } from "./configs/dbConnect.js";
import foodrouter from "./routes/FoodRoute.js";
import userRouter from "./routes/UserRoute.js";
import cartRouter from "./routes/CartRoute.js";
import orderRouter from "./routes/OrdersRoute.js";
const app = express();
const port = 5000;

///middleware
app.use(express.json());
app.use(cors());
// db connection
ConnectDB();
// api endpoints
app.use("/api/food", foodrouter);
app.use("/images", express.static("uploads"));
// auth endpoints
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.get("/", (req, res) => {
  res.send("Hello,too World!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
