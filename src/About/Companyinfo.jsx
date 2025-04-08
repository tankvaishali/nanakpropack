import React from 'react';
import HOC from '../HOC';
import AboutSec from './AboutSec';
import "../assets/css/About.css"
import PackagingSection from './PackagingSection';
import MissionvisionSec from './MissionvisionSec';
import { Link } from 'react-router-dom';

function Companyinfo() {
  return (
<>
<div className='landing_color  d-flex justify-content-center align-items-center text-dark'>
<div className='fw-bold fs-5'><Link to={"/"} className='text-decoration-none  text-success'>Home</Link> / Company Info</div>
</div>
<AboutSec/>
<MissionvisionSec/>
<PackagingSection/>
</>
  );
}

export default HOC(Companyinfo);
