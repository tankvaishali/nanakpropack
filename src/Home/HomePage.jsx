import React from 'react'
import HOC from '../HOC';
import "../assets/css/Home.css";
import HomeAboutSec from './HomeAboutSec';
import IndustrySection from './IndustrySection';

function HomePage() {
    return (
        <>
            <HomeAboutSec />
            <IndustrySection />
        </>
    )
}

export default HOC(HomePage)