import React from "react";
import Carousel from "../MainCarousel/Carousel";
import CardCarousel from "../HomeItems/HomeSectionCarousel";
import Footer from "../HomeItems/Footer"
const Home = () => {
  return (
    <>
      {/* The carousel setting for the home page*/}
      <Carousel />
      <div className="mt-1">
        <CardCarousel />
      </div>
      <div className="mt-5">
        <CardCarousel />
      </div>
      <div className="mt-5">
        <CardCarousel />
      </div>
      <div className="mt-5">
        <CardCarousel />
      </div>
      <div className="mt-5">
        <CardCarousel />
      </div>
      <Footer />
    </>
  );
};

export default Home;
