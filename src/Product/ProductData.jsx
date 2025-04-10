import React, { useState } from 'react'
import { Departments } from './ProductDepartment';
import emailjs from '@emailjs/browser';
import TitleHead from '../TitleHead';

function ProductData() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        size: '',
        boxType: '',
        color: '',
        customization: '',
        name: '',
        email: '',
        contact: ''
    });
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState(Departments[0]);
    const [selectedImages, setSelectedImages] = useState(
        Departments[0].subimage.map((item) => item.MainImage)
    );

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSelectedImages(tab.subimage.map((item) => item.MainImage));
    };


    const ProductImages = Departments.flatMap((item) => item.subimage || []);
    console.log('ProductImages:', ProductImages);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleImageClick = (rowIndex, imageSrc) => {
        const updatedImages = [...selectedImages];
        updatedImages[rowIndex] = imageSrc;
        setSelectedImages(updatedImages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send("service_zepm12o", "template_7ul0y5d", formData, "riFOd-JVCm2W9dXYR")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your design request has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    boxType: '',
                    size: '',
                    color: '',
                    customization: '',
                    quantity: 1,
                    message: ''
                });
            }, (err) => {
                console.error('FAILED...', err);
                alert('There was an error sending your request. Please try again later.');
            });
    };

    return (
        <>
            <div className='overflow-hidden'>
                <div className='container py-5'>

                    {/* Tabs */}
                    <div className="d-flex flex-wrap justify-content-center mb-4 gap-3">
                        {Departments.map((tab) => (
                            <div
                                key={tab.id}
                                className={`${activeTab.id === tab.id} productTab px-4 py-2 fw-bold text-white`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>

                    {/* Product Data */}
                    {activeTab.subimage.map((item, index) => (
                        <div className='row mb-5' key={index}>
                            <div className='col-12 col-lg-6 p-3' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                                <div className='h-100 p-3'>
                                    <div className='text-center' style={{ maxWidth: "100%", width: "100%", maxHeight: "350px", height: "auto" }}>
                                        <img
                                            src={selectedImages[index]}
                                            className='object-fit-cover'
                                            alt=""
                                            style={{
                                                width: "300px",
                                                height: "300px",
                                                objectFit: "cover",
                                                aspectRatio: "1 / 1"
                                            }}
                                        />
                                    </div>
                                    <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
                                        {[item.MainImage, ...item.SubImageData].map((src, i) => (
                                            <div
                                                key={i}
                                                style={{ width: "80px", height: "80px", cursor: "pointer" }}
                                                onClick={() => handleImageClick(index, src)}
                                            >
                                                <img
                                                    src={src}
                                                    className='w-100 h-100 object-fit-cover'
                                                    alt={`image-${i}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right side content */}
                            <div className='col-12 col-lg-6 p-3' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                                <div className='h-100 p-4 p-lg-5 rounded shadow-lg text-light bg-secondary'>
                                    <h2 className='fw-bold'>{item.MainName}</h2>
                                    <div className='py-2'>
                                        <p className='text-light pera'>{item.ProductDetails}</p>
                                    </div>
                                    <div>
                                        <button type='button' onClick={() => setShowModal(true)} className='Productbtn border-0 fw-bold text-white rounded-5 px-3 pb-3 pt-2'>Get Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {showModal && (
                <div
                    className="modal d-flex align-items-center justify-content-center"
                    tabIndex="-1"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1050,
                        overflowY: 'auto',
                        padding: '20px'
                    }}
                >
                    <div
                        className="bg-white p-4 p-md-5 rounded shadow-lg text-center position-relative"
                        style={{
                            maxWidth: '600px',
                            width: '100%',
                            border: "3px solid black",
                            margin: 'auto',
                            maxHeight: '100%',
                            overflowY: 'auto',
                        }}
                    >
                        <button
                            type="button"
                            className="btn-close position-absolute top-0 end-0 m-3"
                            onClick={() => setShowModal(false)}
                        ></button>

                        
                        <TitleHead ftitle={"Design"} stitle={"Your Own Box"}/>
                        <p className='text-muted'>Customize your box and get a quote instantly!</p>
                        <form onSubmit={handleSubmit} className="text-start">
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="size">Box Size</label>
                                        <select
                                            className="form-control border border-dark mt-1"
                                            name="size"
                                            value={formData.size}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select box size</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                            <option value="Custom">Custom</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="boxType" className='mt-2'>Box Type</label>
                                        <select
                                            className="form-control border border-dark mt-1"
                                            name="boxType"
                                            value={formData.boxType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select box type</option>
                                            <option value="Corrugated Box">Corrugated Box</option>
                                            <option value="Die-Cut Box">Die-Cut Box</option>
                                            <option value="Rigid Box">Rigid Box</option>
                                            <option value="Folding Carton">Folding Carton</option>
                                            <option value="Laminated Printed Box">Laminated Printed Box</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="color" className='mt-2'>Box Color</label>
                                        <select
                                            className="form-control border border-dark mt-1"
                                            name="color"
                                            value={formData.color}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select color</option>
                                            <option value="White">White</option>
                                            <option value="Brown">Brown</option>
                                            <option value="Black">Black</option>
                                            <option value="Custom">Custom</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="customization" className='mt-2'>Customizations</label>
                                        <textarea
                                            className="form-control border border-dark mt-1"
                                            name="customization"
                                            rows="3"
                                            value={formData.customization}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            className="form-control border border-dark mt-1"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className='mt-2'>Email</label>
                                        <input
                                            className="form-control border border-dark mt-1"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contact" className='mt-2'>Contact</label>
                                        <input
                                            className="form-control border border-dark mt-1"
                                            type="tel"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className='mt-2'>Quantity</label>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={decreaseQuantity}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                value={quantity}
                                                readOnly
                                                className="form-control w-25 text-center border border-dark"
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={increaseQuantity}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-center mt-4'>
                                <button type='submit' className='Productbtn border-0 fw-bold text-white rounded-5 px-3 pb-3 pt-2'>Submit Design Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductData