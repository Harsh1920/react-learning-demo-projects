import React, { useEffect, useState } from 'react'
import './CustomCarousel.css'
import { imageURL } from './data.js'

const CustomCarousel = () => {

    const [imgIndex, setImageIndex] = useState(0);

    const prevHandler = () => {
        setImageIndex(!imgIndex ? imageURL.length - 1 : imgIndex - 1);
    }

    const nextHandler = () => {
        setImageIndex((imgIndex + 1) % imageURL.length);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            nextHandler();
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [imgIndex])


    return (
        <div>
            <div className='carousel'>
                <h2>Custom Carousel</h2>
                <div className='carousel__wrapper'>
                    <div>
                        <button onClick={prevHandler}>Previous</button>
                    </div>
                    {imageURL.map((img, index) => (
                        <img src={img} key={index} alt='Wallpaper' className={`slider-img ${imgIndex === index ? 'visible' : 'hide'}`} />
                    ))}
                    <div>
                        <button onClick={nextHandler}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomCarousel