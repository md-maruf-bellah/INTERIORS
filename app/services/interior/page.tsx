import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "HOME INTERIOR DESIGN",
      description:
        "Imagine Interiors offers the following services in its home interior design package:",
      points: [
        "Custom Residential and Commercial Interiors",
        "Design Consultation",
        "Space Planning",
        "Color Selections",
        "Furniture procurement and fabric selections",
        "Selection and procurement of floor and wall coverings",
        "Custom bedding and window treatments",
        "Coordinate fine art and decorative accessories",
      ],
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      alt: "Home Interior",
    },
    {
      title: "OFFICE INTERIOR DESIGN",
      description: "As part of office design we offer the following services:",
      points: [
        "Photograph space(s)",
        "Create detailed design drawings",
        "Order furnishings, fixtures, equipment, finishes & modular wall system",
        "Discussion of project budget & timeline",
        "Suitable alternatives for space plans",
        "Selection of colour palette, wall coverings & curtains, flooring, ceiling & window treatments, moldings, furnishings & finishes",
        "Client review & approval",
        "Administration of documents for bidding, Review proposals with client to ensure quality & fair pricing",
        "Site visits",
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      alt: "Office Interior",
    },
    {
      title: "RESTAURANT INTERIOR DESIGN",
      description:
        "As part of restaurant interior design, we offer the following services:",
      points: [
        "Design Consultation",
        "Space Planning",
        "Color Selections",
        "Furniture procurement and fabric selections, & systems, flooring, ceiling & window treatments, moldings, furnishings & finishes",
        "Selection and procurement of floor and wall coverings",
        "Checking that the final design matches the design concept",
        "Order furnishings, fixtures, equipment, finishes & modular wall system",
        "Discussion of project budget & timeline",
        "Administration of documents for bidding, Review proposals with client to ensure quality & fair pricing",
        "Client review & approval",
        "Site visits",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      alt: "Restaurant Interior",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Premium Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden mb-20">
        <img
          src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc="
          className="absolute inset-0 w-full h-full object-cover"
          alt="Portfolio Hero"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h3 className="tracking-[0.4em] uppercase text-sm font-light mb-4">
            Crafting Excellence
          </h3>
          <h1 className="text-5xl md:text-7xl font-extralight">
            Interior Page
          </h1>
          <div className="w-20 h-[1px] bg-white mt-8"></div>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image Side - শুধুমাত্র হোম ইন্টারিয়রের জন্য বামে, অন্যদের জন্য ডানে দেখানোর লজিক */}
            <div
              className={`overflow-hidden  shadow-lg ${index % 2 !== 0 ? "md:order-2" : ""}`}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-4">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="text-amber-600 mt-1">●</span> {point}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-amber-600 text-white font-bold hover:bg-black transition-all duration-300">
                LET'S GET STARTED
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesSection;
