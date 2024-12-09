import React from "react";
// import { Carousel } from "react-responsive-carousel";
import Category from "../../Components/Category/CategoryCard";
import LayOut from "../../Components/LayOut/LayOut";
import Carousel from "../../Components/Carousel/CarouselEffect";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
