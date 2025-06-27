import { TiArrowRight } from 'react-icons/ti'
import TitleHead from '../TitleHead'
import { Link } from 'react-router-dom'

function HomeAboutSec() {
    return (
        <>
            <div className='container overflow-hidden'>
                <div className='row py-4 align-items-center'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className='h-100'>
                            <div class="gallery">
                                <img src={require("../assets/images/HomeAboutImg1.jpeg")} alt="a house on a mountain" />
                                <img src={require("../assets/images/HomeAboutImg2.jpg")} alt="sime pink flowers" />
                                <img src={require("../assets/images/HomeAboutImg3.webp")} alt="big rocks with some trees" />
                                <img src={require("../assets/images/HomeAboutImg4.webp")} alt="a waterfall, a lot of tree andgreat view from the sky" />
                                <img src={require("../assets/images/HomeAboutImg5.webp")} alt="a cool landscape" />
                                <img src={require("../assets/images/HomeAboutImg6.jpg")} alt="inside a town between twobuildings" />
                                <img src={require("../assets/images/HomeAboutImg7.webp")} alt="a great view of the sea abovemountain" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='h-100 p-3' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <TitleHead ftitle={"About"} stitle={"Us"} />
                            <p className="fw-medium pera">
                                Established in ---- boxiz expertise in all kinds
                                of packaging.
                            </p>
                            <p className="fw-medium pera">
                                In a very short span of time boxiz stands out
                                as one of a kind company where we not only
                                cater to packaging needs but also help you in
                                your designing journey, therefore
                                transforming a basic product into a branding
                                portal.
                            </p>
                            <Link to={"/companyinfo"} className='text-decoration-none'>

                                <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 p-2 px-3 d-flex align-items-center'><TiArrowRight className='bg-white rounded-5 fs-6 me-2' style={{ color: "rgb(17, 107, 107)" }} /> About Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAboutSec