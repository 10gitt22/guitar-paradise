import React from "react";
import ProductGridCard from "components/layouts/ProductGridCard";
import { Product } from "types/models";

type ProductsGridProps = {
  data: Product[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ data }) => {
  return (
    <div className="products-grid">
      {data.map((item) => (
        <ProductGridCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
