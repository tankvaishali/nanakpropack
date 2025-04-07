import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FaqPage = () => {

    const faqData = [
        {
            question: 'I do not know what print design to choose for my brand. can you help?',
            answer: 'Yes, we have a creative and professional team of experts in designing who can help you develop a box that is unique and customized only for you.',
        },
        {
            question: 'Can I have my logo printed on the box?',
            answer: 'Yes, you can have your company logo or branding on the box.',
        },
        {
            question: 'Do you have a minimum order size?',
            answer: 'Yes, we do have a minimum order size for delivery. Please get in touch with us for more information.',
        },
        {
            question: 'How and whom to contact for order?',
            answer: 'For this, you can give a link with our full contact details.',
        },
    ];

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        I do not know what print design to choose for my brand. Can you help?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes, we do have a creative and professional team of experts in designing who can help you develop a box that is unique and customized only for you.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I have my logo printed on the box?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes, you can have your company logo or branding on the box.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Do you have a minimum order size?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes, we do have a minimum order size for delivery. Please get in touch with us for more information.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How and whom to contact for order?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        For this, you can give a link with our full contact details.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;