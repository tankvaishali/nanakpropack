import { GiStairsGoal } from 'react-icons/gi';
import { GoGoal } from 'react-icons/go';
import { FaLeaf, FaShieldAlt, FaMicrochip } from 'react-icons/fa';

function MissionvisionSec() {
  let counter = [
    {
      icon: <FaLeaf />,
      name: "Sustainability"
    },
    {
      icon: <FaShieldAlt />,
      name: "Protection"
    },
    {
      icon: <FaMicrochip />,
      name: "Innovation"
    },
  ]
  return (
    <>
      <div className="mission_bg">
        <span className="bubble b1"></span>
        <span className="bubble b2"></span>
        <span className="bubble b3"></span>
        <span className="bubble b4"></span>
        <span className="bubble b5"></span>
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-3 col-12 col-md-6 p-4">
              <div className="h-100 d-flex flex-column text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                <div className="cardcss p-4 flex-grow-1 text-white">
                  <div class="serviceicon">
                    <img src={""} alt="" className="img-fluid" />
                  </div>
                  <h1 className='text-success fw-bold '><GoGoal /></h1>
                  <h5 className=" pinkcolor fw-bold py-3 ">MISSION</h5>
                  <p className="pera text-secondary fw-medium" >To be Committed to quality and innovation</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 p-4 ">
              <div className="h-100 d-flex flex-column text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                <div className="cardcss p-4 flex-grow-1 text-white">
                  <div class="serviceicon">
                    <img src={""} alt="" className="img-fluid" />
                  </div>
                  <h1 className='text-success fw-bold '><GiStairsGoal /></h1>
                  <h5 className=" pinkcolor fw-bold py-3 ">VISION</h5>
                  <p className="pera text-secondary fw-medium" >To create a sustainable packaging technique
                    that aims to eliminate waste by reusing,
                    recycling or composting materials.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 col-md-12 p-2 p-md-4 ">
              <div className="h-100  text-white p-4 d-flex flex-column justify-content-between pera" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                <div>
                  Our mission is to deliver innovative, sustainable, and high-quality packaging solutions that protect products and elevate brands, while our vision is to lead the way in eco-conscious packaging to embrace smarter, greener alternatives.
                </div>
                <div className="text-secondary pt-2 fw-medium pera">
                  We aim to provide sustainable, high-quality packaging that protects, promotes, and leads the future of eco-friendly innovation."
                </div>

                <div className="row justify-content-evenly justify-content-lg-center g-3 mt-2">
                  {
                    counter.map((x, i) => (
                      <div key={i} className="col-sm-4 col-6 m-1 m-sm-0 d-flex icon-box">
                        <div className=" text-center  w-100 d-flex flex-column justify-content-center p-2 align-items-center" style={{ borderRadius: "0px 25px 0px 25px" }}>
                          <div className="mission-icon" >  {x.icon}</div>
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
