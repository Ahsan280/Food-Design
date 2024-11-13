import React from "react";
import Header from "../../components/HomeComponents/Header/Header";
import AboutUs from "../../components/HomeComponents/AboutUs/AboutUs";
import FoodCategory from "../../components/HomeComponents/FoodCategory/FoodCategory";
import BookEarly from "../../components/HomeComponents/BookEarly/BookEarly";
import Chef from "../../components/HomeComponents/Chef/Chef";
import Rectangle from "../../components/HomeComponents/Rectangle/Rectangle";
import Service from "../../components/HomeComponents/Service/Service";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <FoodCategory />
      <BookEarly />
      <Chef />
      <Rectangle />
      <Service />
    </>
  );
};

export default Home;
