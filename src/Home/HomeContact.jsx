import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import TitleHead from '../TitleHead'

function HomeContact() {
    return (
        <>
            <div className='Home_contact_bg py-5 mb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                       
                        <div className="text-center text-white"><TitleHead ftitle={"Let's Conversation"} stitle={"With Us !"}/></div>
                        <p className='pera text-center text-white' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nam deleniti ipsam voluptatum dolores voluptate nisi qui ut dolor nostrum?</p>
                        <div className='col-12 col-lg-8 p-3'>
                            <div className='w-100 d-flex justify-content-center gap-3'>
                                <div className='w-50'>
                                    <label htmlFor="" className='d-block text-white'>Name </label>
                                    <input type="text" name="name" id="" className='input-home w-100 mt-2 p-2 border-0' style={{ outline: "none", background: "#f5f5f594" }} />
                                </div>
                                <div className='w-50'>
                                    <label htmlFor="" className='d-block text-white'>E-mail</label>
                                    <input type="text" name="mail" id="" className='input-home w-100 mt-2 p-2 border-0' style={{ outline: "none", background: "#f5f5f594" }} />
                                </div>
                            </div>
                            <div className='w-100'>
                                <label htmlFor="" className='text-white mt-3'>Message</label>
                                <textarea name="message" id="" placeholder='Write Your Message Here...' rows={8} className='input-home w-100 mt-2 p-2 border-0' style={{ outline: "none", background: "#f5f5f594" }}></textarea>
                            </div>
                            <div className='text-center mt-4'>
                                <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 px-4 pb-3 pt-3'><TiArrowRight className='bg-white rounded-5 fs-6' style={{ color: "rgb(17, 107, 107)" }} /> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContact