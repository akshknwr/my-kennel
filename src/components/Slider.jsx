import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const imgPath = process.env.PUBLIC_URL + "/images/";

const Slider = () =>{
    return (
        <div>
            <Carousel width={"70%"} autoPlay={true} autoFocus={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={80}>
                <div>
                    <img src={imgPath+'soph1.jpeg'} />
                    <p className='legend'> Sophie </p>
                </div>
                <div>
                    <img src={imgPath+'soph2.jpeg'} />
                    <p className='legend'> Sophie </p>
                </div>
                <div>
                    <img src={imgPath+'soph3.jpeg'} />
                    <p className='legend'> Sophie </p>
                </div>
                <div>
                    <img src={imgPath+'soph4.jpeg'} />
                    <p className='legend'> Sophie </p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider