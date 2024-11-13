import React from "react";
import ProductHeader from "../../components/ProductDetailsComponents/ProductHeader/ProductHeader";
import Details from "../../components/ProductDetailsComponents/Details/Details";
import DescriptionReview from "../../components/ProductDetailsComponents/DescriptionReview/DescriptionReview";
import ProductSlider from "../../components/ProductDetailsComponents/ProductSlider/ProductSlider";
import Service from "../../components/HomeComponents/Service/Service";
const ProductDetails = () => {
  return (
    <>
      <ProductHeader />
      <Details />
      <DescriptionReview />
      <ProductSlider />
      <Service />
    </>
  );
};

export default ProductDetails;
