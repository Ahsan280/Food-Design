import React from "react";
import image from "../../../assets/images/Screenshot 2024-07-13 224723.png";
const Pourus = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-20">
      <div className="flex flex-col gap-10 mb-5 md:mb-0">
        <h1 className="federo-regular text-4xl py-5">Pouros and Sons</h1>
        <p className="montserrat text-3xl w-10/12 text-gray-700">
          646 First Street, Quigleyville 36427 country
        </p>
        <div className="flex montserrat text-3xl text-gray-500 gap-5">
          <div className="flex ">
            <span className="star" style={{ color: "rgba(255, 0, 0, 1)" }}>
              &#9733;
            </span>
            <span className="star" style={{ color: "rgba(255, 0, 0, 1)" }}>
              &#9733;
            </span>
            <span className="star" style={{ color: "rgba(255, 0, 0, 1)" }}>
              &#9733;
            </span>
            <span className="star" style={{ color: "rgba(255, 0, 0, 1)" }}>
              &#9733;
            </span>
            <span className="star" style={{ color: "rgba(255, 0, 0, 1)" }}>
              &#9733;
            </span>
          </div>
          <p>768-123 Reviews</p>
        </div>
        <p className="montserrat text-3xl text-gray-700">0321-1234-123</p>
      </div>
      <div className="image-container ">
        <img src={image} alt="" style={{ height: "400px" }} />
      </div>
    </div>
  );
};

export default Pourus;
