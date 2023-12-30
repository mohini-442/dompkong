
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../assets/images/sliderimg1.png'
import sliderimg2 from '../assets/images/sliderimg2.png'
import sliderimg3 from '../assets/images/sliderimg3.png'
import sliderimg4 from '../assets/images/sliderimg4.png'
import sliderline from '../assets/images/sliderline.png'


const Slidersection = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        centreMode: true,
        speed: 2000,
        cssEase: 'Linear',
        slidesToShow: 4,
        pauseOnHover: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h2 className='ff-SansUber color-white fs-xl fw-normal'>Partners</h2>
                    </div>
                    <Slider {...settings} className='pt-5'>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg1} alt="sliderimg1" className='w-img'/>
                            <img src={sliderline} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg2} alt="sliderimg2" className='w-img' />
                            <img src={sliderline} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg3} alt="sliderimg3" className='w-img' />
                            <img src={sliderline} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg4} alt="sliderimg4" className='w-img' />
                            <img src={sliderline} alt="sliderline" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <img src={sliderimg2} alt="sliderimg5" className='w-img'/>
                            <img src={sliderline} alt="sliderline" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Slidersection