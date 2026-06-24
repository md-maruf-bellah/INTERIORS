"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// সার্ভিস ডাটা (ইমেজ লিঙ্কসহ)
const services = [
  {
    title: "INTERIOR DESIGN",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    title: "EXTERIOR DESIGN",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "FURNITURE DESIGN",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    title: "OFFICE DESIGN",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "KITCHEN DESIGN",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "BEDROOM DESIGN",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
  {
    title: "LIVING ROOM DESIGN",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
  {
    title: "BATHROOM DESIGN",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    title: "HOME REMODELING",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const DesignServices = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* হেডার */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wider">
            OUR DESIGN SERVICES
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* সার্ভিস ইমেজ */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* টাইটেল বক্স */}
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="font-bold text-gray-800 tracking-wide uppercase">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* বাটন */}
        <div className="text-center mt-12">
          <button className="px-10 py-3 bg-black text-white font-bold tracking-widest hover:bg-yellow-500 transition-all duration-300 shadow-xl">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
