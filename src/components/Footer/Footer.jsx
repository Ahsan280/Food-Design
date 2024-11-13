import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";

import { FaTelegramPlane } from "react-icons/fa";

import image1 from "../../assets/images/unsplash_PxJ9zkM2wdA.png";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/unsplash__79ZJS8pV70.png";
import image4 from "../../assets/images/image3.jpeg";
import image5 from "../../assets/images/unsplash_W10_NCsLVyc.png";
import image6 from "../../assets/images/unsplash_74yRjQ-cvNI.png";
const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-300  py-10 px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Newsletter */}
          <div>
            <h2 className="text-lg font-semibold federo-regular">LOGO</h2>
            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="py-2 px-3 bg-teal-500 text-white rounded-r-md">
                <FaTelegramPlane />
              </button>
            </div>
          </div>
          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold federo-regular">Contact us</h2>
            <div className="mt-4 text-gray-500 space-y-2">
              <p className="flex items-center">
                <IoLocationOutline className="mr-2" /> 25950 Long Lane, North
                Ismael 14280
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-2" /> 00965 - 96659986
              </p>
              <p className="flex items-center">
                <LuMailOpen className="mr-2" /> Jermaine.Connelly@yahoo.com
              </p>
              <p className="flex items-center">
                <CiClock2 className="mr-2" /> Sun - Sat / 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold federo-regular">Links</h2>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-teal-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Gallery */}
          <div>
            <h2 className="text-lg font-semibold federo-regular">Gallery</h2>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <img
                src={image1}
                alt="Gallery Item"
                className="w-full h-full object-cover"
              />
              <img
                src={image2}
                alt="Gallery Item"
                className="w-full h-full object-cover"
              />
              <img
                src={image3}
                alt="Gallery Item"
                className="w-full h-full object-cover"
              />
              <img
                src={image4}
                alt="Gallery Item"
                className="w-full h-full object-cover"
              />
              <img
                src={image5}
                alt="Gallery Item"
                className="w-full h-full object-cover"
              />
              <img
                src={image6}
                alt="Gallery Item"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-customTeal text-white  py-4  w-full ">
        <div className="mx-auto container flex justify-between items-center">
          <p>Copyright © 2000-2020.logo.com. All rights reserved</p>
          <div className="flex gap-5">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Term of Use
            </a>
            <a href="#" className="hover:underline">
              Partner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
