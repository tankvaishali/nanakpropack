import { Settings } from 'lucide-react'
import React from 'react'
import { AiOutlineTags } from 'react-icons/ai';
import { FaCubes } from 'react-icons/fa';
import { LiaCogsSolid } from 'react-icons/lia';
import { LuBox } from 'react-icons/lu';
import { MdSdStorage } from 'react-icons/md';
import { RiPencilRuler2Line, RiRecycleFill, RiTapeFill } from 'react-icons/ri';
import { SiSecurityscorecard } from 'react-icons/si';

const services = [
    {
        id: 1,
        icon: <AiOutlineTags size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Label Print',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 2,
        icon: <RiPencilRuler2Line size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Branding Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 3,
        icon: <LuBox size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Bulk & Retail',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 4,
        icon: <SiSecurityscorecard size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Secure Packaging',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 5,
        icon: <LiaCogsSolid size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Industrial Packaging',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 6,
        icon: <RiTapeFill size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Labeling & Sealing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 7,
        icon: <RiRecycleFill size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Green Materials',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 8,
        icon: <FaCubes size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Box Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    },
    {
        id: 9,
        icon: <MdSdStorage size={55} className='service_icon p-2 rounded-5 shadow' />,
        title: 'Smart Storage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus dolores optio est quos omnis, possimus voluptatem adipisci eligendi necessitatibus sint earum delectus itaque porro vel provident laborum vitae nihil?'
    }
];

function HomeService() {
    return (
        <>
            <div className='container'>
                <div className='row my-5 p-2 p-lg-0'>
                <h1 className='fw-bold text-center mb-4'>Customized Packaging Services</h1>
                    {services.map((service) => (
                        <div key={service.id} className='col-12 col-md-6 col-lg-4 bg-white pt-3 pb-2 px-4 service-box'>
                            <div className='h-100'>
                                <div className='my-2'>{service.icon}</div>
                                <h3 className='fw-bold service_tittle'>{service.title}</h3>
                                <p className='fw-medium pera text-secondary'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeService