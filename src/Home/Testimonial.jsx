import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Slider from "react-slick";
import TitleHead from '../TitleHead';

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  let ProductItemlist = [
    {
      img: require("../assets/images/ImportedPhoto_1744001267180.jpg"),
      name: "Alappuzha",
      tittle: "Kerala",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: require("../assets/images/ImportedPhoto_1744001267180.jpg"),

      name: "Mannanchery",
      tittle: "Kerala",
      description:
        "I'm so pleased with Tharayil Power. I was a Community Solar customer for years and I've recently put panels on my roof. ",
    },
    {
      img: require("../assets/images/ImportedPhoto_1744001267180.jpg"),

      name: "Komalapuram",
      tittle: "Kerala",
      description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <div className='bg_testimonial overflow-hidden'>
      <div className="container py-5">
        <div className="row">
        <div className="col-12 col-lg-6 d-flex " data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
<div className="h-100 text-white text-center flex-column justify-content-center align-content-center ">
<TitleHead ftitle={"What"} stitle={"Client Says"}/>

              

<div className="pera text-secondary">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem error aperiam culpa officiis harum sequi sapiente voluptates expedita debitis aliquid.
</div>
<div className="pera text-secondary pt-3">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem error aperiam culpa officiis harum sequi sapiente voluptates expedita debitis aliquid.
</div>
</div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
<div className="h-100  p-3">
<Slider {...settings}>
                  {ProductItemlist.map((x, i) => {
                    return (
                      <div key={i} className="mt-3 text-center ">
                      <div className="pt-3 fs-1 text-success">
                          <FaQuoteRight />
                        </div>
                        <div className="py-3 text-white pera">{x.description}</div>
                        <div
                          className="rounded-circle mx-auto mt-4"
                          style={{ width: "80px", height: "80px" }}
                        >
                          <img
                            src={x.img}
                            alt="not found"
                            className="img-fluid w-100 h-100 rounded-circle object-fit-cover"
                          />
                        </div>
                        <div className="py-1 pt-2">
                          <div className="text-white py-1 fw-medium fs-5">
                            {x.name}
                          </div>
                          <div className="text-secondary fw-medium pb-2">
                            {x.tittle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
</div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
