import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Works.css';
import carouselPic1 from '../../../images/checking-voltage-mobile-device_1098-13817.jpg';
import carouselPic2 from '../../../images/modern-man-working-electronics-service-shop_1098-15487.jpg';
import carouselPic3 from '../../../images/master-uses-driver-unscrew-screws-smartphone-electronic-plates-fix-it-closeup_346278-1198.jpg';
import carouselPic4 from '../../../images/technician-repairing-inside-mobile-phone_39768-2092.jpg';


const items = [
    {id: 1, img: carouselPic1 },
    {id: 2, img: carouselPic2 },
    {id: 3, img: carouselPic3 },
    {id: 4, img: carouselPic4 }
  ]


const Works = () => {
    const workStyle ={
        background : '#414663',
        padding: '100px',
    }
    const breakPoints = [
        {width : 480 , itemsToShow : 1},
        {width : 768 , itemsToShow : 2},
        {width : 991 , itemsToShow : 2},
        {width : 1200 , itemsToShow : 2},
    ]
    const imgStyles = {
        height : '334.7px',
        borderRadius : '10px',
        margin :'15px'
    }

    return (
        <div style={workStyle}>
            <h1 className='text-center mb-4' style={{color:'#ffffff'}}>Here Some Servicing Moments </h1>

            <Carousel breakPoints= {breakPoints} >
                {items.map(item => <div>
              <img style={imgStyles} src={item.img} alt=""/>
       </div>)}
            </Carousel>

        </div>
    );
};

export default Works;