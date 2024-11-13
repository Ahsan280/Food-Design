import React from "react";
import image1 from "../../../assets/images/close-up-delicious-chicken-meal.jpg";

const CartItem = ({ imageUrl, name, price, quantity, total }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center py-6  border-gray-500 border-b montserrat">
      {/* Product Image and Name */}
      <div className="flex items-center sm:w-1/3 w-full mb-4 sm:mb-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="ml-4">
          <p>{name}</p>
          <div className="flex">
            <span className="text-red-500">&#9733;</span>
            <span className="text-red-500">&#9733;</span>
            <span className="text-red-500">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="sm:w-1/6 w-full text-center sm:text-left mb-4 sm:mb-0">
        <span className="sm:hidden font-semibold">Price:</span> ${price}
      </div>
      {/* Quantity */}
      <div className="sm:w-1/4 w-full flex items-center justify-center mb-4 sm:mb-0">
        <span className="sm:hidden font-semibold mr-2">Quantity:</span>
        <div className="border border-gray-700 rounded-full flex justify-center">
          <button className="px-2 ">-</button>
          <span className="px-4">{quantity}</span>
          <button className="px-2 ">+</button>
        </div>
      </div>
      {/* Total */}
      <div className="sm:w-1/6 w-full text-center sm:text-left mb-4 sm:mb-0">
        <span className="sm:hidden font-semibold">Total:</span> ${total}
      </div>
      {/* Remove Button */}
      <div className="sm:w-1/12 w-full text-center text-gray-500 cursor-pointer">
        <span className="sm:hidden font-semibold mr-2">Remove:</span>&#10005;
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      imageUrl: image1,
      name: "Product name",
      price: 35.0,
      quantity: 1,
      total: 35.0,
    },
    {
      id: 2,
      imageUrl: image1,
      name: "Product name",
      price: 25.0,
      quantity: 1,
      total: 25.0,
    },
    {
      id: 3,
      imageUrl: image1,
      name: "Product name",
      price: 15.0,
      quantity: 1,
      total: 15.0,
    },
  ];

  return (
    <div className="p-4 mt-10 mb-10 md:mx-12 w-[85%]">
      {/* Table Headings (visible on medium and larger screens) */}
      <div className="hidden sm:flex justify-between font-semibold text-lg border-b pb-2 mb-4 federo-regular">
        <div className="w-1/3 md:text-4xl text-gray-900">Product</div>
        <div className="w-1/6 text-center md:text-4xl text-gray-900">Price</div>
        <div className="w-1/4 text-center md:text-4xl text-gray-900">
          Quantity
        </div>
        <div className="w-1/6 text-center md:text-4xl text-gray-900">Total</div>
        <div className="w-1/12 text-center md:text-4xl text-gray-900">
          Remove
        </div>
      </div>
      {/* Cart Items */}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          total={item.total}
        />
      ))}
    </div>
  );
};

export default Cart;
