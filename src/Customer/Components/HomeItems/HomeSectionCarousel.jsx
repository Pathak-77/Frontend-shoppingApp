import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Cards from "./ItemCards";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 5.5 },
};

const CardCarousel = () => {
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
    return <Cards />;
  });

  return (
    <div className="relative border m-3">
      <div className="relative border  p-5">
        {/* Left Arrow Icon Positioned on Top */}
        <ArrowLeftCircleIcon
          className="absolute top-1/2 left-2 transform -translate-y-1/2 -translate-x-5 z-10 cursor-pointer"
          height={40}
          fill="black"
          color="white"
        />

        <ArrowRightCircleIcon
          className="absolute top-1/2 right-2 transform -translate-y-1/2 -translate-x-[-5] z-10 cursor-pointer"
          height={40}
          fill="black"
          color="white"
        />

        {/* scannable item carousel*/}
        <h3 className="bold text-size-[22px]">Mens shoes</h3>
        <AliceCarousel
          mouseTracking
          
          items={items}
          paddingLeft={5}
          paddingRight={5}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default CardCarousel;
