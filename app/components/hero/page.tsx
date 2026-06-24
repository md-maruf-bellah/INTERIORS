"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  { name: "FACEBOOK", url: "#" },
  { name: "TWITTER", url: "#" },
  { name: "YOUTUBE", url: "#" },
];

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    title: "Modern Luxury Spaces",
    description:
      "Experience elegant interiors designed with comfort, sophistication, and functionality in mind. We create spaces that inspire modern living while reflecting your unique personality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000",
    title: "Bespoke Architecture",
    description:
      "From concept to completion, our architectural solutions combine innovation and craftsmanship to deliver timeless designs tailored to your lifestyle and vision.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    title: "Contemporary Living",
    description:
      "Discover beautifully curated living environments where aesthetics meet practicality, creating harmonious spaces for everyday life and memorable moments.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    title: "Elegant Interior Design",
    description:
      "Our interior design services blend premium materials, thoughtful layouts, and refined details to transform ordinary rooms into extraordinary experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000",
    title: "Dream Home Creations",
    description:
      "We bring your dream home to life with personalized designs, exceptional craftsmanship, and a commitment to creating spaces you'll love for years to come.",
  },
];

const HeroPage = () => {
  const [current, setCurrent] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Hero Content */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-thin mb-8 tracking-tighter">
          {slides[current].title}
        </h1>
        <p className="font-thin w-full lg:w-3xl mb-8">
          {slides[current]?.description}
        </p>
        <button className="border border-white py-4 px-10 text-[10px] font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all cursor-pointer">
          VIEW PROJECTS
        </button>
      </main>

      {/* Vertical Social Sidebar */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-30">
        <ul className="flex flex-col gap-10">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                className="text-[10px] font-bold tracking-[0.2em] hover:text-gray-400"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider Controls */}
      <div className="fixed bottom-10 right-10 z-30 flex items-center gap-4">
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="w-12 h-12 border  cursor-pointer border-white/30 hover:bg-white hover:text-black transition"
        >
          ←
        </button>
        <button
          onClick={() =>
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
          }
          className="w-12 h-12 border cursor-pointer border-white/30 hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
