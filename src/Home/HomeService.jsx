import { AiOutlineTags } from 'react-icons/ai';
import { FaCubes } from 'react-icons/fa';
import { LiaCogsSolid } from 'react-icons/lia';
import { LuBox } from 'react-icons/lu';
import { MdSdStorage } from 'react-icons/md';
import { RiPencilRuler2Line, RiRecycleFill, RiTapeFill } from 'react-icons/ri';
import { SiSecurityscorecard } from 'react-icons/si';
import TitleHead from '../TitleHead';
const services = [
    {
        id: 1,
        icon: <AiOutlineTags size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Label Print',
        description: 'We create high-quality, custom-printed labels to showcase your brand and product details. Our labels are waterproof, smudge-resistant, and available in multiple finishes. Ideal for professional packaging that stands out on the shelf.'
    },
    {
        id: 2,
        icon: <RiPencilRuler2Line size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Branding Design',
        description: 'We offer tailored branding and packaging designs that reflect your business identity. From logos to layout, everything is customized for impact. Build brand recognition and elevate your product appeal.'
    },
    {
        id: 3,
        icon: <LuBox size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Bulk & Retail',
        description: 'Whether for wholesale or retail, we offer packaging solutions that scale with your business. Sturdy, functional, and visually appealing boxes that ensure safety and presentation. Great for product launches or high-volume distribution.'
    },
    {
        id: 4,
        icon: <SiSecurityscorecard size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Secure Packaging',
        description: 'We provide tamper-evident and secure packaging to keep your products safe during transit. Designed with durable materials and smart closures. Trusted for fragile, high-value, or sensitive goods.'
    },
    {
        id: 5,
        icon: <LiaCogsSolid size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Industrial Packaging',
        description: 'Built to withstand tough conditions, our industrial packaging is strong, reliable, and protective. Ideal for manufacturing, logistics, and heavy-duty transport. Reduce damage, save cost, and ship with confidence.'
    },
    {
        id: 6,
        icon: <RiTapeFill size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Labeling & Sealing',
        description: 'We offer end-to-end labeling and sealing solutions that secure your packages and streamline your process. Clear identification and firm closures ensure product safety. Improve packing speed and accuracy.'
    },
    {
        id: 7,
        icon: <RiRecycleFill size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Green Materials',
        description: 'Our eco-friendly packaging uses recyclable, biodegradable, and compostable materials. Good for your brand and better for the planet. Show your customers you care about sustainability.'
    },
    {
        id: 8,
        icon: <FaCubes size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Box Design',
        description: 'We design custom boxes that blend form and function perfectly. Unique shapes, folds, and prints add value to the unboxing experience. Give your packaging a premium, memorable edge.'
    },
    {
        id: 9,
        icon: <MdSdStorage size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Smart Storage',
        description: 'Optimize storage with packaging designed for efficient stacking, labeling, and access. Perfect for warehouse and inventory setups. Save space, cut costs, and stay organized.'
    }
];

const animationTypes = ['fade-up', 'fade-right', 'zoom-in-up', 'flip-left', 'fade-down'];

function HomeService() {
    return (
        <>
            <div className='container overflow-hidden'>
                <div className='row my-5 p-2 p-lg-0'>
                    <div className='text-center py-3'>
                        <TitleHead ftitle={"Customized"} stitle={"Packaging Services"} />
                        <p className='pera'>Tailored packaging solutions designed to fit your product, brand, and vision perfectly.</p>
                    </div>
                    {services.map((service, index) => {
                        const aosType = animationTypes[index % animationTypes.length];
                        const aosDelay = index * 100;
                        const aosDuration = 1000 + (index % 3) * 300;


                        return (
                            <div
                                key={service.id}
                                className='col-12 col-md-6 col-lg-4 bg-white pt-3 pb-2 px-4 service-box'
                                data-aos={aosType}
                                data-aos-delay={aosDelay}
                                data-aos-duration={aosDuration}
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <div className='h-100'>
                                    <div className='my-2'>{service.icon}</div>
                                    <h4 className='fw-semibold service_tittle'>{service.title}</h4>
                                    <p className='fw-medium text-secondary pera'>{service.description}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

export default HomeService