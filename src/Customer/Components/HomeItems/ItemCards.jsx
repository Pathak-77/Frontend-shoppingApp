import React from 'react'

const Cards = ()=> {
    
    return(
            <section className='h-[250px] w-[200px] mt-1 p-1 border-4 border-indigo-500 rounded-xl flex-wrap relative'>
                 <div className='mb-2 h-[120px] overflow-hidden'>
                    <img src='https://media.gucci.com/content/PromoComponent_Standard_632x395/1737653435/PromoComponent_Gucci-VDAY-Jan25-GUCCI-VDAY-MARSHALL-08-035_001_Default.jpg'
                    alt='' />
                 </div>

                 <div className='flex flex-col justify-between flex-grow'>
                    <h3 className='text-md text-black' about='item'>Item info</h3>
                    <p className='text-black' about='item-detail'>it's a shoe</p>
                 </div>
            </section>
);
}
export default Cards;