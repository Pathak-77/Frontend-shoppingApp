import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import Cards from "./ItemCards";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 5.5 },
};
const CardCarousel = () => {
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
    return <Cards key={item}/>;
  });

  const [index, setindex] = useState(0);

  const activeIndex = ({item}) => setindex(item); 
  
  const goLeft = () => setindex(index -1);

  const goRight = () => setindex(index + 1);


  return (
    <div className="relative border m-3">
      <div className="relative border p-5">

        {/* Left Arrow Icon Positioned on Top */}

        <ArrowLeftCircleIcon
          className= {`absolute top-1/2 left-2 transform -translate-y-1/2 -translate-x-5 z-10 cursor-pointe ${(index === 0)? 'hidden' : ''}`}
          height={40}
          fill="black"
          color="white"
          onClick={goLeft}
        />

        <ArrowRightCircleIcon
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 -translate-x-[-5] z-10 cursor-pointer ${(index === items.length -1)? 'hidden' : ''}`}
          height={40}
          fill="black"
          color="white"
          onClick={goRight}
        />

        {/* Scannable item carousel */}
        <h3 className="bold text-size-[22px]">Mens shoes</h3>

        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          responsive={responsive}
          onSlideChanged={activeIndex}
          activeIndex={index}
        />
      </div>
    </div>
  );
};

export default CardCarousel;
