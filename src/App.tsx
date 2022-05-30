import React from "react";
import { Route, Routes } from "react-router-dom";
import useCart from "hooks/store/useCart";

import Home from "pages/Home";
import Auth from "pages/Auth";
import Store from "pages/Store";
import Builder from "pages/Builder";
import Workshop from "pages/Workshop";

import Cart from "components/layouts/Cart";
import ProfileMenu from "components/layouts/ProfileMenu";
import CartButton from "components/controls/CartButton";

const App: React.FC<{}> = () => {
  const {
    isOpen,
    cartProducts,
    productsCount,
    totalPrice,
    setIsOpen,
    clearCart,
  } = useCart();
  return (
    <div className="App">
      <main>
        <ProfileMenu />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
        <CartButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productsCount={productsCount}
        />
      </main>
      <Cart
        isOpen={isOpen}
        cartProducts={cartProducts}
        totalPrice={totalPrice}
        setIsOpen={setIsOpen}
        clearCart={clearCart}
      />
    </div>
  );
};

export default App;
