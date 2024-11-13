import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="pb-5 pt-2 bg-black text-white ">
      <div className="flex justify-between items-center font-sans container mx-auto">
        <div className="flex items-center gap-1 federo-regular ">
          English <FaChevronDown />
        </div>
        <div className="logo text-3xl montserrat">LOGO</div>
        <ul className="flex space-x-6">
          <li>
            <div
              className="h-[100%] bg-white bg-opacity-50"
              style={{ width: "0.06rem" }}
            ></div>
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </nav>
  );
}
