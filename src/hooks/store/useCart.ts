import useAppSelector from "hooks/useAppSelector";
import useAppDispatch from "hooks/useAppDispatch";
import {
  addToCart,
  removeFromCart,
  getCartSelector,
  setIsOpen,
  changeQuantity,
  ChangeQuantityPayload,
  clearCart,
} from "store/slices/cartSlice";
import { useCallback } from "react";
import { CartItemType } from "types/types";

export default function useCart() {
  const dispatch = useAppDispatch();
  const { isOpen, cartProducts, productsCount, totalPrice } =
    useAppSelector(getCartSelector);

  const _setIsOpen = useCallback(
    (isOpen: boolean) => dispatch(setIsOpen(isOpen)),
    [dispatch]
  );

  const _addToCart = useCallback(
    (cartItem: CartItemType) => dispatch(addToCart(cartItem)),
    [dispatch]
  );

  const _removeFromCart = useCallback(
    (cartItem: CartItemType) => dispatch(removeFromCart(cartItem)),
    [dispatch]
  );

  const _changeQuantity = useCallback(
    (payload: ChangeQuantityPayload) => dispatch(changeQuantity(payload)),
    [dispatch]
  );

  const _clearCart = useCallback(() => dispatch(clearCart()), [dispatch]);

  return {
    isOpen,
    cartProducts,
    productsCount,
    totalPrice,
    setIsOpen: _setIsOpen,
    addToCart: _addToCart,
    removeFromCart: _removeFromCart,
    changeQuantity: _changeQuantity,
    clearCart: _clearCart,
  };
}
