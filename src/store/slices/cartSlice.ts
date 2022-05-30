import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { CartItemType } from "types/types";

type CartInitialState = {
  isOpen: boolean;
  cartProducts: CartItemType[];
  productsCount: number;
  totalPrice: number;
};

export type ChangeQuantityPayload = {
  product: CartItemType;
  newValue: number;
};

const initialState: CartInitialState = {
  isOpen: false,
  cartProducts: [],
  productsCount: 0,
  totalPrice: 0,
};

function countTotalPrice(products: CartItemType[]) {
  let sum = 0;
  products.forEach((e) => {
    sum += e.quantity * e.price;
  });
  return sum;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    addToCart(state, action: PayloadAction<CartItemType>) {
      const changedArray = [...state.cartProducts, action.payload];
      state.cartProducts = changedArray;
      state.productsCount = changedArray.length;
      const total = countTotalPrice(state.cartProducts);
      state.totalPrice = total;
    },
    removeFromCart(state, action: PayloadAction<CartItemType>) {
      const changedArray = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartProducts = changedArray;
      state.productsCount = changedArray.length;
      const total = countTotalPrice(state.cartProducts);
      state.totalPrice = total;
    },
    changeQuantity(state, action: PayloadAction<ChangeQuantityPayload>) {
      const index = state.cartProducts.findIndex(
        (e) => e.id === action.payload.product.id
      );
      state.cartProducts[index].quantity = action.payload.newValue;
      const total = countTotalPrice(state.cartProducts);
      state.totalPrice = total;
    },
    clearCart(state) {
      state.isOpen = false;
      state.cartProducts = [];
      state.totalPrice = 0;
      state.productsCount = 0;
    },
  },
});

export const getCartSelector = (state: RootState) => state.cart;
export const {
  setIsOpen,
  addToCart,
  removeFromCart,
  changeQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
