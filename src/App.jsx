import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Franchising from "./pages/Franchising/Franchising";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/Menu/MenuPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/franchise" element={<Franchising />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
