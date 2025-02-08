import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Make sure the import path is correct

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Ensure 'cart' is correctly assigned
  },
});

export default store;
