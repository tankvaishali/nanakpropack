import React from 'react';
import CountUp from 'react-countup';
import { GiStairsGoal } from 'react-icons/gi';
import { GoGoal } from 'react-icons/go';
import { FaLeaf, FaShieldAlt, FaMicrochip } from 'react-icons/fa';

function MissionvisionSec() {
  let counter=[
    {
icon:<FaLeaf/>,
      name:"Sustainability"
    },
    {
icon:<FaShieldAlt/>,
      name:"Protection"
    },
    {
icon:<FaMicrochip/>,
      name:"Innovation"
    },
  ]
  return (
    <>
      <div className="mission_bg " >
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-3 col-12 col-md-6 p-5 p-md-4">
              <div className="h-100 d-flex flex-column text-center"  data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                <div className="cardcss p-2 flex-grow-1 text-white">
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
              <div className="h-100 d-flex flex-column text-center"  data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                <div className="cardcss p-2 flex-grow-1 text-white">
                  <div class="serviceicon">
                    <img src={""} alt="" className="img-fluid" />
                  </div>
                  <h1 className='text-success fw-bold '><GiStairsGoal /></h1>
                  <h5 className=" pinkcolor fw-bold py-3 ">VISION</h5>
                  <p className="pera text-secondary fw-medium" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 col-md-6 p-5 p-md-4 ">
  <div className="h-100  text-white p-4 d-flex flex-column justify-content-between pera"  data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cupiditate.
    </div>
      <div className="text-secondary pt-2 fw-medium pera">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem unde tenetur perferendis deserunt nulla.
      </div>

    <div className="row g-3 mt-2">
      {
        counter.map((x, i) => (
          <div key={i} className="col-6 col-md-4 d-flex icon-box">
            <div className=" text-center  w-100 d-flex flex-column justify-content-center p-2 align-items-center" style={{ borderRadius: "0px 25px 0px 25px" }}>
        <div  className="mission-icon" >  {x.icon}</div>
              <div className="text-uppercase">{x.name}</div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MissionvisionSec;
