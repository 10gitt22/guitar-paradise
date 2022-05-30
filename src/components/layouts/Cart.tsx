import React, { BaseSyntheticEvent } from "react";
import useAuth from "hooks/store/useAuth";
import { ordersAPI } from "api";
import { CartItemType } from "types/types";
import CartItem from "components/layouts/CartItem";

type CartProps = {
  isOpen: boolean;
  cartProducts: CartItemType[];
  totalPrice: number;
  setIsOpen: (isOpen: boolean) => {
    payload: any;
    type: string;
  };
  clearCart: () => {
    payload: undefined;
    type: string;
  };
};

const Cart: React.FC<CartProps> = ({
  isOpen,
  cartProducts,
  totalPrice,
  setIsOpen,
  clearCart,
}) => {
  const { currentUser } = useAuth();

  const handleCreateOrder = async () => {
    if (!currentUser) {
      alert("You're not logged in. To make order please authorize");
    } else {
      await ordersAPI.createOrder(currentUser.uid, {
        products: cartProducts,
        totalPrice: totalPrice,
      });
      alert("Order created. Wait phone call for details");
      clearCart();
    }
  };

  return isOpen ? (
    <div
      className="modal-background"
      onClick={(e: BaseSyntheticEvent) => {
        if (e.target.className === "modal-background") {
          setIsOpen(!isOpen);
        }
      }}
    >
      <div className="cart">
        <h1 className="cart-title">Cart:</h1>
        <div className="cart-list">
          {cartProducts.length === 0 ? (
            <div className="cart-empty">Cart is empty</div>
          ) : (
            cartProducts.map((item) => <CartItem data={item} key={item.id} />)
          )}
        </div>
        <div className="cart-confirm">
          <div className="summary">
            <span>Total:</span> <strong>{totalPrice}$</strong>
          </div>
          <div className="btn-primary" onClick={handleCreateOrder}>
            Create order
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
