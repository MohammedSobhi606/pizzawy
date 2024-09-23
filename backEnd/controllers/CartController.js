import userModel from "../models/UserModel.js";

// function to add to cart

const addToCart = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    let cartData = await user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({
      message: "الحمد لله",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// function to remove from cart
const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    let cartData = await user.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    } else {
      cartData[req.body.itemId] = null;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({
      message: "remove from cart",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// function to update cart item quantity

// function to get cart items

const getCartItems = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    let cartData = await user.cartData;

    res.status(200).json({
      message: "here the cart data",
      data: cartData,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export { addToCart, removeFromCart, getCartItems };
