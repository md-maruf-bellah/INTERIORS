import React from "react";

const ExteriorSection = () => {
  return (
    <div className="bg-white">
      {/* 1. Premium Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden mb-20">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Portfolio Hero"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h3 className="tracking-[0.4em] uppercase text-sm font-light mb-4">
            Crafting Excellence
          </h3>
          <h1 className="text-5xl md:text-7xl font-extralight">
            Exterior Page{" "}
          </h1>
          <div className="w-20 h-[1px] bg-white mt-8"></div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <h3 className="text-amber-600 tracking-[0.3em] text-xs font-bold uppercase mb-4">
              Architecture & Exterior
            </h3>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              EXTERIOR DESIGN THAT INSPIRES
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Large Featured Image */}
            <div className="lg:col-span-7 relative group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Exterior Design"
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 p-6 backdrop-blur-sm max-w-sm">
                <p className="text-sm font-bold text-amber-600 mb-1 uppercase tracking-widest">
                  Featured Project
                </p>
                <h4 className="text-xl font-medium">
                  Modern Residential Façade
                </h4>
              </div>
            </div>

            {/* Service Points */}
            <div className="lg:col-span-5 space-y-10">
              {[
                {
                  title: "Building Façade",
                  desc: "Crafting unique building skins that blend aesthetics with urban landscape.",
                },
                {
                  title: "Landscaping",
                  desc: "Sustainable green spaces tailored to complement the building structure.",
                },
                {
                  title: "Outdoor Lighting",
                  desc: "Strategic illumination design to enhance architectural features after sunset.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border-l-2 border-gray-200 pl-8 hover:border-amber-600 transition-colors duration-500"
                >
                  <h4 className="text-2xl font-light text-gray-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </div>
              ))}

              <button className="px-10 py-4 border border-black text-black font-bold hover:bg-black hover:text-white transition-all duration-300">
                VIEW PROJECTS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExteriorSection;
