import React from "react";
import Header from "../../components/CartComponents/Header/Header";
import CartItems from "../../components/CartComponents/CartItems/CartItems";
import Coupon from "../../components/CartComponents/Coupon/Coupon";

const Cart = () => {
  return (
    <div>
      <Header />
      <CartItems />
      <Coupon />
    </div>
  );
};

export default Cart;
