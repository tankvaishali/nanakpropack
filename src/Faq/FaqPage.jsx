import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../assets/css/Faq.css";
import HOC from '../HOC';

const FaqPage = () => {

    const faqData = [
        {
            question: 'I do not know what print design to choose for my brand. Can you help?',
            answer: 'Yes, we have a creative and professional team of experts in designing who can help you develop a box which is unique and customized only for you.',
        },
        {
            question: 'Can I order customized box size?',
            answer: 'Yes, we can make customized size.',
        },
        {
            question: 'Can I have my logo printed on the box?',
            answer: 'Yes, you can have your company logo or branding on the box.',
        },
        {
            question: 'Do you have minimum order size?',
            answer: 'Yes, we do have a minimum order size for delivery. Please get in touch with us for more information.',
        },
        {
            question: 'How and whom to contact for order?',
            answer: 'For this you can give a link with our full contact details',
            path: '/contact'
        },
    ];

    return (
        <>
            <div className='landing_color d-flex justify-content-center align-items-center text-dark'>
                <div className='fw-bold fs-5 container text-center'>
                    <Link to={"/"} className='text-decoration-none text-success'>Home</Link> / Frequently Asked Questions (FAQ)
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="h-100">
                            <img
                                src={require("../assets/images/corrugated-boxes.jpg")}
                                className='img-fluid w-100 h-100 bg-white'
                                alt="Corrugated Boxes"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-between align-items-strech">
                        <div className="h-100 ">
                            <h1 className='py-2 fw-bold'>Need-To-Know Information</h1>
                            <div className="accordion" id="accordionExample">
                                {faqData.map((item, index) => {
                                    const headingId = `heading${index}`;
                                    const collapseId = `collapse${index}`;
                                    const isFirst = index === 0;

                                    return (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={headingId}>
                                                <button
                                                    className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    aria-expanded={isFirst ? 'true' : 'false'}
                                                    aria-controls={collapseId}
                                                >
                                                    {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={collapseId}
                                                className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                                aria-labelledby={headingId}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{item.answer}</p>
                                                    {item.path && (
                                                        <Link to={item.path} className="btn btn-success  fw-bold">
                                                            Contact Us
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HOC(FaqPage);
