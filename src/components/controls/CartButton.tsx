import React from "react";
import { BsCart } from "react-icons/bs";

type CardButtonProps = {
  productsCount: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => {
    payload: any;
    type: string;
  };
};

const CartButton: React.FC<CardButtonProps> = ({
  productsCount,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className="btn-circle btn-open-cart"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="btn__inner">
        <BsCart />
        <div className="cart-count">{productsCount}</div>
      </div>
    </div>
  );
};

export default CartButton;
