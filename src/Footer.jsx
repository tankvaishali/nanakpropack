import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer_bg'>
 <div className="container ">
    <div className="row border-bottom border-secondary ">
        <div className="col-12 col-lg-4  border-end my-4" >
<div className="h-100 text-center p-1" >
    <div className='w-50 mx-auto'>
        <img src={require("./assets/images/ImportedPhoto_1744001267180.jpg")} alt="" className='img-fluid  w-100 h-100' />
    </div>
<div className='text-white pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo enim sed adipisci sequi quae sint dicta! Ipsum porro aut sit.</div>
</div>
        </div>

<div className="col-12 col-lg-4 py-4 py-lg-5">
  <div className="h-100 text-white text-center">
    <div>
      <h2 className="border-bottom border-success mx-auto border-3 pb-2" style={{width:"fit-content"}}>Useful Links</h2>
    </div>
    <div className='py-1'><Link to={"/"} className='text-white text-decoration-none '>Home</Link></div>
    <div className='py-1'><Link to={"/companyinfo"} className='text-white text-decoration-none '>Company Info</Link></div>
    <div className='py-1'><Link to={"/"} className='text-white text-decoration-none '>Products</Link></div>
    <div className='py-1'><Link to={"/"} className='text-white text-decoration-none '>Contact Us</Link></div>
    <div className='py-1'><Link to={"/"} className='text-white text-decoration-none '>Faq</Link></div>
  </div>
</div>
<div className="col-12 col-lg-4 py-4 py-lg-5">
  <div className="h-100 text-white text-center">
    <div>
      <h2 className="border-bottom border-success mx-auto border-3 pb-2" style={{width:"fit-content"}}>Social Media</h2>
      <div className="row mt-3">
      
                    <div className="col-6 p-2 ">
                    <Link
                      to={"https://www.facebook.com/people/Belpatra-Pharmachem/100082567202591/"}
                      style={{width:"fit-content"}}
                      target="_blank"
                      className="footericon text-center p-2 ms-auto   d-flex text-decoration-none text-white facebookicon">
                      <FaFacebookF />
                    </Link>
                    </div>

                   <div className="col-6 p-2 ">
                   <Link
                      to={"https://www.instagram.com/belpatra_pharmachem/"}
                       style={{width:"fit-content"}}
                      className="footericon text-center p-2   d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                   </div>
                <div className="col-6 p-2 ">
                <Link
                      to={"https://twitter.com/Belpatra_Pharma"}
                       style={{width:"fit-content"}}
                      className="footericon text-center p-2  ms-auto d-flex text-decoration-none text-white twittericon">
                      <FaTwitter />
                    </Link>
                </div>
                  <div className="col-6 p-2 ">
                  <Link
                      to={
                        "https://www.linkedin.com/in/belpatra-pharmachem/"
                      }
                      style={{width:"fit-content"}}
                      target="_blank"
                      className="footericon text-center p-2   d-flex text-decoration-none text-white linkicon">
                      <FaLinkedinIn />
                    </Link>
                  </div>

                 
      </div>
    </div>

  </div>
</div>

    </div>
    <div className='p-2 text-center text-white'>Copyright © 2025 💚 Boxiz, All rights Reserved.</div>
 </div>
    </div>
  );
}

export default Footer;
