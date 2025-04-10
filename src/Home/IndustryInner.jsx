import React from 'react'
import { IndustryData } from './IndustryData'
import { useNavigate, useParams } from 'react-router-dom'
import { TiArrowLeft } from 'react-icons/ti';
import HOC from '../HOC';

function IndustryInner() {

    const { Id } = useParams();
    const navigate = useNavigate();

    const industry = IndustryData.find(item => item.Id === Id)

    if (!industry) {
        return <div className="text-center mt-5">Industry not found</div>
    }

    return (
        <>
            <div className="container-lg py-5 overflow-hidden">
                <div className='industry-section'>
                    <div className='p-3 p-lg-5 p-md-5'>
                        <div className='row justify-content-center align-items-center align-content-center'>
                            <div className='col-lg-7 col-md-6 col-12'  data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                                <div className='h-100 px-1 px-lg-5 px-md-5'>
                                    <div className="d-inline">
                                        <img src={industry.img} alt="not found" className='float-end industry-image' style={{ maxWidth: "90%" }} />
                                        <img src={industry.img} alt="not found" className='industry-image2 ' style={{ maxWidth: "90%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-12'>
                                <div className='h-100'  data-aos="fade-left" data-aos-duration="1500" data-aos-once="true"
                           >
                                    <div className='text-success'>{industry.icon}</div>
                                    <h2 className='fw-bold my-3 text-capitalize'>{industry.title}</h2>
                                    <h4 className='fw-bold text-capitalize'>{industry.subtitle}</h4>
                                    <div className='fw-medium text-secondary my-3 pera'>{industry.para}</div>
                                    <div className='pera'>{industry.content}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <button type='button' onClick={() => navigate(-1)} className='Aboutbtn border-0 fw-bold text-white rounded-5 px-3 pb-3 pt-2'><TiArrowLeft className='bg-white rounded-5 fs-6' style={{ color: "rgb(17, 107, 107)" }} /> Back</button>
                </div>
            </div>
        </>
    )
}

export default HOC(IndustryInner)