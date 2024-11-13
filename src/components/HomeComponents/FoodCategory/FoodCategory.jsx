import React from "react";
import image1 from "../../../assets/images/unsplash_-lHZUkiWM74.png";
import image2 from "../../../assets/images/unsplash_dphM2U1xq0U.png";
import image3 from "../../../assets/images/unsplash_MRHyv-hHxgk.png";
import image4 from "../../../assets/images/unsplash_q54Oxq44MZs.png";
import "./food.css";
const FoodCategory = () => {
  return (
    <div className="food-category my-20 flex flex-col gap-5">
      <h1 className="text-center text-3xl federo-regular">Food Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 container px-5 gap-5 md:gap-10 mx-auto">
        <div className="card rounded-md">
          <img src={image1} alt="" />
          <div className="centerButton rounded-xl flex justify-center items-center">
            <button className="py-3 px-5 bg-customTeal text-white rounded-lg">
              Desert
            </button>
          </div>
        </div>
        <div className="card rounded-md">
          <img src={image2} alt="" />
          <div className="centerButton rounded-xl flex justify-center items-center">
            <button className="py-3 px-5 bg-customTeal text-white rounded-lg">
              Fast Food
            </button>
          </div>
        </div>
        <div className="card rounded-md">
          <img src={image3} alt="" />
          <div className="centerButton rounded-xl flex justify-center items-center">
            <button className="py-3 px-5 bg-customTeal text-white rounded-lg">
              Desert
            </button>
          </div>
        </div>
        <div className="card rounded-md">
          <img src={image4} alt="" />
          <div className="centerButton rounded-xl flex justify-center items-center">
            <button className="py-3 px-5 bg-customTeal text-white rounded-lg">
              Desert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
