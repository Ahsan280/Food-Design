import React from "react";
import "./header.css";
import MyMenu from "../../MyMenu/MyMenu";
const Header = () => {
  return (
    <div className="header">
      <div className="overlay"></div>
      <div className="content ">
        <h1 className="federo-regular text-white text-center text-7xl py-5">
          Our Branches
        </h1>
        <div
          className="relative flex justify-end pr-4 "
          style={{ marginTop: "-50px" }}
        >
          <MyMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
