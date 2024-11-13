import React from "react";
import "./book.css";
import image1 from "../../../assets/images/frame4.png";
const BookEarly = () => {
  return (
    <div className="book bg-gray-600 h-[55vh] my-20">
      <div className="overlay"></div>
      <div className="content flex flex-col text-white justify-center items-center gap-10">
        <h1 className="federo-regular text-5xl md:text-7xl text-center">
          Book Early & Save
        </h1>
        <p className="text-3xl montserrat text-center">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button className="py-3 px-10 rounded-lg bg-customTeal">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookEarly;
