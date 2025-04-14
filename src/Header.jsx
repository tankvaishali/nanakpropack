import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import 'animate.css';

function Header() {
  const email = 'boxesbynanak@gmail.com';
  const owner = "numpur sharma"
  const name = "Boxes By Nanak"
  const Website = "nanakpropack.vercel.app"
  const value = `Name:${name}\n\nWebsite:${encodeURIComponent(Website)}\n\nOwner:${owner}\n\nEmail:${email}`;
  const List = [
    { ListName: "Home", path: '/' },
    { ListName: "Company-info", path: '/companyinfo' },
    { ListName: "Products", path: '/product' },
    { ListName: "Contact-Us", path: '/contact' },
    { ListName: "Faq", path: '/faq' }
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    const menu = document.getElementById('offcanvasWithBothOptions');

    const handleShow = () => {
      setIsMenuOpen(true);
      let temp = [];
      List.forEach((_, i) => {
        setTimeout(() => {
          temp.push(i);
          setAnimatedItems([...temp]);
        }, i * 300); // 300ms delay per item
      });
    };

    const handleHide = () => {
      setIsMenuOpen(false);
      setAnimatedItems([]);
    };

    menu?.addEventListener('shown.bs.offcanvas', handleShow);
    menu?.addEventListener('hidden.bs.offcanvas', handleHide);

    return () => {
      menu?.removeEventListener('shown.bs.offcanvas', handleShow);
      menu?.removeEventListener('hidden.bs.offcanvas', handleHide);
    };
  }, []);

  return (
    <>
      <div className="d-lg-block d-none">
        <div className='bg-success' style={{ height: "80px" }}>
          <div className='container'>
            <div className="row">
              <div className='col-4' style={{ marginTop: '11px' }}>
                <Link to={""} className='text-center text-decoration-none text-light px-3' style={{ borderRight: '1.5px solid white', fontSize: '17px' }}><FaFacebook /></Link>
                <Link to={""} className='text-center text-decoration-none text-light px-3' style={{ borderRight: '1.5px solid white', fontSize: '17px' }}><FaInstagram /></Link>
                <Link to={""} className='text-center text-decoration-none text-light px-3' style={{ borderRight: '1.5px solid white', fontSize: '17px' }}><FaTwitter /></Link>
                <Link to={""} className='text-center text-decoration-none text-light px-3' style={{ borderRight: '1.5px solid white', fontSize: '17px' }}><FaLinkedin /></Link>
              </div>
              <div className='col-8 d-flex align-items-center justify-content-end'>
                <div className='pe-3 mx-2 text-light fw-semibold' style={{ marginTop: '11px', borderRight: '1.5px solid white', fontSize: '14px' }}>
                  3rd Floor, 94/ B, August Kranti Marg, Altamount Road
                </div>
                <div className='pe-3 mx-2 text-light fw-semibold' style={{ marginTop: '11px', borderRight: '1.5px solid white', fontSize: '14px' }}>
                  +91 <Link to={"tel:8899786765"} className='text-decoration-none text-light'>8899786765</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='headermargin sticky-top'>
        <nav className="navbar navbar-expand-lg py-0" style={{ height: '80px' }}>
          <div className="container bg-light mx-auto col-12 mt-lg-0 mt-2 align-items-center">
            <Link className="navbar-brand col-2" to="/">
              <div className='text-center'>
                <img src={require('./assets/images/nanak_logo_BGremove.png')} alt="Logo" height={70} />
              </div>
            </Link>
            <button className="btn d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
              <FiMenu size={24} />
            </button>
            <div className="d-none d-lg-block text-center justify-content-center col-8">
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-center">
                <li className="nav-item">
                  <Link to={'/'} className='text-decoration-none text-dark fw-bold mx-3 text-uppercase' style={{ fontSize: '14px' }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/companyinfo'} className='text-decoration-none text-dark fw-bold mx-3 text-uppercase text-nowrap' style={{ fontSize: '14px' }}>Company-Info</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/product'} className='text-decoration-none text-dark fw-bold mx-3 text-uppercase' style={{ fontSize: '14px' }}>Products</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/contact'} className='text-decoration-none text-dark fw-bold mx-3 text-uppercase text-nowrap' style={{ fontSize: '14px' }}>Contact-Us</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/faq'} className='text-decoration-none text-dark fw-bold mx-3 text-uppercase' style={{ fontSize: '14px' }}>Faq</Link>
                </li>
              </ul>
            </div>
            {/* QR Code icon */}
            <div className='col-2 text-center fs-3'>
              <MdOutlineQrCodeScanner data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>
          </div>
        </nav>
      </div>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ zIndex: 15000 }}>
        <div className="offcanvas-body" style={{ backgroundImage: "linear-gradient(0deg, rgb(0 12 9), rgb(122 197 157), rgb(228 255 243), rgb(255 255 255))" }}>
          <Link className="navbar-brand col-2" to="/">
            <div className='text-center' >
              <img src={require('./assets/images/nanak_logo_BGremove.png')} alt="Logo" height={70} aria-label="Close" data-bs-dismiss="offcanvas" />
            </div>
          </Link>
          {/* <button type="button" className="btn-close mx-1 text-light" data-bs-dismiss="offcanvas" aria-label="Close"><X /></button> */}
          <ul className="navbar-nav text-center">
            {List.map((item, index) => {
              const isVisible = animatedItems.includes(index);
              return (
                <li key={index} className={`nav-item my-2 bg-success text-center row align-items-center mx-4 ${isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.3}s`, animationDuration: '1s' }}>
                  <div className='col-4' style={{ position: 'relative', height: '56px', width: '50px', left: '10px' }}>
                    <div style={{
                      position: 'absolute', top: 0, left: "-30px", height: '100%', width: '100%', zIndex: 3,
                      backgroundImage: ' linear-gradient(90deg, rgb(183 237 200), rgb(0 168 71)) ', clipPath: 'polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 0% 50%)',
                    }}></div>
                    <div style={{
                      position: 'absolute', top: '0px', left: '2px', height: '100%', width: 'calc(100% - 4px)', zIndex: 1,
                      backgroundColor: 'rgb(1 95 43)', clipPath: 'polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 40% 50%)',
                    }}></div>
                    <div style={{
                      position: 'absolute', top: 0, left: "13px", height: '100%', width: '100%', zIndex: 0,
                      backgroundColor: 'rgb(0 43 17)', clipPath: 'polygon(0% 0%, 61% 0%, 100% 48%, 60% 100%, 0% 100%, 40% 50%)',
                    }}></div>
                    <div style={{
                      position: 'absolute', top: 0, left: "-14px", height: '100%', width: '100%', zIndex: 2,
                      backgroundColor: 'rgb(0 156 66)', clipPath: 'polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 40% 50%)',
                    }}></div>
                  </div>
                  <div className='col-8'>
                    <Link to={`${item.path}`} className='text-decoration-none text-light fw-bold text-uppercase p-3 text-center text-nowrap'>{item.ListName}</Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* QR Code Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body w-100 position-relative text-center py-5">
              <QRCode value={value} size={256} bgColor="#ffffff" fgColor="#000000" level="Q" />
              <img src={require('./assets/images/nanak_logo_BGremove.png')} alt="logo" style={{ position: 'absolute', backgroundColor: "white", top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', }} />
              <h3 className='pt-4'>Scan This QR For Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
