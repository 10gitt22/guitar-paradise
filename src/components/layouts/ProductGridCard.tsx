import React from "react";
import useCart from "hooks/store/useCart";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Product } from "types/models";
import { CartItemType } from "types/types";

type ProductGridCardProps = {
  data: Product;
};

function checkInCart(id: string, cartProducts: CartItemType[]) {
  const product = cartProducts.find((e) => e.id === id);
  return product;
}

const ProductGridCard: React.FC<ProductGridCardProps> = ({ data }) => {
  const { cartProducts, setIsOpen, addToCart, changeQuantity } = useCart();

  const handleClick = () => {
    const product = checkInCart(data.id, cartProducts);

    if (product) {
      changeQuantity({
        product,
        newValue: product.quantity + 1,
      });
    } else {
      addToCart({
        id: data.id,
        price: data.price,
        quantity: 1,
        product: data,
      });
    }

    setIsOpen(true);
  };

  return (
    <div className="products-grid-card">
      <div
        className="pg-card-photo"
        style={{ backgroundImage: `url(${data.images.main})` }}
      >
        <div className="card-buttons">
          <div className="btn-circle btn-like">
            <AiOutlineHeart />
          </div>
          <div className="btn-circle btn-cart" onClick={handleClick}>
            <BsCart />
          </div>
        </div>
      </div>
      <div className="pg-card-info">
        <div className="pg-card-info-name">
          <div className="pg-brand">{data.brand}</div>
          <div className="pg-model">{data.model}</div>
        </div>
        <div className="pg-card-info-price">{data.price}$</div>
      </div>
    </div>
  );
};

export default ProductGridCard;
