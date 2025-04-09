import React from 'react'
import HOC from '../HOC';
import "../assets/css/Home.css";
import HomeAboutSec from './HomeAboutSec';
import IndustrySection from './IndustrySection';
import HomeService from './HomeService';
import HomeProduct from './HomeProduct';

function HomePage() {
    return (
        <>
            <HomeAboutSec />
            <HomeProduct/>
            <HomeService />
            <IndustrySection />
        </>
    )
}

export default HOC(HomePage)