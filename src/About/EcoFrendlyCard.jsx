import { FaRecycle } from 'react-icons/fa';
import { FaArrowsRotate, FaCircleCheck } from 'react-icons/fa6';
import { IoFlaskSharp } from 'react-icons/io5';
import TitleHead from '../TitleHead';

function EcoFrendlyCard() {

    const ecoFeatures = [
        {
            icon: <FaRecycle className='Eco_icon' />,
            title: 'Sustainable Materials',
            description: 'Uses recyclable, biodegradable, or compostable materials that reduce environmental impact.',
            aos: "fade-right",
            aosDelay: "200"
        },
        {
            icon: <IoFlaskSharp className='Eco_icon' />,
            title: 'No Harmful Chemicals',
            description: 'Avoids plasticizers, bleaches, and synthetic dyes that pollute land and water.',
            aos: "fade-up",
            aosDelay: "400"
        },
        {
            icon: <FaArrowsRotate className='Eco_icon' />,
            title: 'Reusable Packaging',
            description: 'Designed for multiple uses, reducing the need for single-use materials.',
            aos: "fade-down",
            aosDelay: "800"
        },
        {
            icon: <FaCircleCheck className='Eco_icon' />,
            title: 'Compliance Ready',
            description: 'Meets increasing environmental regulations and helps avoid fines or legal issues.',
            aos: "fade-left",
            aosDelay: "1000"
        }
    ];

    return (
        <>
            <div className='container my-5'>
                <div className='text-center'>
                    <TitleHead ftitle={"The Benefits Of"} stitle={"Smart Packaging"} />
                    <p className='pera' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Smart packaging is revolutionizing the way products are delivered, displayed, and experienced by consumers. It combines traditional packaging with advanced technologies like QR codes, RFID tags, NFC, and sensors to create an interactive and efficient solution.</p>
                </div>
                <div className='row justify-content-center pt-2 overflow-hidden'>
                    {ecoFeatures.map((item, index) => (
                        <div key={index} className='col-12 col-lg-3 col-md-6 p-2' data-aos={item.aos} data-aos-delay={item.aosDelay} data-aos-duration="1500" data-aos-once="true">
                            <div className='Eco-Card h-100 bg-white py-3 px-4'>
                                <div className='fs-1' style={{ color: 'var(--green)' }}>
                                    {item.icon}
                                </div>
                                <h3 className='Eco_tittle fw-bold my-2'>{item.title}</h3>
                                <p className='fw-medium text-secondary pera' style={{ wordBreak: "break-all" }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EcoFrendlyCard