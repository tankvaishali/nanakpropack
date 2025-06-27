import { BookOpen, Cpu, Diamond, Heart, Leaf, Settings, ShoppingCart, Utensils } from "lucide-react";
import { GiMedicinePills } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { RiBox3Fill } from "react-icons/ri";

export const IndustryData = [
    {
        Id: "Food-Beverage",
        title: "Food & Beverage",
        subtitle: "Custom Solutions for Perishable Goods",
        icon: <Utensils size={35} />,
        img: require('../assets/images/food_baverage.jpg'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Innovative packaging for perishable items</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Eco-friendly and recyclable materials</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Custom designs for beverages and ready-to-eat products</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Maintains food safety and extends shelf life</div>
            </div>
        ),
        para: "Our packaging solutions for the Food & Beverage industry ensure freshness, safety, and sustainability with custom, eco-friendly designs."
    },
    {
        Id: "Retail-E-Commerce",
        title: "Retail & E-Commerce",
        subtitle: "Smart Packaging for Seamless Shopping Experiences",
        icon: <ShoppingCart size={35} />,
        img: require('../assets/images/retail_ecommerce.jpg'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Secure packaging for shipping and returns</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Durable and lightweight options for cost-effective shipping</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Customizable branded packaging</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Seamless unboxing experience for customers</div>
            </div>
        ),
        para: "We provide durable, lightweight, and customizable packaging for the Retail & E-Commerce sector, enhancing both shipping and unboxing experiences."
    },
    {
        Id: "Health-Beauty",
        title: "Health & Beauty",
        subtitle: "Premium Packaging for Personal Care Products",
        icon: <Heart size={35} />,
        img: require('../assets/images/health_beauty.jpg'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Premium packaging for luxury beauty products</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Protects fragile items like glass bottles</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Custom-fit packaging for skincare and cosmetics</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> FDA-compliant and safe materials</div>
            </div>
        ),
        para: "Our packaging ensures product protection and brand elegance for the Health & Beauty industry with eco-friendly designs."
    },
    {
        Id: "Electronics-Technology",
        title: "Electronics & Technology",
        subtitle: "Tech-Savvy Solutions for Delicate Devices",
        icon: <Cpu size={35} />,
        img: require('../assets/images/electronics_packaging.webp'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Shock-resistant packaging for gadgets</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Anti-static solutions for electronics</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Eco-friendly options for tech accessories</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Custom inserts to secure devices during transit</div>
            </div>
        ),
        para: "We offer shock-resistant, anti-static packaging for electronics, ensuring safety and sustainability for delicate tech products."
    },
    {
        Id: "Medical-Pharmaceutical",
        title: "Medical & Pharmaceutical",
        subtitle: "Safe & Compliant Packaging for Healthcare Products",
        icon: <GiMedicinePills size={35} />,
        img: require('../assets/images/pharmaceutical_medical.webp'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Sterile packaging for medical devices</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Maintains pharmaceutical product integrity</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Compliant with industry safety standards</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Temperature-controlled packaging solutions</div>
            </div>
        ),
        para: "Our packaging solutions for the medical and pharmaceutical sectors ensure product safety, compliance, and integrity during transportation and storage."
    },
    {
        Id: "Automotive-Industrial",
        title: "Automotive & Industrial",
        subtitle: "Durable Solutions for Heavy-Duty Industries",
        icon: <Settings size={35} />,
        img: require('../assets/images/automobile_industry.jpg'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Heavy-duty packaging for industrial products</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Protection against wear and tear</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Customized solutions for automotive parts</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Eco-friendly materials for sustainability</div>
            </div>
        ),
        para: "Our durable packaging solutions for the automotive and industrial sectors offer protection and sustainability for heavy-duty products."
    },
    {
        Id: "Agriculture",
        title: "Agriculture",
        subtitle: "Sustainable Solutions for the Agriculture Industry",
        icon: <Leaf size={35} />,
        img: require('../assets/images/agriculture.avif'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Biodegradable packaging solutions</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Moisture-resistant materials for produce</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Durable packaging for bulk shipping</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Customizable packaging for farm products</div>
            </div>
        ),
        para: "We provide eco-friendly, biodegradable packaging solutions for agriculture, protecting farm products while maintaining sustainability."
    },
    {
        Id: "Luxury-Goods",
        title: "Luxury Goods",
        subtitle: "Elegant Packaging for High-End Brands",
        icon: <Diamond size={35} />,
        img: require('../assets/images/Luxury_Goodes.jpg'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Elegant and premium packaging designs</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Customizable branding for high-end items</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Specialty materials for a luxurious feel</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Secure packaging for delicate goods</div>
            </div>
        ),
        para: "Our luxury packaging solutions offer premium, elegant designs that enhance the prestige and protection of high-end products."
    },
    {
        Id: "Education-Publishing",
        title: "Education & Publishing",
        subtitle: "Creative Packaging for Educational Products",
        icon: <BookOpen size={35} />,
        img: require('../assets/images/education_publishing.webp'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Durable packaging for books and stationery</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Custom designs for educational kits</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Eco-friendly options for paper-based products</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Secure packaging for print media</div>
            </div>
        ),
        para: "We provide durable, creative, and eco-friendly packaging solutions for the education and publishing sectors, ensuring product safety."
    },
    {
        Id: "Sports-Outdoors",
        title: "Sports & Outdoors",
        subtitle: "Rugged Packaging for Outdoor and Sports Gear",
        icon: <MdOutlineSportsSoccer size={35} />,
        img: require('../assets/images/sports-outdoor.jpg'),
        content: (
            <div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Weather-resistant packaging for outdoor gear</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Lightweight packaging for sports equipment</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Custom designs for athletic products</div>
                <div className="py-1"><RiBox3Fill className="text-success fs-5 fw-bold" /> Eco-friendly packaging for outdoor brands</div>
            </div>
        ),
        para: "Our rugged, weather-resistant packaging solutions cater to the sports and outdoor industries, protecting gear while promoting sustainability."
    }
];