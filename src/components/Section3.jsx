import React from 'react'
import thekongs from '../assets/images/thekongs.png'
import { Container } from 'react-bootstrap'
import kong1 from '../assets/images/kong1.png'
import kong2 from '../assets/images/kong2.png'
import kong3 from '../assets/images/kong3.png'
import kong4 from '../assets/images/kong4.png'
import kong5 from '../assets/images/kong5.png'
import kong6 from '../assets/images/kong6.png'
import kong7 from '../assets/images/kong7.png'
import kong8 from '../assets/images/kong8.png'
import kong9 from '../assets/images/kong9.png'
import kong10 from '../assets/images/kong10.png'
import Slider from 'react-slick'

const Section3 = () => {
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                }
            },
             {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <section className='light-black pt-5 mt-5 position-relative overflow-hidden pb-370 z-1 d-none d-lg-block'>
                <div className='d-flex align-items-center justify-content-center flex-column pt-5' >
                    <h3 className='fs-xl fw-normal lh-108 color-white ff-SansUber'>THE KONGS</h3>
                    <img src={thekongs} alt="thekongs" className='pt-3 d-none d-lg-block' />
                </div>
                <div className='d-none d-lg-block'>
                    <img src={kong1} alt="kong1" className='kong1' />
                    <img src={kong2} alt="kong2" className='kong2' />
                    <img src={kong3} alt="kong3" className='kong3' />
                    <img src={kong4} alt="kong4" className='kong4' />
                    <img src={kong5} alt="kong5" className='kong5' />
                    <img src={kong6} alt="kong6" className='kong6' />
                    <img src={kong7} alt="kong7" className='kong7' />
                    <img src={kong8} alt="kong8" className='kong8' />
                    <img src={kong9} alt="kong9" className='kong9' />
                    <img src={kong10} alt="kong10" className='kong10' />
                    <div className='yellow-ellipse'></div>
                </div>
            </section >
            <div className='d-block d-lg-none py-5'>
                <h3 className='fs-xl fw-normal lh-108 color-white ff-SansUber text-center'>THE KONGS</h3>
                <Slider {...settings} className='pt-5'>
                    <div className='mx-3 '>
                        <img className='kong' src={kong8} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={kong7} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={kong8} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={kong2} alt="kong" />
                    </div>
                    <div className='mx-3'>
                        <img className='kong' src={kong3} alt="kong" />
                    </div>
                </Slider>
                <div className='d-flex align-items-center justify-content-center position-relative py-4'>
                    <img src={thekongs} alt="thekongs" className='w-100' />
                    <div className='yellow-ellipse d-none d-sm-block'></div>
                </div>
                <div className='d-block d-lg-none'>
                    <Slider {...settings} className='pt-5'>
                        <div className='mx-3'>
                            <img className='kong' src={kong4} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={kong2} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={kong3} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={kong4} alt="kong" />
                        </div>
                        <div className='mx-3'>
                            <img className='kong' src={kong7} alt="kong" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Section3
