import React, { useState } from "react";
import { CartItemType } from "types/types";
import { RiDeleteBackLine } from "react-icons/ri";
import useCart from "hooks/store/useCart";

type CartItemProps = {
  data: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { removeFromCart, changeQuantity } = useCart();
  const [quantityValue, setQuantityValue] = useState(data.quantity);

  return (
    <div className="cart-list-item">
      <div
        className="cl-item-photo"
        style={{ backgroundImage: `url(${data.product.images.main})` }}
      ></div>
      <div className="cl-item-info">
        <div className="cl-item-info-brand">{data.product.brand}</div>
        <div className="cl-item-info-model">{data.product.model}</div>
        <div className="cl-item-info-price">{data.product.price}$</div>
      </div>
      <input
        type={"number"}
        className="cl-item-quantity"
        value={quantityValue}
        onChange={(e) => {
          const value = parseInt(e.currentTarget.value);
          if (value > data.product.quantity) {
            setQuantityValue(data.product.quantity);
            changeQuantity({
              product: data,
              newValue: data.product.quantity,
            });
          } else if (value < 1) {
            setQuantityValue(1);
            changeQuantity({
              product: data,
              newValue: 1,
            });
          } else {
            setQuantityValue(value);
            changeQuantity({
              product: data,
              newValue: value,
            });
          }
        }}
      />
      <div className="cl-item-remove" onClick={() => removeFromCart(data)}>
        <RiDeleteBackLine />
      </div>
    </div>
  );
};

export default CartItem;
