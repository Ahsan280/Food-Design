import React from "react";
import "./menuheader.css";
import MyMenu from "../../MyMenu/MyMenu";
const MenuHeader = () => {
  return (
    <div className="menu-header">
      <div className="overlay"></div>
      <div className="content ">
        <h1 className="federo-regular text-white text-center text-7xl py-4">
          Menu
        </h1>
        <div
          className="relative flex justify-end pr-4 "
          style={{ marginTop: "-50px" }}
        >
          <MyMenu style={{ marginTop: "-50px" }} />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
