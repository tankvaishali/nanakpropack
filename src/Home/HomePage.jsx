import React from 'react'
import HOC from '../HOC';
import "../assets/css/Home.css";
import HomeAboutSec from './HomeAboutSec';
import IndustrySection from './IndustrySection';
import IndustryInner from './IndustryInner';

function HomePage() {
    return (
        <>
            <HomeAboutSec />
            <IndustrySection />
            <IndustryInner />
        </>
    )
}

export default HOC(HomePage)