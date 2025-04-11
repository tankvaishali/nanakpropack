import { Settings } from 'lucide-react'
import React from 'react'
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
const animationTypes = ['fade-up', 'fade-right', 'zoom-in-up', 'flip-left', 'fade-down'];

function HomeService() {
    return (
        <>
            <div className='container overflow-hidden'>
                <div className='row my-5 p-2 p-lg-0'>
             <div className='text-center py-3'>
             <TitleHead ftitle={"Customized"} stitle={"Packaging Services"}/>
              <p className='pera'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, optio! Laudantium a assumenda recusandae, autem fugiat quos quasi impedit excepturi!</p>
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
                <h3 className='fw-bold service_tittle'>{service.title}</h3>
                <p className='fw-medium pera text-secondary pera'>{service.description}</p>
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