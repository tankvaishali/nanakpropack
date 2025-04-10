import React from 'react'
import "../assets/css/Contact.css";
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import HOC from '../HOC';

function ContactPage() {
    return (
        <>
            <div className='landing_color d-flex justify-content-center align-items-center text-dark'>
                <div className='fw-bold fs-5  container text-center'><Link to={"/"} className='text-decoration-none  text-success'>Home</Link> / Contact</div>
            </div>
            <ContactInfo />
        </>
    )
}

export default HOC(ContactPage)