import React from "react";
import "./header.css";
import MyMenu from "../../MyMenu/MyMenu";
const Header = () => {
  return (
    <div className="cart-header">
      <div className="overlay"></div>
      <div className="content ">
        <h1 className="federo-regular text-white text-center text-7xl py-4">
          Cart Items
        </h1>
        <div className="relative flex justify-end pr-4 ">
          <MyMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
