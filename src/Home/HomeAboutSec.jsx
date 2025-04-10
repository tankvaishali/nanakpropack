import React from 'react'
import { TiArrowRight } from 'react-icons/ti'

function HomeAboutSec() {
    return (
        <>
            <div className='container'>
                <div className='row pb-4 align-items-center'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className='h-100'>
                            <div class="gallery">
                                <img src="https://picsum.photos/id/1040/200/200" alt="a house on a mountain" />
                                <img src="https://picsum.photos/id/106/200/200" alt="sime pink flowers" />
                                <img src="https://picsum.photos/id/136/200/200" alt="big rocks with some trees" />
                                <img src="https://picsum.photos/id/1039/200/200" alt="a waterfall, a lot of tree andgreat view from the sky" />
                                <img src="https://picsum.photos/id/110/200/200" alt="a cool landscape" />
                                <img src="https://picsum.photos/id/1047/200/200" alt="inside a town between twobuildings" />
                                <img src="https://picsum.photos/id/1057/200/200" alt="a great view of the sea abovemountain" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='h-100 p-3'>
                            <h1 className='fw-bold'>About Us</h1>
                            <p className="fw-medium pera">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deserunt reiciendis, blanditiis pariatur consectetur a illum sunt totam magni illo veritatis explicabo, eveniet, repudiandae labore praesentium esse ipsum tenetur doloribus?
                            </p>
                            <p className="fw-medium pera">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deserunt reiciendis, blanditiis pariatur consectetur a illum sunt totam magni illo veritatis explicabo, eveniet, repudiandae labore praesentium esse ipsum tenetur doloribus?
                            </p>
                            <div>
                                <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 px-3 pb-3 pt-2'><TiArrowRight className='bg-white rounded-5 fs-6' style={{ color: "rgb(17, 107, 107)" }} /> About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAboutSec