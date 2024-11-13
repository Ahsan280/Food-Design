import React from "react";
import Slider from "react-slick";
import image1 from "../../../assets/images/unsplash_dphM2U1xq0U.png";
import image2 from "../../../assets/images/close-up-delicious-chicken-meal.jpg";
import image3 from "../../../assets/images/slider1.JPG";

function ProductSlider() {
  const products = [
    {
      name: "Product 1",
      price: "$38.00",
      originalPrice: "$45.00",
      imageUrl: image1,
    },
    { name: "Product 2", price: "$28.00", imageUrl: image2 },
    { name: "Product 3", price: "$21.00", imageUrl: image3 },
    { name: "Product 4", price: "$38.00", imageUrl: image2 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // for tablets and larger devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // for small tablets and phones in landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto  py-5 my-10 w-[90%] px-5">
      <h2 className="text-2xl font-semibold mb-4 federo-regular">
        Similar Products
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="border overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg montserrat">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500 montserrat ">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom Arrow Components for Navigation
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className=" bg-teal-500 text-white rounded-full p-2 absolute left-full -top-10  z-10"
    >
      →
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className=" bg-teal-500 text-white rounded-full p-2 absolute left-[85%] md:left-[97%] -top-10  z-10"
    >
      ←
    </button>
  );
}

export default ProductSlider;
