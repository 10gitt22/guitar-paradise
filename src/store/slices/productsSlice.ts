import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "api";
import { RootState } from "store/store";
import { Product } from "types/models";

type ProductsInitialState = {
  products: Product[];
  loading: boolean;
};

export const getProducts = createAsyncThunk(
  "products/get-products",
  async () => {
    const response = await productsAPI.getProducts();
    return response;
  }
);

const initialState: ProductsInitialState = {
  products: [],
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
  },
});

export const getProductsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
