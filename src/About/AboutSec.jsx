import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import { HiOutlineHandThumbUp } from 'react-icons/hi2'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { BiLeaf } from 'react-icons/bi'

const features = [
    {
        icon: <HiOutlineHandThumbUp className='text-white fs-1' />,
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: <MdOutlineSupportAgent className='text-white fs-1' />,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: <BiLeaf className='text-white fs-1' />,
        title: 'Eco Friendly',
        description: 'Lorem ipsum dolor sit amet.'
    },
];

function AboutSec() {
    return (
        <>
            <div className='py-5'>
                <div className="container">
                    <div className='row d-flex justify-content-center align-items-center align-content-center'>
                        <div className='col-12 col-lg-4 col-md-12'>
                            <div className='py-5'>
                                <h1 className='fw-bold'>About Us</h1>
                                <div className='pb-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consequatur ducimus, vero adipisci, ipsa porro tenetur illo aut expedita laudantium accusamus quibusdam deserunt facere eos fugiat. Ex nisi deleniti minus!</div>
                                <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 px-3 pb-3 pt-2'><TiArrowRight className='bg-white rounded-5 fs-6' style={{ color: "rgb(17, 107, 107)" }} /> Learn More</button>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-6'>
                            <div className='py-5 bglightborder'>
                                <img src={require("../assets/images/BakeryPackagingMockup006-removebg-preview.png")} className='object-fit-cover w-100 h-100 rounded-5' alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-6'>
                            <div className='py-4'>
                                {features.map((feature, index) => (
                                    <div className={`tittlebox d-flex p-3 rounded-pill shadow ${index !== 0 ? 'my-3' : ''}`} key={index}>
                                        <div className='p-3 tittleicon rounded-5 text-dark '>
                                            {feature.icon}
                                        </div>
                                        <div className='text-success ms-3'>
                                            <h3 className='fw-bold'>{feature.title}</h3>
                                            <div>{feature.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSec