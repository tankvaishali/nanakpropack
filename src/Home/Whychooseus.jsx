import React from 'react'
import { FaKitchenSet } from 'react-icons/fa6';
import { MdOutlineKitchen, MdOutlineSoupKitchen } from 'react-icons/md';
import { RiHotelLine, RiRestaurantLine } from 'react-icons/ri';
// import TittlesAll from './TittlesAll';
function Whychooseus() {

    const services = [
        {
            icon: <RiHotelLine />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-right"
        },
        {
            icon: <RiRestaurantLine />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-left",
            delay: "400"
        },
        {
            icon: <MdOutlineSoupKitchen />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-right",
            delay: "400"
        },
        {
            icon: <FaKitchenSet />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "flip-up",
            delay: "600"
        },
        {
            icon: <MdOutlineKitchen />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-left",
            delay: "800"
        },
        {
            icon: <MdOutlineSoupKitchen />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-right",
            delay: "400"
        },
        {
            icon: <FaKitchenSet />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "flip-up",
            delay: "600"
        },
        {
            icon: <MdOutlineKitchen />,

            title: "Lorem ipsum dolor si",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-left",
            delay: "800"
        },
    ];

    return (
        <>

            <div className="service-area bg_chooseus overflow-hidden">
                <div>
                    <div className="service-area pb-5 overflow-hidden">

                        <div className='servicepro_bgimage pt-5 pb-3'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <h1 className='fw-bold text-white'>Why Choose Us</h1>

                                        <p className="about-text pera text-secondary pt-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in molestias voluptates ipsum sint iste aliquid, possimus perspiciatis earum blanditiis.
                                        </p>
                                        <p className="about-text pera text-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in molestias voluptates ipsum sint iste aliquid, possimus perspiciatis earum blanditiis.
                                        </p>
                                    </div>
                                    {services.map((service) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos={service.animation} data-aos-duration="1500" data-aos-delay={service.delay} data-aos-once="true">
                                            <div className="single-service-box mb-4 overflow-hidden">
                                                <div className="service-icon-thumb text-white fs-1 py-2">
                                                    {service.icon}
                                                </div>
                                                <div className="service-title">
                                                    <h2 className="jr_tittle text-white text-capitalize fs-4 py-1">{service.title}</h2>
                                                    <p className="pera" style={{ color: "rgba(211, 211, 211, 0.546)" }}>{service.description}</p>
                                                </div>
                                                <div className="service-button" style={{ color: "rgba(211, 211, 211, 0.546)" }}>
                                                    <div className="pera d-inline">{service.content}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Whychooseus