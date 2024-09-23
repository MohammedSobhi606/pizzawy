import OrdersModel from "../models/OrdersModel.js";
import userModel from "../models/UserModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const placeOrder = async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData: {},
    });
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Total",
        },
        amount: 2 * 10 * 100,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: line_items,
      success_url: `${process.env.CLIENT_URL}/verify?success=true&order_id=${newOrder._id}`,
      cancel_url: `${process.env.CLIENT_URL}/verify?success=false&order_id=${newOrder._id}`,
    });
    res.json({
      session_url: session.url,
      msg: "ok payment saved",
      sessionid: session.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error placing order" });
  }
};

export { placeOrder };
