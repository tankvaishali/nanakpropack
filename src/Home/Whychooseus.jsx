import { FaBoxOpen, FaClock, FaHandshake, FaLeaf, FaRecycle, FaTags } from 'react-icons/fa6';
import TitleHead from '../TitleHead';
import { FaPaintBrush, FaSmile } from 'react-icons/fa';
// import TittlesAll from './TittlesAll';
function Whychooseus() {

    const services = [
        {
            icon: <FaLeaf />,
            title: "Eco-Friendly Materials",
            description: "We use sustainable, recyclable, and biodegradable packaging solutions.",
            content: "Our packaging helps reduce environmental impact while maintaining strength and functionality.",
            animation: "fade-right"
        },
        {
            icon: <FaBoxOpen />,
            title: "Premium Quality",
            description: "Durable, sturdy, and professional-grade materials for all your packaging needs.",
            content: "Each box is crafted to ensure maximum protection and a polished brand presentation.",
            animation: "fade-left",
            delay: "400"
        },
        {
            icon: <FaPaintBrush />,
            title: "Customization Available",
            description: "Tailored designs and sizes to match your brand’s identity.",
            content: "From custom printing to unique sizes, we help you create packaging that stands out.",
            animation: "fade-right",
            delay: "400"
        },
        {
            icon: <FaTags />,
            title: "Affordable Pricing",
            description: "Competitive rates without sacrificing quality or design.",
            content: "We offer budget-friendly options that deliver exceptional value.",
            animation: "flip-up",
            delay: "600"
        },
        {
            icon: <FaClock />,
            title: "Fast Turnaround",
            description: "Quick production and delivery to meet your deadlines.",
            content: "We understand time-sensitive needs and ensure reliable service every step of the way.",
            animation: "fade-left",
            delay: "800"
        },
        {
            icon: <FaSmile />,
            title: "Customer Satisfaction",
            description: "We're committed to excellent service and long-term relationships.",
            content: "Our support team ensures your experience is smooth, from inquiry to delivery.",
            animation: "fade-right",
            delay: "400"
        },
        {
            icon: <FaHandshake />,
            title: "Trusted by Leading Brands",
            description: "Our packaging is relied on by businesses across various industries.",
            content: "With a proven track record, we consistently deliver quality that brands trust.",
            animation: "flip-up",
            delay: "600"
        },
        {
            icon: <FaRecycle />,
            title: "Sustainable Innovation",
            description: "We constantly improve our materials and methods to stay eco-forward.",
            content: "By adopting the latest in sustainable practices, we ensure smarter, greener packaging solutions.",
            animation: "fade-left",
            delay: "800"
        },
    ];

    return (
        <>

            <div className="service-area bg_chooseus overflow-hidden">
                <div>
                    <div className="service-area pb-5 overflow-hidden">

                        <div className='servicepro_bgimage pt-5 pb-3'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className='text-white'>
                                            <TitleHead ftitle={"Why"} stitle={"Choose Us"} />
                                        </div>


                                        <p className="about-text pera text-secondary pt-1" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                                            Trusted for quality, driven by sustainability, and committed to delivering packaging that protects and impresses.
                                        </p>
                                        <p className="about-text pera text-secondary" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                                            Delivering sustainable packaging with quality you can trust and service you can count on.
                                        </p>
                                    </div>
                                    {services.map((service) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos={service.animation} data-aos-duration="1500" data-aos-delay={service.delay} data-aos-once="true">
                                            <div className="single-service-box mb-4 overflow-hidden">
                                                <div className="service-icon-thumb text-warning fs-1 py-2">
                                                    {service.icon}
                                                </div>
                                                <div className="service-title">
                                                    <h2 className="jr_tittle text-white text-capitalize fs-4 py-1">{service.title}</h2>
                                                    <p className="pera" style={{ color: "rgba(211, 211, 211, 0.546)" }}>{service.description}</p>
                                                </div>
                                                <div className="service-button" style={{ color: "rgba(211, 211, 211, 0.546)" }}>
                                                    <div className="pera d-inline">{service.content}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Whychooseus