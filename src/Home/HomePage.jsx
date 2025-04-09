import React from 'react'
import HOC from '../HOC';
import "../assets/css/Home.css";
import HomeAboutSec from './HomeAboutSec';
import IndustrySection from './IndustrySection';
import HomeService from './HomeService';
import HomeProduct from './HomeProduct';
import Whychooseus from './Whychooseus';
import Testimonial from './Testimonial';

function HomePage() {
    return (
        <>
            <HomeAboutSec />
            <HomeProduct/>
            <Whychooseus/>
            <HomeService />
            <Testimonial/>
            <IndustrySection />
        </>
    )
}

export default HOC(HomePage)