import React from "react";
import "./aboutUs.css";
import { FaCheck } from "react-icons/fa";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/unsplash_jpkfc5_d-DI@2x.png";
import image3 from "../../../assets/images/unsplash_mAQZ3X_8_l0.png";
const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-32 md:mt-0">
      <div className="text-content px-10 py-10 flex flex-col gap-10">
        <h1 className="text-3xl federo-regular">About Us</h1>
        <h1 className="text-5xl federo-regular w-9/12">
          We Create the best foody product
        </h1>
        <p className="text-start text-sm w-9/12 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat
        </p>
        <ul className="flex flex-col gap-5 list-none pl-0 text-sm text-gray-600">
          <li className="flex items-center">
            <FaCheck className="w-4 h-4  mr-2" /> Lacus nisi, et ac dapibus sit
            eu velit in consequat
          </li>
          <li className="flex items-center">
            <FaCheck className="w-4 h-4  mr-2" /> Quisque diam pellentesque
            bibendum non dui volutpat fringilla
          </li>
          <li className="flex items-center">
            <FaCheck className="w-4 h-4  mr-2" /> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </li>
        </ul>
        <button className="bg-customTeal px-5 py-3 md:w-1/4 text-white rounded-lg">
          Read More
        </button>
      </div>
      <div className="image-content p-10 flex flex-col gap-4">
        <img src={image1} alt="" className="w-full rounded-md" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
