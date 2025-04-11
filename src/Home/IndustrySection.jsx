import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { IndustryData } from './IndustryData'
import { useNavigate } from 'react-router-dom'
import TitleHead from '../TitleHead';

function IndustrySection() {

    const navigate = useNavigate();

    const handleClick = (Id) => {
        navigate(`/industry/${Id}`)
    }

    return (
        <>
            <div className="pt-5 pb-2">
                <Container className="industries-section text-center">
               
                    <TitleHead ftitle={"Industries"} stitle={"We Serve"}/>
                    <p className='pera' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus fuga quod sequi! Doloribus corporis facilis commodi voluptatem error iste?</p>
                    <Row className="justify-content-center mb-4">
                        {IndustryData.map((industry, index) => (
                            <div key={index} className='col-lg-2 col-md-3 col-sm-4 col-6 m-sm-2 mt-3 mb-4' onClick={() => handleClick(industry.Id)} style={{ cursor: 'pointer' }}>
                                <div className="industry-box h-100 shadow-lg py-5"  data-aos="fade-up"
                            data-aos-delay={`${index * 250}`} data-aos-duration="2000" data-aos-once="true" >
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