import React from "react";

import { LiaConciergeBellSolid } from "react-icons/lia";

import { LuUtensils } from "react-icons/lu";

import { IoCalendarClearOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className="bg-blue-200 mt-20 mb-36 py-10 ">
      <h1 className="text-center text-5xl federo-regular mb-20">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-center items-center px-20">
          <LiaConciergeBellSolid className="text-7xl text-gray-600 mb-5" />

          <h1 className="text-center text-3xl federo-regular mb-4">
            Concierge Service
          </h1>
          <p className="text-center montserrat">
            Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio
            euismod sed amet libero. Scelerisque sed enim.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-20 ">
          <LuUtensils className="text-7xl text-gray-600 mb-5" />

          <h1 className="text-center text-3xl federo-regular mb-4">Dining</h1>
          <p className="text-center montserrat">
            Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio
            euismod sed amet libero. Scelerisque sed enim.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-20">
          <IoCalendarClearOutline className="text-7xl text-gray-600 mb-5" />

          <h1 className="text-center text-3xl federo-regular mb-4">
            Resturant
          </h1>
          <p className="text-center montserrat">
            Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio
            euismod sed amet libero. Scelerisque sed enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
