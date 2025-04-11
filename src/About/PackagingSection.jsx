import React from 'react';
import { RiBox3Fill } from 'react-icons/ri';
import TitleHead from '../TitleHead';

const PackagingSection = () => {
  return (
<div className="packaginsec py-5 overflow-hidden">
<div className="container py-5">
<div className="row ">
  <div className="col-12 col-lg-6"  data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
    <div className="h-100">
<img src="https://plus.unsplash.com/premium_photo-1676057875345-e49ca1c10dee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='img-fluid object-fit-cover w-100 h-100'/>
    </div>
  </div>
  <div className="col-12 col-lg-6 packaginsec"  data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
    <div className="h-100 p-3">
    <TitleHead ftitle={"Innovative"} stitle={"Packaging Solutions"}/>
    
        <p className="text-secondary fw-medium pera">
          We offer creative packaging designs for all industries, tailored to enhance your product's value and safety. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam debitis laboriosam reiciendis voluptas maiores excepturi enim perferendis non doloribus optio!
        </p>
        <ul className="features-list">
          <div className='d-flex py-1 align-items-center pera'><div className='fs-5 fw-bold text-success pe-2'><RiBox3Fill/></div>Eco-friendly and sustainable materials</div>
          <div className='d-flex py-1 align-items-center pera'><div className='fs-5 fw-bold text-success pe-2'><RiBox3Fill/></div>Custom designs for various industries</div>
          <div className='d-flex py-1 align-items-center pera'><div className='fs-5 fw-bold text-success pe-2'><RiBox3Fill/></div>Durable and cost-effective solutions</div>
        </ul>
    </div>
  </div>
</div>
</div>
</div>

//     <div className="container packaging-section d-flex align-items-center justify-content-between">
//       {/* Image Side */}
// <div className="row">
// <div className="col-md-6 col-12 position-relative">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1676057875345-e49ca1c10dee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveHxlbnwwfHwwfHx8MA%3D%3D"
//           alt="Packaging"
//           className="img-fluid hover-image rounded"
//         />
//         <div className="hover-overlay d-flex align-items-center justify-content-center">
//           <h3 className="hover-text text-white">Premium Packaging</h3>
//         </div>
//       </div>

//       {/* Content Side */}
//       <div className="col-md-6 col-12 content-container">
//         <h2 className="section-title">Innovative Packaging Solutions</h2>
//         <p className="section-description">
//           We offer creative packaging designs for all industries, tailored to enhance your product's value and safety.
//         </p>
//         <ul className="features-list">
//           <li>Eco-friendly and sustainable materials</li>
//           <li>Custom designs for various industries</li>
//           <li>Durable and cost-effective solutions</li>
//         </ul>
//       </div>
// </div>
//     </div>
  );
};

export default PackagingSection;
