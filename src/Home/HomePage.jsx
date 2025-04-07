import React from 'react';
import HOC from '../HOC';
import AboutSec from './AboutSec';

function HomePage() {
  return (
<>
<AboutSec/>
</>
  );
}

export default HOC(HomePage);
