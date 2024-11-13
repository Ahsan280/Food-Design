import React from "react";
import image1 from "../../../assets/images/Rectangle 8863.png";
import "./chef.css";
const Chef = () => {
  return (
    <div className="food-category my-20 flex flex-col gap-6">
      <h1 className="text-center text-5xl federo-regular text-gray-800">
        Meet Our Chef
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 container px-5 gap-5 md:gap-10 mx-auto">
        <div className="card rounded-md">
          <img src={image1} alt="" />
          <div className="badge">
            <h1 className="ml-3  mt-3 federo-regular">D.Estwood</h1>
            <p className="ml-3 montserrat">Chief Chef</p>
          </div>
        </div>
        <div className="card rounded-md">
          <img src={image1} alt="" />
          <div className="badge">
            <h1 className="ml-3 mt-3 federo-regular">D.Estwood</h1>
            <p className="ml-3 montserrat">Chief Chef</p>
          </div>
        </div>
        <div className="card rounded-md">
          <img src={image1} alt="" />
          <div className="badge  ">
            <h1 className="ml-3 mt-3 federo-regular">D.Estwood</h1>
            <p className="ml-3 montserrat">Chief Chef</p>
          </div>
        </div>
        <div className="card rounded-md">
          <img src={image1} alt="" />
          <div className="badge  ">
            <h1 className="ml-3 mt-3 federo-regular">D.Estwood</h1>
            <p className="ml-3 montserrat">Chief Chef</p>
          </div>
        </div>
      </div>
      <button className="mx-auto bg-customTeal px-10 py-3 rounded-xl text-white">
        Read More
      </button>
    </div>
  );
};

export default Chef;
