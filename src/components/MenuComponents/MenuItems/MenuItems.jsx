import React, { useState } from "react";
import image1 from "../../../assets/images/close-up-delicious-taco-plate.jpg";
import image2 from "../../../assets/images/close-up-delicious-chicken-meal.jpg";
import image3 from "../../../assets/images/unsplash_q54Oxq44MZs.png";
import image4 from "../../../assets/images/drinks.jpg";

const MenuItems = () => {
  const [selectedCategory, setSelectedCategory] = useState("starter");

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: image1,
      price: 100,
      category: "starter",
    },

    {
      id: 2,
      name: "Product 2",
      image: image2,
      price: 200,
      category: "main course",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: image3,
      category: "desserts",
    },
    { id: 4, name: "Product 4", price: 300, image: image4, category: "drinks" },
    {
      id: 5,
      name: "Product 5",
      image: image1,
      price: 20,
      category: "starter",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="flex flex-col py-10 gap-20">
      <div className="federo-regular  w-full overflow-auto md:text-3xl conatiner justify-center flex gap-5 md:gap-10">
        {["starter", "main course", "desserts", "drinks"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "border-b-2 border-gray-500 text-gray-700"
                : "text-gray-500"
            }    hover:text-black`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-col  ">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col  md:flex-row container mx-auto w-10/12 montserrat 
              ${
                index != filteredProducts.length - 1 ? "border-b" : ""
              } border-gray-400 py-10`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-36 object-cover rounded-md mr-4 mb-6 md:mb-0"
            />
            <div className="flex flex-col w-full gap-5">
              <div className="flex items-start justify-between text-2xl">
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
              <div className="flex flex-col md:flex-row text-gray-700 gap-5">
                <p>Ingredient 1,</p>
                <p>Ingredient 2,</p>
                <p>Ingredient 3,</p>
                <p>Ingredient 4,</p>
                <p>Ingredient 5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
