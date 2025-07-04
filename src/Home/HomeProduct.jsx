import { TiArrowRight } from 'react-icons/ti';
import Slider from 'react-slick';
import TitleHead from '../TitleHead';
import { Link } from 'react-router-dom';

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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
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
            name: '6 feet by 6 feet by 6 feet',
            img: require('../assets/images/homeproduct_image/ChatGPT Image Jun 21, 2025, 03_38_35 PM.png'),
        },
        {
            name: 'Corrugated Craft Paper Box',
            img: require('../assets/images/homeproduct_image/ChatGPT Image Jun 21, 2025, 03_47_26 PM.png'),
        },
        {
            name: 'Printed Corrugated Box',
            img: require('../assets/images/corrugated_pizza_printed_boxes-removebg-preview.png'),
        },
        {
            name: 'Corrugated Box',
            img: require('../assets/images/types of corrugated box packaging (1).png'),
        },
        {
            name: '14 feet by 18 feet by 18 feet',
            img: require('../assets/images/homeproduct_image/ChatGPT Image Jun 21, 2025, 03_44_49 PM.png'),
        },
        {
            name: 'Printed Corrugated Box',
            img: require('../assets/images/printed corrugated mailer box.png'),
        },
        {
            name: 'QR Code Printed Boxes',
            img: require('../assets/images/QR Code printed boxes.png'),
        },
        // {
        //     name: 'Printed Coloured Packing Boxes',
        //     img: require('../assets/images/Printed coloured packing boxes.png'),
        // },
        {
            name: 'Wooden Storage Divider Box',
            img: require('../assets/images/homeproduct_image/ChatGPT Image Jun 21, 2025, 03_59_52 PM.png'),
        },
    ]
    return (
        <>
            <div className='container my-5 pb-5'>
                <div className='text-center'>
                    <TitleHead ftitle={"Our Featured"} stitle={"Products"} />
                    <p className='pera' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Discover our best-selling, eco-friendly packaging solutions—crafted for quality and built to impress.</p>
                </div>
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <div className='p-2'>
                            <div className='bg-white h-100'>
                                <div className='product_box d-flex flex-column justify-content-between h-100 p-4 position-relative overflow-hidden'>
                                    <div className='product_img_wrapper text-center'>
                                        <div className='product_img mx-auto' style={{ width: '120px', height: '120px' }}>
                                            <img
                                                src={product.img}
                                                className='img-fluid rounded-circle shadow'
                                                alt={product.name}
                                            />
                                        </div>
                                        <h5 className='fw-semibold mt-3'>{product.name}</h5>
                                    </div>
                                    <div className='product_content mt-3 d-flex justify-content-center'>
                                        <Link to={"/product"} className='text-decoration-none'>
                                            <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 p-2 px-3 d-flex align-items-center justify-content-center'>
                                                <TiArrowRight className='bg-white rounded-5 fs-6 me-2' style={{ color: "rgb(17, 107, 107)" }} />
                                                View More
                                            </button>
                                        </Link>
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