import React from 'react'
import TitleHead from '../TitleHead'
import { FaRegClock } from 'react-icons/fa6'
import { TiArrowRight } from 'react-icons/ti'
import { LiaMailBulkSolid } from 'react-icons/lia'
import { TbPhoneCall } from 'react-icons/tb'
import { SlLocationPin } from 'react-icons/sl'

function ContactInfo() {
    return (
        <>
            <div className='container'>
                <div className="row py-5 justify-content-center align-items-center align-content-center">
                    <div className="col-12 col-lg-6 p-3">
                        <div className='h-100'>
                            <TitleHead ftitle={"Contact"} stitle={"Us"} />
                            <p className='fw-medium pera text-secondary pera' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint ea illo atque eum natus omnis quis maxime alias sed.</p>
                            <div className='d-lg-flex d-md-flex w-100 justify-content-center mt-4'>
                                <div className='main_contactBox d-flex w-100 w-lg-50 w-md-50'>
                                    <div className='main_contact'>
                                        <div className="Contact_icon-wrapper text-center align-content-center">
                                            <LiaMailBulkSolid className="p-1 text-white contact-icon" />
                                        </div>
                                    </div>
                                    <div className='ms-3 contactForm_cont'>
                                        <h4 className="text-capitalize fw-bold">E-mail</h4>
                                        <p className='fw-medium pera'>abc@gmail.com</p>
                                    </div>
                                </div>
                                <div className='main_contactBox d-flex w-100 w-lg-50 w-md-50'>
                                    <div className='main_contact'>
                                        <div className="Contact_icon-wrapper text-center align-content-center">
                                            <TbPhoneCall className="p-1 text-white contact-icon" />
                                        </div>
                                    </div>
                                    <div className='ms-3 contactForm_cont'>
                                        <h4 className="text-capitalize fw-bold">Phone No.</h4>
                                        <p className='fw-medium pera'>(+91) 12345 67890</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-lg-flex d-md-flex w-100 justify-content-center mt-2 mt-lg-3 mt-md-3'>
                                <div className='main_contactBox d-flex w-100 w-lg-50 w-md-50'>
                                    <div className='main_contact'>
                                        <div className="Contact_icon-wrapper text-center align-content-center">
                                            <SlLocationPin className="p-1 text-white contact-icon" />
                                        </div>
                                    </div>
                                    <div className='ms-3 contactForm_cont'>
                                        <h4 className="text-capitalize fw-bold">Address</h4>
                                        <p className='fw-medium pera'>Jimbaran Regency ST.2290 DPS, Bali.</p>
                                    </div>
                                </div>
                                <div className='main_contactBox d-flex w-100 w-lg-50 w-md-50'>
                                    <div className='main_contact'>
                                        <div className="Contact_icon-wrapper text-center align-content-center">
                                            <FaRegClock className="p-1 text-white contact-icon" />
                                        </div>
                                    </div>
                                    <div className='ms-3 contactForm_cont'>
                                        <h4 className="text-capitalize fw-bold">Work Hours</h4>
                                        <p className='fw-medium pera'>Everyday 08:00 AM - 07:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <div className="Contact_cont h-100" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                            <div className='p-5'>
                                <div className='d-flex justify-content-center gap-3'>
                                    <div className='w-50'>
                                        <label htmlFor="" className='text-white'>Name</label>
                                        <input type="text" name="name" className='d-block w-100 mt-1 py-1 px-2 rounded text-white' style={{ outline: "none", border: "none", background: "#f5f5f594" }} id="" />
                                    </div>
                                    <div className='w-50'>
                                        <label htmlFor="" className='text-white'>E-mail</label>
                                        <input type="text" name="mail" className='d-block w-100 mt-1 py-1 px-2 rounded text-white' style={{ outline: "none", border: "none", background: "#f5f5f594" }} id="" />
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <label htmlFor="" className='text-white mt-2'>Phone No.</label>
                                    <input type="number" name="phonenumber" className='d-block w-100 mt-1 py-1 px-2 rounded text-white' style={{ outline: "none", border: "none", background: "#f5f5f594" }} id="" />
                                </div>
                                <div className='w-100'>
                                    <label htmlFor="" className='text-white mt-2'>Message</label>
                                    <textarea name="message" id="" rows={5} className='d-block w-100 mt-1 py-1 px-2 rounded text-white' style={{ outline: "none", border: "none", background: "#f5f5f594" }}></textarea>
                                </div>
                                <div className='text-center mt-3 d-flex justify-content-center'>
                                     <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 p-2 px-3 d-flex align-items-center justify-content-center'><TiArrowRight className='bg-white rounded-5 fs-6 me-2' style={{ color: "rgb(17, 107, 107)" }} /> Submit</button>  </div>
                                    
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* map */}
            <div className='container' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                <div className='mb-5'>
                    <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='shadow-lg'></iframe>
                </div>
            </div>
        </>
    )
}

export default ContactInfo