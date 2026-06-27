import React from "react";

const CustomFurniture = () => {
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
          <h1 className="text-5xl md:text-7xl font-extralight">Custom Page </h1>
          <div className="w-20 h-[1px] bg-white mt-8"></div>
        </div>
      </section>
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image Side with a clean frame */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-600"></div>
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2000&auto=format&fit=crop"
              alt="Custom Furniture Craftsmanship"
              className="w-full h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-amber-600"></div>
          </div>

          {/* Right: Text Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-amber-600 tracking-[0.3em] text-xs font-bold uppercase mb-2">
                Tailored Excellence
              </h3>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                BESPOKE CUSTOM FURNITURE
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              We don't just furnish spaces; we craft experiences. Every piece of
              furniture we design is a reflection of your personality,
              meticulously hand-crafted by master artisans to fit your exact
              specifications and space.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                "Hand-Carved Details",
                "Premium Materials",
                "Perfect Dimensions",
                "Ergonomic Design",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-600 rotate-45"></span>
                  <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="px-10 py-4 bg-black text-white font-bold hover:bg-amber-600 transition-all duration-300">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomFurniture;
