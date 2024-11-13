import React from "react";
import "./rectangle.css";
import image1 from "../../../assets/images/pic.png";
import image2 from "../../../assets/images/pic2.png";
const Rectangle = () => {
  return (
    <div className="service container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="image1-container">
          <img src={image1} alt="" />
        </div>
        <div className="text-container p-10 flex flex-col gap-10 border-r-4 border-t-4 border-customTeal">
          <h1 className="federo-regular text-gray-900 text-5xl text-end">
            Our Restaurant
          </h1>
          <p className="montserrat text-end text-gray-900">
            Eleifend facilisis sed facilisis varius hendrerit accumsan tortor.
            Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend
            facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi
            est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
            facilisis varius hendrerit accumsan tortor. Donec nisi est mattis
            mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis
            varius hendrerit accumsan tortor. Donec nisi est mattis mauris morbi
            orci maecenas duis.
          </p>
        </div>

        <div className="text-container p-10 flex flex-col gap-10 border-l-4 border-b-4 border-customTeal">
          <h1 className="federo-regular text-gray-900 text-5xl text-start">
            Meet & Greet
          </h1>
          <p className="montserrat text-start text-gray-900 w-10/12">
            Lorem ipsum dolor sit amet consectetur. Sed amet nibh ante ultrices
            adipiscing euismod enim diam imperdiet. Tellus justo proin sed orci
            et turpis diam libero. Eleifend facilisis sed facilisis varius
            hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci
            maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
            accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas
            duis.
          </p>
        </div>
        <div className="image2-container">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
