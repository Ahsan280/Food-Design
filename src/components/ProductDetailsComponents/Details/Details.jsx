import React from "react";
import "./details.css";
import image1 from "../../../assets/images/close-up-delicious-chicken-meal.jpg";
const Details = () => {
  return (
    <div className="container mx-auto details w-[90%] my-20 ">
      <div className="grid grid-cols-1 h-full md:grid-cols-2">
        <div className="images-container h-full gap-5 flex flex-col md:flex-row">
          <div className="gallery flex flex-col ">
            <div className="flex md:flex-col gap-3 ">
              <div className="gal-image md:h-32 h-28 w-32 md:w-36 border-customTeal border-4">
                <img src={image1} className="w-full h-full" alt="" />
              </div>
              <div className="gal-image md:h-32 h-28 w-32 md:w-36 border-customTeal ">
                <img src={image1} className="w-full h-full" alt="" />
              </div>
              <div className="gal-image md:h-32 h-28 w-32 md:w-36 border-customTeal ">
                <img src={image1} className="w-full h-full" alt="" />
              </div>
              <div className="gal-image md:h-32 h-28 w-32 md:w-36 border-customTeal ">
                <img src={image1} className="w-full h-full" alt="" />
              </div>
            </div>
          </div>
          <div className="selected order-first md:order-last">
            <img src={image1} className="object-cover h-full" alt="" />
          </div>
        </div>
        <div className="h-full py-5  md:py-0 px-5 md:px-10 flex flex-col gap-10 ">
          <h1 className="federo-regular text-5xl text-gray-900">
            Product Name
          </h1>
          <p className="montserrat text-gray-700">Category: Pizza</p>
          <p className="montserrat text-gray-500 border-b border-gray-400 pb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <div className="flex flex-col gap-5 border-b border-gray-400 pb-5">
            <h1 className="montserrat text-3xl text-gray-700">54.00$</h1>
            <div className="flex gap-3 items-center montserrat">
              <div className="stars flex gap-2">
                <span className="text-red-500 text-2xl">&#9733;</span>
                <span className="text-red-500 text-2xl">&#9733;</span>
                <span className="text-red-500 text-2xl">&#9733;</span>
                <span className="text-red-500 text-2xl">&#9733;</span>
                <span className="text-red-500 text-2xl">&#9733;</span>
              </div>
              <div
                className="h-full bg-gray-400"
                style={{ width: "1px" }}
              ></div>
              <div>
                <p className="text-gray-700">5.0 Rating</p>
              </div>
              <div
                className="h-full bg-gray-400"
                style={{ width: "1px" }}
              ></div>
              <div>
                <p className="text-gray-700">22 Review</p>
              </div>
            </div>
            <p className="montserrat">Quantity</p>
            <div className="md:w-[60%] flex gap-5 ">
              <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden w-[60%]">
                <button className="flex-1 py-2 text-2xl text-centertext-gray-700 hover:bg-gray-100">
                  -
                </button>
                <div className="flex-1 py-4 text-center border-l border-r border-gray-700">
                  1
                </div>
                <button className="flex-1 py-2 text-2xl text-center text-gray-700 hover:bg-gray-100">
                  +
                </button>
              </div>

              <button className="bg-customTeal text-white py-2 px-5 rounded-xl w-[40%]">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
