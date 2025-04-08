import React from 'react'
import { IndustryData } from './IndustryData'

function IndustryInner() {
    return (
        <>
            <div className="container-lg industry-section">
                <div className='p-3 p-lg-5 p-md-5'>
                    {IndustryData.map((industry) => (
                        <div key={industry.Id} className='row mb-5 justify-content-center align-items-center align-content-center'>
                            <div className='col-lg-7 col-md-6 col-12'>
                                <div className='h-100 px-1 px-lg-5 px-md-5'>
                                    <div className="d-inline">
                                        <img src={industry.img} alt="not found" className='float-end industry-image' style={{ maxWidth: "90%" }} />
                                        <img src={industry.img} alt="not found" className='industry-image2 ' style={{ maxWidth: "90%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-12'>
                                <div className='h-100'>
                                    <div className='text-success'>{industry.icon}</div>
                                    <h2 className='fw-bold my-3'>{industry.title}</h2>
                                    <h4 className='fw-bold'>{industry.subtitle}</h4>
                                    <div className='fw-medium text-secondary my-3'>{industry.para}</div>
                                    <div className=''>{industry.content}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default IndustryInner