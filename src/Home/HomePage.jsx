import HOC from '../HOC';
import "../assets/css/Home.css";
import HomeAboutSec from './HomeAboutSec';
import IndustrySection from './IndustrySection';
import HomeService from './HomeService';
import HomeProduct from './HomeProduct';
import Whychooseus from './Whychooseus';
import Testimonial from './Testimonial';
import HomeCarousel from '../HomeCarousel';
import HomeContact from './HomeContact';

function HomePage() {
    return (
        <>
            <HomeCarousel />
            <HomeAboutSec />
            <HomeProduct />
            <Whychooseus />
            <HomeService />
            <Testimonial />
            <IndustrySection />
            <HomeContact />
        </>
    )
}

export default HOC(HomePage)