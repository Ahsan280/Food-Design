import React from "react";
import { HiHome } from "react-icons/hi";
import { IoMdRestaurant } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "./menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu mt-20">
      <div className="federo-regular flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center items-center">
          <HiHome className="text-2xl" />
          <Link to="/">Home</Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <IoMdRestaurant className="text-2xl" />
          <Link to="/menu">Menu</Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <VscOrganization className="text-2xl" />
          <Link to="/franchise">Franchise</Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <FaCircleExclamation className="text-2xl" />
          <Link to="/cart">About</Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <FaPhoneAlt className="text-2xl" />
          <Link to="/checkout">Contact</Link>
        </div>
        <div className="mx-auto">
          <button
            className="bg-teal-500 py-2 px-2 rounded-lg"
            style={{ fontSize: "10px" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
