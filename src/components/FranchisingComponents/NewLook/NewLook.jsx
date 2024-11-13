import React from "react";
import "./newLook.css";
const NewLook = ({ text }) => {
  return (
    <div className="newLook mt-20 mb-10">
      <h1 className="federo-regular mb-10 text-center text-5xl">{text}</h1>
      <div className="image container mx-auto"></div>
    </div>
  );
};

export default NewLook;
