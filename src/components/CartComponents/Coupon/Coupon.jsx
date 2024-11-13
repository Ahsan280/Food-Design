import React from "react";

const Coupon = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-10 px-5 md:px-0">
      <div className="flex flex-col gap-4 mb-10 md:mb-0">
        <h2 className="federo-regular text-2xl md:text-4xl md:ml-8 text-gray-900">
          Coupon Code
        </h2>

        <div className="mx-auto w-10/12 container">
          <div className="relative  rounded">
            <input
              type="search"
              id="location-search"
              className="block px-4 py-4 focus:outline-none w-full border-t border-l border-b border-gray-500 text-gray-900  rounded-md   "
              placeholder="Enter Code Here"
              required=""
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full px-4 py-4 z-10 bg-customTeal text-white rounded-md "
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="bill flex flex-col gap-4">
        <h2 className="federo-regular text-2xl md:text-4xl text-gray-900">
          Total Bill
        </h2>
        <div className="border-2 border-gray-700 p-5 flex flex-col gap-4">
          <div className="border-b border-gray-500 py-5 flex flex-col gap-4">
            <div className="flex justify-between text-gray-900 montserrat items-center">
              <p className="text-2xl ">Cart Subtotal</p>
              <p className="font-semibold">$120.00</p>
            </div>
            <div className="flex justify-between text-gray-900 montserrat items-center ">
              <p className="text-2xl">Shipping Charge</p>
              <p>$00.00</p>
            </div>
          </div>
          <div className="flex justify-between text-gray-900 montserrat items-center">
            <p className="text-2xl ">Total Amount</p>
            <p className="font-semibold">$205.00</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-white rounded-xl py-4 px-7 bg-customTeal">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
