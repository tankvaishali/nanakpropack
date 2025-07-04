import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer_bg'>
      <span className="bubble b1"></span>
      <span className="bubble b2"></span>
      <span className="bubble b3"></span>
      <span className="bubble b4"></span>
      <span className="bubble b5"></span>
      <div className="container ">
        <div className="row border-bottom border-secondary py-3 py-lg-0">
          <div className="col-6 col-lg-4 pt-4 pt-lg-5 pb-0 pb-lg-3 order-2 order-lg-1">
            <div className="h-100 text-white text-center" >
              <div>
                <h2 className="border-bottom border-success mx-auto border-3 pb-2" style={{ width: "fit-content" }}>Useful Links</h2>
              </div>
              <div className='py-1'><Link to={"/"} className='text-white text-decoration-none pera'>Home</Link></div>
              <div className='py-1'><Link to={"/companyinfo"} className='text-white text-decoration-none pera'>Company Info</Link></div>
              <div className='py-1'><Link to={"/product"} className='text-white text-decoration-none pera'>Products</Link></div>
              <div className='py-1'><Link to={"/contact"} className='text-white text-decoration-none pera'>Contact Us</Link></div>
              <div className='py-1'><Link to={"/faq"} className='text-white text-decoration-none pera'>Faq</Link></div>
            </div>
          </div>
          <div className="col-12 col-lg-4   my-4 order-1 order-lg-2" >
            <div className="h-100 text-center p-3" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              // border: '1px solid #ccc',
              borderRadius: '10px'
            }}>
              <div className='w-50 mx-auto'>
                <img
                  src={require("./assets/images/ImportedPhoto_1744001267180.jpg")}
                  alt="Example"
                  className='img-fluid w-100 h-auto rounded'
                />
              </div>
              <div className='text-white pt-3 pera'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo enim sed adipisci sequi quae sint dicta! Ipsum porro aut sit.
              </div>
            </div>

          </div>
          <div className="col-6 col-lg-4 pt-4 pt-lg-5 pb-0 pb-lg-3 order-3">
            <div className="h-100 text-white text-center">
              <div>
                <h2 className="border-bottom border-success mx-auto border-3 pb-2" style={{ width: "fit-content" }}>Social Media</h2>
                <div className="row mt-3">

                  <div className="col-6 p-2 ">
                    <Link
                      to={"https://www.facebook.com/people/Belpatra-Pharmachem/100082567202591/"}
                      style={{ width: "fit-content" }}
                      target="_blank"
                      className="footericon text-center p-2 ms-auto   d-flex text-decoration-none text-white facebookicon">
                      <FaFacebookF />
                    </Link>
                  </div>

                  <div className="col-6 p-2 ">
                    <Link
                      to={"https://www.instagram.com/belpatra_pharmachem/"}
                      style={{ width: "fit-content" }}
                      className="footericon text-center p-2   d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="col-6 p-2 ">
                    <Link
                      to={"https://twitter.com/Belpatra_Pharma"}
                      style={{ width: "fit-content" }}
                      className="footericon text-center p-2  ms-auto d-flex text-decoration-none text-white twittericon">
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="col-6 p-2 ">
                    <Link
                      to={
                        "https://www.linkedin.com/in/belpatra-pharmachem/"
                      }
                      style={{ width: "fit-content" }}
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
        <div className='p-2 text-center text-white pera'>Copyright © 2025 💚 Boxiz, All rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
