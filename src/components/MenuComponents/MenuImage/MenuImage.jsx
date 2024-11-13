import React from "react";
import "./menuimage.css";
import chefIcon from "../../../assets/images/icons/chef.png";
import fastFoodIcon from "../../../assets/images/icons/fast-food.png";
import utensilsIcon from "../../../assets/images/icons/kitchen-utensils.png";
import pizzaIcon from "../../../assets/images/icons/pizza.png";
const MenuImage = () => {
  return (
    <div className="menu-image-container py-5 md:py-0 md:h-[70vh] my-40">
      <div className="overlay"></div>
      <div
        className="flex flex-col gap-10 md:flex-row md:gap-20 justify-center items-center h-full w-full relative"
        style={{ zIndex: "5" }}
      >
        <div className="flex flex-col gap-3 icons text-white justify-center items-center montserrat">
          <img
            src={chefIcon}
            className="w-24 h-24"
            style={{ color: "white" }}
            alt=""
          />
          <p className="text-center text-2xl">420</p>
          <p className="text-center text-2xl">Professional Chefs</p>
        </div>
        <div className="flex flex-col gap-3 icons text-white justify-center items-center montserrat">
          <img
            src={fastFoodIcon}
            className="w-24 h-24"
            style={{ color: "white" }}
            alt=""
          />
          <p className="text-center text-2xl">320</p>
          <p className="text-center text-2xl">Items Of Food</p>
        </div>
        <div className="flex flex-col gap-3 icons text-white justify-center items-center montserrat">
          <img
            src={utensilsIcon}
            className="w-24 h-24"
            style={{ color: "white" }}
            alt=""
          />
          <p className="text-center text-2xl">30+</p>
          <p className="text-center text-2xl">Years Of Experienced</p>
        </div>
        <div className="flex flex-col gap-3 icons text-white justify-center items-center montserrat">
          <img
            src={pizzaIcon}
            className="w-24 h-24"
            style={{ color: "white" }}
            alt=""
          />
          <p className="text-center text-2xl">220</p>
          <p className="text-center text-2xl">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default MenuImage;
