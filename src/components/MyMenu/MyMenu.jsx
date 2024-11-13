import React from "react";
import { HiHome } from "react-icons/hi";
import { IoMdRestaurant } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "./myMenu.css";
import { Link } from "react-router-dom";
const MyMenu = () => {
  return (
    <div className="MyMenu federo-regular pt-4 md:pt-0 flex md:flex-col gap-5 text-white">
      <div className="flex flex-col gap-3 justify-center items-center">
        <HiHome className="md:text-2xl" />
        <Link to="/">Home</Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <IoMdRestaurant className="md:text-2xl" />
        <Link to="/menu">Menu</Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <VscOrganization className="md:text-2xl" />
        <Link to="/franchise">Franchise</Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <FaCircleExclamation className="md:text-2xl" />
        <Link to="/cart">About</Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <FaPhoneAlt className="md:text-2xl" />
        <Link to="/checkout">Contact</Link>
      </div>
      <div className="mx-auto flex flex-col justify-center items-center">
        <Link
          to="/product-details"
          className="bg-teal-500 py-2 px-1  md:px-2 rounded-lg"
          style={{ fontSize: "10px" }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default MyMenu;
