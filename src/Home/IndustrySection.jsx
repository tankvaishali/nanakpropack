import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { IndustryData } from './IndustryData'

function IndustrySection() {
    return (
        <>
            <div className="">
                <Container className="industries-section text-center">
                    <h1 className="fw-bold mb-3">Industries We Serve</h1>
                    <Row className="justify-content-center">
                        {IndustryData.map((industry, index) => (
                            <div key={index} className='col-lg-2 col-md-3 col-sm-4 col-6 m-sm-2 mt-3 mb-4'>
                                <div className="industry-box h-100 shadow-lg">
                                    <div className="industry-icon">{industry.icon}</div>
                                    <h3 className="industry-name">{industry.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default IndustrySection