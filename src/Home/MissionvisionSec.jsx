import React from 'react';
import { GiStairsGoal } from 'react-icons/gi';
import { GoGoal } from 'react-icons/go';
import { TiArrowRight } from 'react-icons/ti';

function MissionvisionSec() {
  return (
    <>
      <div className="mission_bg">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-3 col-12 col-md-6 p-5 p-md-4">
              <div className="h-100 d-flex flex-column text-center">
                <div className="cardcss p-4 flex-grow-1 text-white">
                  <div class="serviceicon">
                    <img src={""} alt="" className="img-fluid" />
                  </div>
                  <h1 className='text-success fw-bold '><GoGoal /></h1>
                  <h5 className=" pinkcolor fw-bold py-3 ">MISSION</h5>
                  <p className="pera text-secondary fw-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 p-5 p-md-4">
              <div className="h-100 d-flex flex-column text-center">
                <div className="cardcss p-4 flex-grow-1 text-white">
                  <div class="serviceicon">
                    <img src={""} alt="" className="img-fluid" />
                  </div>
                  <h1 className='text-success fw-bold '><GiStairsGoal /></h1>
                  <h5 className=" pinkcolor fw-bold py-3 ">VISION</h5>
                  <p className="pera text-secondary fw-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 col-md-6 p-5 p-md-4">
              <div className="h-100 itemmision text-white p-3 p-lg-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cupiditate.
                <div className='text-secondary pt-2 fw-medium '> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem unde tenetur perferendis deserunt nulla voluptatibus recusandae ad nesciunt odio molestias!  Quidem unde tenetur perferendis deserunt nulla voluptatibus recusandae ad nesciunt odio molestias! </div>
                <button type='button' className='Aboutbtn border-0 fw-bold text-white rounded-5 px-3 p-2 mt-4'><TiArrowRight className='bg-white rounded-5 fs-6' style={{ color: "rgb(17, 107, 107)" }} /> View More</button> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionvisionSec;
