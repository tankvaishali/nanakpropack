import { CgArrowLongDown } from 'react-icons/cg';
import { FaWhatsapp } from "react-icons/fa";
import Slider from 'react-slick';

function HomeCarousel() {
    const img = require('./assets/images/HomeCarouselMainImg.jpg')
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="font-sans">

            <div className="">
                <div className="text-center py-5 text-white homebg d-flex align-items-center justify-content-center" style={{ minHeight: "60vh", height: "95vh" }}>
                    <div className='mt-5'>
                        <h1 className="display-1 fw-bold">
                            Nanak <span className="bg-white text-success px-2">ProPack</span>
                        </h1>
                        <p className="mt-3 text-uppercase small fs-6" style={{ letterSpacing: "3px" }}>Unbox Reliability With Every Package</p>
                        <div className="fs-3 fw-semibold down-arrow"><span className='rounded-circle'><CgArrowLongDown /></span></div>
                    </div>
                </div>
                <div className='h-100 py-5 my-5 container'>
                    <div className='' style={{ marginTop: "-200px" }}>
                        <Slider {...settings}>
                            <div className='col-lg-3 col-md-4 col-sm-7 col-7 p-4'>
                                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div style={{
                                        backdropFilter: "blur(5px)",
                                        padding: '10px 42px 5px 40px'
                                    }}>
                                        <img src={require('./assets/images/homeCarouselImg1  (1).png')} alt="not found" className='img-fluid' style={{ position: 'relative', top: "39px", zIndex: 100, border: '2px solid white', background: '#6c7079ab' }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-7 col-7 p-4'>
                                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div style={{
                                        backdropFilter: "blur(5px)",
                                        padding: '10px 42px 5px 40px'
                                    }}>
                                        <img src={require('./assets/images/homeCarouselImg1  (2).png')} alt="not found" className='img-fluid' style={{ position: 'relative', top: "39px", zIndex: 100, border: '2px solid white', background: '#6c7079ab' }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-7 col-7 p-4'>
                                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div style={{
                                        backdropFilter: "blur(5px)",
                                        padding: '10px 42px 5px 40px'
                                    }}>
                                        <img src={require('./assets/images/homeCarouselImg1  (3).png')} alt="not found" className='img-fluid' style={{ position: 'relative', top: "39px", zIndex: 100, border: '2px solid white', background: '#6c7079ab' }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-7 col-7 p-4'>
                                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div style={{
                                        backdropFilter: "blur(5px)",
                                        padding: '10px 42px 5px 40px'
                                    }}>
                                        <img src={require('./assets/images/homeCarouselImg1  (4).png')} alt="not found" className='img-fluid' style={{ position: 'relative', top: "39px", zIndex: 100, border: '2px solid white', background: '#6c7079ab' }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-7 col-7 p-4'>
                                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div style={{
                                        backdropFilter: "blur(5px)",
                                        padding: '10px 42px 5px 40px'
                                    }}>
                                        <img src={require('./assets/images/homeCarouselImg1  (5).png')} alt="not found" className='img-fluid' style={{ position: 'relative', top: "39px", zIndex: 100, border: '2px solid white', background: '#6c7079ab' }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-7 col-7 p-4'>
                                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div style={{
                                        backdropFilter: "blur(5px)",
                                        padding: '10px 42px 5px 40px'
                                    }}>
                                        <img src={require('./assets/images/homeCarouselImg1  (6).png')} alt="not found" className='img-fluid' style={{ position: 'relative', top: "39px", zIndex: 100, border: '2px solid white', background: '#6c7079ab' }} />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="position-fixed bottom-0 end-0 m-4 bg-success rounded-circle p-3 shadow text-decoration-none text-light"
                style={{ zIndex: 900000 }}
            >
                <FaWhatsapp className='fs-3' />
            </a>
        </div >
    );
}

export default HomeCarousel;