import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {carouselData } from '../MainCarousel/CarouselData'




const Carousel = () => {
    const items = carouselData.map((images) => {
       return  <img className='cursor-pointer' src={images.img} alt='' role='presentation' />
    })

    return (
        <AliceCarousel
       
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={5000}
        infinite
    />
    );
    
};

export default Carousel;