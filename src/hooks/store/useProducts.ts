import { useCallback } from "react";
import useAppSelector from "hooks/useAppSelector";
import useAppDispatch from "hooks/useAppDispatch";
import { getProducts, getProductsSelector } from "store/slices/productsSlice";

export default function useProducts() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector(getProductsSelector);

  const _getProducts = useCallback(() => dispatch(getProducts()), [dispatch]);

  return {
    products,
    loading,
    getProducts: _getProducts,
  };
}
