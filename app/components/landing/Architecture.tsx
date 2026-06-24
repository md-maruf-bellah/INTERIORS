import React from "react";
import { Sofa, LayoutGrid, Building2 } from "lucide-react"; // আইকনগুলো ইমপোর্ট করা হলো

const services = [
  {
    title: "Interior Architecture",
    description:
      "We believe in designing contextual and contemporary spaces to create a positive urban change",
    icon: <LayoutGrid size={100} className="text-gray-500" />, // আইকন যোগ করা হলো
  },
  {
    title: "Furniture Design",
    description:
      "Crafting bespoke furniture that is functional, comfortable, and aesthetically pleasing.",
    icon: <Sofa size={100} className="text-gray-500" />,
  },
  {
    title: "Architecture & Landscape",
    description:
      "Designing landscapes to improve both human and environmental health",
    icon: <Building2 size={100} className="text-gray-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-gray-500 font-bold tracking-[0.3em] text-sm mb-2 uppercase">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 uppercase">
          What Can We Offer
        </h2>
        <div className="w-50 h-[2px] bg-gray-300 mx-auto mb-16"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-10 flex flex-col items-center transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:-translate-y-2"
            >
              {/* আইকন সেকশন */}
              <div className="w-50 h-50 bg-white border border-gray-200 rounded-full mb-8 flex items-center justify-center shadow-sm">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Read More Button - কিছুটা স্টাইল উন্নত করা হয়েছে */}
              <button className="text-sm font-bold tracking-[0.2em] text-black border border-gray-300 py-3 w-full cursor-pointer hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all duration-300">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
