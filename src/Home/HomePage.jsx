import React from 'react';
import HOC from '../HOC';
import AboutSec from './AboutSec';
import "../assets/css/About.css"
import PackagingSection from './PackagingSection';
import MissionvisionSec from './MissionvisionSec';

function HomePage() {
  return (
<>
<AboutSec/>
<MissionvisionSec/>
<PackagingSection/>
</>
  );
}

export default HOC(HomePage);
