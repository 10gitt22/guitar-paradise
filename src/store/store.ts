import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "store/slices/cartSlice";
import productsSlice from "store/slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
