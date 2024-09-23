import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  showbar: false,
  searchvalue: "",
  cartItems: [],
  foodList: [],
  token: "",
  wishlist: [],
  compare: [],
  cartCount: 0,
  wishlistCount: 0,
  totalPrice: 0,
};
const States = createSlice({
  name: "states",
  initialState,
  reducers: {
    setShowbar(state) {
      state.showbar = !state.showbar;
    },
    setSearchValue(state, action) {
      state.searchvalue = action.payload;
    },

    removeFromCart(state, action) {
      const itemToRemove = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemToRemove) {
        state.cartItems = state.cartItems.filter(
          (item) => item !== itemToRemove
        );
        itemToRemove.quantity = action.payload.quantity;
      }
      state.cartCount = state.cartCount - action.payload.quantity;
    },
    updateQuantity(state, action) {
      const itemToUpdate = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
        state.cartCount = 0;
        state.cartItems.forEach((item) => (state.cartCount += item.quantity));
      }
    },
    calTotalPrice(state, action) {
      // state.totalPrice = state.cartItems.reduce((total, item) => {
      //   const product = action.payload.find((p) => p._id === item.id);
      //   return total + product.price * item.quantity;
      // }, 0);
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setfoodList(state, action) {
      state.foodList = action.payload;
    },
    setcartCount(state, action) {
      state.cartCount = action.payload;
    },
    setcartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const {
  setShowbar,
  setSearchValue,
  addToCart,
  removeFromCart,
  updateQuantity,
  calTotalPrice,
  setToken,
  setfoodList,
  setcartCount,
  setcartItems,
} = States.actions;
export default States.reducer;
