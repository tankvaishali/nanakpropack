import React, { useState } from 'react'
import { TiArrowRight } from 'react-icons/ti'
import emailjs from '@emailjs/browser';

function HomeContact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send("service_zepm12o", "template_7ul0y5d", formData, "riFOd-JVCm2W9dXYR")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your design request has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (err) => {
                console.error('FAILED...', err);
                alert('There was an error sending your request. Please try again later.');
            });
    };

    return (
        <>
            <div className='Home_contact_bg py-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h1 className='fw-bold text-center text-white'>Let's Conversation With Us!</h1>
                        <form action="" onSubmit={handleSubmit} className='d-flex justify-content-center'>
                            <div className='col-12 col-lg-8 p-3'>
                                <div className='w-100 d-flex justify-content-center gap-3'>
                                    <div className='w-50'>
                                        <label htmlFor="" className='d-block text-white'>Name</label>
                                        <input type="text" name="name" id="" required className='input-home w-100 mt-2 p-2 border-0' style={{ outline: "none", background: "#f5f5f594" }} />
                                    </div>
                                    <div className='w-50'>
                                        <label htmlFor="" className='d-block text-white'>E-mail</label>
                                        <input type="text" name="email" id="" required className='input-home w-100 mt-2 p-2 border-0' style={{ outline: "none", background: "#f5f5f594" }} />
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <label htmlFor="" className='text-white mt-3'>Message</label>
                                    <textarea name="message" id="" required placeholder='Write Your Message Here...' rows={8} className='input-home w-100 mt-2 p-2 border-0' style={{ outline: "none", background: "#f5f5f594" }}></textarea>
                                </div>

                                <div className='text-center mt-4'>
                                    <button type='submit' className='Aboutbtn border-0 fw-bold text-white rounded-5 px-4 pb-3 pt-3'>
                                        <TiArrowRight className='bg-white rounded-5 fs-6' style={{ color: "rgb(17, 107, 107)" }} /> Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContact