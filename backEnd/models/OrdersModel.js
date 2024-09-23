import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },

  status: {
    type: String,
    required: true,
    default: "processing",
  },
  date: { type: Date, default: Date.now },
  payment: { type: Boolean, default: false, default: false },
});
const OrdersModel =
  mongoose.model.Order || mongoose.model("Order", orderSchema);
export default OrdersModel;
