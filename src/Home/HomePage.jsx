import React from 'react'
import HOC from '../HOC';
import "../assets/css/Home.css";
import HomeAboutSec from './HomeAboutSec';
import IndustrySection from './IndustrySection';
import HomeService from './HomeService';
import HomeProduct from './HomeProduct';
import Whychooseus from './Whychooseus';

function HomePage() {
    return (
        <>
            <HomeAboutSec />
            <Whychooseus/>
            <HomeProduct/>
            <HomeService />
            <IndustrySection />
        </>
    )
}

export default HOC(HomePage)