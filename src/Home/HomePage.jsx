import React from 'react';
import HOC from '../HOC';
import AboutSec from './AboutSec';
import "../assets/css/About.css"

function HomePage() {
  return (
<>
<AboutSec/>
</>
  );
}

export default HOC(HomePage);
