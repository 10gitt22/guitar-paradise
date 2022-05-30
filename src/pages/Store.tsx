import React, { useEffect } from "react";
import Logo from "components/layouts/Logo";
import ProductsGrid from "components/layouts/ProductsGrid";
import useProducts from "hooks/store/useProducts";
import Loading from "components/layouts/Loading";

const Store: React.FC = () => {
  const { products, loading, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <Logo name="store" />
      <div className="page-content">
        {loading ? <Loading /> : <ProductsGrid data={products} />}
      </div>
    </div>
  );
};

export default Store;
