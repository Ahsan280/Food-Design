import React from "react";
import "./homeheader.css";

import Menu from "../../Menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="homeheader h-screen flex flex-col md:flex-row mt-32 md:mt-0 mb-32 md:mb-0">
      {/* Column 1 */}
      <div className="header-column flex-1 relative flex items-center justify-center">
        <div className="background-image absolute inset-0"></div>
        <div className="dark-overlay absolute inset-0"></div>
        <div className="content relative z-10 text-start text-white p-10">
          <p className=" text-3xl mb-2 dancing-script">It's Quick & amusing!</p>
          <h1 className="text-4xl md:text-5xl montserrat mb-4 leading-tight">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-lg mb-6 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <div className="text-center">
            <Link
              to="/menu"
              className="px-10 mt-10 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
            >
              See Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="header-column flex-1 relative flex  justify-end">
        {" "}
        {/* Changed justify-center to justify-end */}
        <div className="background-image-2 absolute inset-0"></div>
        <div className="dark-overlay-2 absolute inset-0"></div>
        <div className="content relative z-10 text-white p-5">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
