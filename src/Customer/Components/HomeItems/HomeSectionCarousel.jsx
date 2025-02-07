import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Cards from './ItemCards'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const CardCarousel = ()=> {
    const items = [1,1,1,1].map((item) => { return <Cards />})
    
    return(
        <div>
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
    );
}

export default CardCarousel;