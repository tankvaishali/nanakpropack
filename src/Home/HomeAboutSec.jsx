import React from 'react'
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
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s" alt="a house on a mountain" />
                                <img src="https://www.upack.in/media/catalog/product/cache/1b6285b0519a2e4e16a97e58faf7625a/u/p/upsh_1_.jpg" alt="sime pink flowers" />
                                <img src="https://lsmedia.linker-cdn.net/103364/2019/157310.jpeg?d=390x390" alt="big rocks with some trees" />
                                <img src="https://5.imimg.com/data5/VC/YN/AF/SELLER-37495777/white-flat-boxes-500x500.jpg" alt="a waterfall, a lot of tree andgreat view from the sky" />
                                <img src="https://5.imimg.com/data5/SELLER/Default/2020/12/ZY/PU/WH/59704400/9-ply-corrugated-box-500x500.jpg" alt="a cool landscape" />
                                <img src="https://cpimg.tistatic.com/08269617/b/4/Plain-Corrugated-Boxes.jpg" alt="inside a town between twobuildings" />
                                <img src="https://5.imimg.com/data5/AX/ZF/XC/SELLER-26200476/partition-corrugated-boxes-500x500.jpg" alt="a great view of the sea abovemountain" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='h-100 p-3' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <TitleHead ftitle={"About"} stitle={"Us"} />
                            <p className="fw-medium pera">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deserunt reiciendis, blanditiis pariatur consectetur a illum sunt totam magni illo veritatis explicabo, eveniet, repudiandae labore praesentium esse ipsum tenetur doloribus?
                            </p>
                            <p className="fw-medium pera">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deserunt reiciendis, blanditiis pariatur consectetur a illum sunt totam magni illo veritatis explicabo, eveniet, repudiandae labore praesentium esse ipsum tenetur doloribus?
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