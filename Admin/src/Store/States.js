import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  showbar: false,
  searchvalue: "",
  cartItems: [],
  wishlist: [],
  compare: [],
  cartCount: 0,
  wishlistCount: 0,
  totalPrice: 0,
};
const States = createSlice({
  name: "states",
  initialState,
  reducers: {},
});

export const {} = States.actions;
export default States.reducer;
