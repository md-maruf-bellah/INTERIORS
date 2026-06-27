import React from "react";

const AboutSection = () => {
  return (
    <div>
      {/* 1. Premium Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Portfolio Hero"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h3 className="tracking-[0.4em] uppercase text-sm font-light mb-4">
            Crafting Excellence
          </h3>
          <h1 className="text-5xl md:text-7xl font-extralight">Our Work</h1>
          <div className="w-20 h-[1px] bg-white mt-8"></div>
        </div>
      </section>
      <section className="bg-white   px-6 md:px-20 lg:px-32">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 pt-10 items-end">
          <div>
            <h3 className="text-amber-600 tracking-[0.3em] text-xs font-bold mb-4 uppercase">
              Imagine Interiors
            </h3>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Bangladeshi company, <br />
              <span className="font-semibold">global track record.</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed border-l-2 border-amber-600 pl-8">
            We are an internationally recognized interior and exterior design
            firm with expertise in residential, commercial, hospitality, retail,
            healthcare and beauty projects.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                COMPLETE DESIGN SOLUTIONS
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our "turnkey approach" enables us to deliver complete interior
                design solutions for our clients, beginning at consultation and
                conceptualization and ending at project handover to the client.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h4 className="font-semibold text-gray-900 mb-4">
                The Imagine Way
              </h4>
              <p className="text-sm text-gray-500 mb-6">
                Terrified of how complex a design project can be? Don't worry!
                Our designers will guide you through:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Initial concepts",
                  "Furniture selection",
                  "Decorative materials",
                  "Construction docs",
                  "Budgeting",
                  "Project coordination",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="text-amber-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Modern Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="Office Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg mt-12">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
                alt="Office Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 pt-16 border-t border-gray-200 grid md:grid-cols-3 gap-8">
          <h2 className="text-2xl font-light text-gray-900">OUR PHILOSOPHY</h2>
          <div className="md:col-span-2 text-gray-600 space-y-4">
            <p>
              We believe in keeping up to date with the latest design principles
              and practices.
            </p>
            <p>
              Interior design should be about bringing the vision of the client
              to life. Design can be both aesthetic and functional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
