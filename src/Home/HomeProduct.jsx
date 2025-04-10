import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import Slider from 'react-slick';
import TitleHead from '../TitleHead';

function HomeProduct() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const products = [
        {
            name: 'Packaging',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s',
        },
        {
            name: 'Packaging',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s',
        },
        {
            name: 'Packaging',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s',
        },
        {
            name: 'Packaging',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s',
        },
    ]
    return (
        <>
            <div className='container my-5 pb-5'>
            <div className='text-center'>
            <TitleHead ftitle={"Our Featured"} stitle={"Products"}/>
            <p className='pera' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus doloribus odio corporis voluptas. Odit voluptates dignissimos obcaecati laboriosam voluptatibus.</p>
            </div>
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <div key={index} className='p-2'>
                            <div className='bg-white'>
                                <div className='product_box h-100 p-4 position-relative overflow-hidden'>
                                    <div className='product_img_wrapper d-flex flex-column justify-content-center align-items-center text-center'>
                                        <div className='product_img' style={{ width: '120px', height: '120px' }}>
                                            <img
                                                src={product.img}
                                                className='img-fluid rounded-circle shadow'
                                                alt={product.name}
                                            />
                                        </div>
                                        <h5 className='fw-semibold mt-3 text-center'>{product.name}</h5>
                                    </div>
                                    <div className='product_content text-center mt-2'>
                                        <button
                                            type='button'
                                            className='Aboutbtn border-0 fw-bold text-white rounded-5 px-3 pb-3 pt-2'
                                        >
                                            <TiArrowRight
                                                className='bg-white rounded-5 fs-6'
                                                style={{ color: 'rgb(17, 107, 107)' }}
                                            />{' '}
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}                     
export default HomeProduct