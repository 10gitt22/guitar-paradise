import React from "react";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Product } from "types/models";
import { Link } from "react-router-dom";

type ProductGridCardProps = {
  data: Product;
};

const ProductGridCard: React.FC<ProductGridCardProps> = ({ data }) => {
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
          <div className="btn-circle btn-cart">
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
