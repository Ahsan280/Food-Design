import React from "react";
import "./billing.css";
import image1 from "../../../assets/images/close-up-delicious-chicken-meal.jpg";
const BillingForm = () => {
  const items = [
    { id: 1, name: "Product Name", qty: "qty", price: "50", image: image1 },
    {
      id: 2,
      name: "Product Name",
      qty: "150 gm net",
      price: "50",
      image: image1,
    },
    { id: 3, name: "Product Name", qty: "qty", price: "50", image: image1 },
  ];
  return (
    <div className="mx-auto container py-5 px-5 md:px-0 my-32">
      <div className="grid gird-cols-1 md:grid-cols-6">
        <div className="md:col-span-4 pt-5 mb-10 md:mb-0">
          <form className="montserrat flex flex-col gap-5 text-gray-900">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="outline outline-1 outline-gray-400 w-full h-14 px-4"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="outline outline-1 outline-gray-400 w-full h-14 px-4"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="outline outline-1 outline-gray-400 w-full h-14 px-4"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  className="outline outline-1 outline-gray-400 w-full h-14 px-4"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="outline outline-1 outline-gray-400 w-full h-14 px-4"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="area">Area</label>
                <select
                  id="area"
                  type="text"
                  name="area"
                  className="outline custom-select outline-1 outline-gray-400 w-full h-14 px-4"
                >
                  <option value="">Choose Area</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Multan">Multan</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="md:col-span-2 border p-5 md:ml-5 border-gray-400 flex flex-col gap-5">
          {items.map((item) => {
            return (
              <div className="flex gap-3 border-b border-gray-400 pb-5">
                <img
                  src={item.image}
                  className="h-24 w-24 object-cover"
                  alt=""
                />
                <div className="flex flex-col montserrat gap-2">
                  <p>{item.name}</p>
                  <p className="text-gray-700" style={{ fontSize: "0.9rem" }}>
                    {item.qty}
                  </p>
                  <p className="text-gray-700" style={{ fontSize: "0.9rem" }}>
                    {item.price}$
                  </p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between text-gray-700 montserrat mt-5">
            <p style={{ fontSize: "0.9rem" }}>Sub-total</p>
            <p style={{ fontSize: "0.9rem" }}>130$</p>
          </div>
          <div className="flex justify-between text-gray-700 montserrat">
            <p style={{ fontSize: "0.9rem" }}>Shipping</p>
            <p style={{ fontSize: "0.9rem" }}>Free</p>
          </div>
          <div className="flex justify-between text-gray-700 montserrat">
            <p style={{ fontSize: "0.9rem" }}>Discount</p>
            <p style={{ fontSize: "0.9rem" }}>25%</p>
          </div>
          <div className="flex justify-between text-gray-700 montserrat border-b border-gray-400 pb-5">
            <p style={{ fontSize: "0.9rem" }}>Tax</p>
            <p style={{ fontSize: "0.9rem" }}>54.76$</p>
          </div>
          <div className="flex justify-between text-gray-700 montserrat">
            <p style={{ fontSize: "1.2rem" }}>Total</p>
            <p
              className="font-semibold text-gray-900"
              style={{ fontSize: "1.2rem" }}
            >
              432.65$
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-customTeal text-white rounded-xl py-4 px-6 w-1/2">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
