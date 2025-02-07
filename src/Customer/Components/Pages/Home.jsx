import React from 'react'
import Carousel from '../MainCarousel/Carousel';
import CardCarousel from '../HomeItems/HomeSectionCarousel';
const Home = ()=> {
    return (<>
        {/* The carousel setting for the home page*/}
        <Carousel />
        <CardCarousel />
        </>
    );
}

export default Home;