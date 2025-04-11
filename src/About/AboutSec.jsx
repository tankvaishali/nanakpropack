import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import { HiOutlineHandThumbUp } from 'react-icons/hi2'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { BiLeaf } from 'react-icons/bi'
import TitleHead from '../TitleHead'

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
    }
];
function AboutSec() {
    return (
        <>
            <div className='py-5 overflow-hidden'>
                <div className="container py-5">
                    <div className='row d-flex justify-content-center align-items-center align-content-center'>
                        <div className='col-12 col-lg-4 col-md-12' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                            <div className='py-5'>
                                <TitleHead ftitle={"About"} stitle={"Us"} />
                                <div className='pb-3 pera' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consequatur ducimus, vero adipisci, ipsa porro tenetur illo aut expedita laudantium accusamus quibusdam deserunt facere eos fugiat. Ex nisi deleniti minus!</div>
                                <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 p-2 px-3 d-flex align-items-center'><TiArrowRight className='bg-white rounded-5 fs-6 me-2' style={{ color: "rgb(17, 107, 107)" }} /> Learn More</button>  </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-6 ' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                            <div className='py-5 bglightborder'>
                                <img src={require("../assets/images/BakeryPackagingMockup006-removebg-preview.png")} className='object-fit-cover w-100 h-100 rounded-5' alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-6' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <div className='py-4'>
                                {features.map((feature, index) => (
                                    <div className={`tittlebox d-flex p-3 rounded-pill shadow ${index !== 0 ? 'my-3' : ''}`} key={index}>
                                        <div className='p-3 tittleicon rounded-5 text-dark d-flex align-items-center'>
                                            {feature.icon}
                                        </div>
                                        <div className='text-success ms-3'>
                                            <h4 className='fw-bold'>{feature.title}</h4>
                                            <div className='pera'>{feature.description}</div>
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