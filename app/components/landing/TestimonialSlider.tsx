"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayesha Khatun",
    title: "PROFESSIONAL & TALENTED",
    feedback: "My past experience with interior design had not been very good.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Nazrul Islam",
    title: "FANTASTIC JOB!",
    feedback:
      "I think Imagine Interiors is one of the best house design companies.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Rahim Ahmed",
    title: "EXCELLENT SERVICE!",
    feedback:
      "Their redesign made sure that the soul of the house was maintained.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  },
  {
    name: "Sara Khan",
    title: "HIGHLY RECOMMENDED",
    feedback: "Professional work and timely delivery. Very satisfied.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // স্লাইডার লজিক (প্রতিবার ২টি করে আইটেম)
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 2 >= testimonials.length ? 0 : i + 2));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 2 < 0 ? testimonials.length - 2 : i - 2));
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 500 : -500, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -500 : 500, opacity: 0 }),
  };

  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-16 text-center uppercase tracking-widest">
          500+ Happy Customers
        </h2>

        {/* গ্রিড কন্টেইনার */}
        <div className="relative h-auto md:h-48">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[index, index + 1].map((idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-xl transition-all"
                >
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={testimonials[idx].image}
                      alt={testimonials[idx].name}
                      fill
                      className="object-cover border-2 border-yellow-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic font-light text-sm">
                      "{testimonials[idx].feedback}"
                    </p>
                    <h3 className="text-sm font-bold uppercase text-gray-900">
                      {testimonials[idx].name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center md:justify-end items-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
