import React from 'react'

function HomeProduct() {
    return (
        <>
            <div className='container mb-5'>
                <div className='row g-2'>
                    <div className='col-12 col-lg-3'>
                        <div className='product_box h-100 rounded bg-white shadow p-3'>
                            <div className='mx-auto product_img' style={{width:"120px",height:"120px"}}>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s"} className='img-fluid rounded-circle shadow border border-success border-4' alt="" />
                            </div>
                            <h3 className='fw-bold text-center mt-2'>name</h3>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='product_box h-100 rounded bg-white shadow p-3'>
                            <div className='mx-auto product_img' style={{width:"120px",height:"120px"}}>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s"} className='img-fluid rounded-circle shadow border border-success border-4' alt="" />
                            </div>
                            <h3 className='fw-bold text-center mt-2'>name</h3>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='product_box h-100 rounded bg-white shadow p-3'>
                            <div className='mx-auto product_img' style={{width:"120px",height:"120px"}}>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s"} className='img-fluid rounded-circle shadow border border-success border-4' alt="" />
                            </div>
                            <h3 className='fw-bold text-center mt-2'>name</h3>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='product_box h-100 rounded bg-white shadow p-3'>
                            <div className='mx-auto product_img' style={{width:"120px",height:"120px"}}>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lDhdY9O0odI30HmdH092CbbtMX1PT1SA9A&s"} className='img-fluid rounded-circle shadow border border-success border-4' alt="" />
                            </div>
                            <h3 className='fw-bold text-center mt-2'>name</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProduct