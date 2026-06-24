"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayesha Khatun",
    title: "PROFESSIONAL & TALENTED",
    feedback:
      "My past experience with interior design had not been very good. Not so with Imagine Interiors.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Nazrul Islam",
    title: "FANTASTIC JOB!",
    feedback:
      "I think Imagine Interiors is one of the best house design companies in Bangladesh.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Rahim Ahmed",
    title: "EXCELLENT SERVICE!",
    feedback:
      "Their redesign made sure that the soul of the house was maintained while the look was modernized.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-2 text-center uppercase tracking-widest">
          500+ Happy Customers
        </h2>
        <p className="text-gray-500 text-center mb-16 tracking-widest">
          AND STILL COUNTING...
        </p>

        {/* Slider Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <AnimatePresence mode="wait">
            {[index, (index + 1) % testimonials.length].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-6 shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={testimonials[idx].image}
                    alt={testimonials[idx].name}
                    fill
                    className="object-cover border-2 border-yellow-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic font-light text-sm">
                    "{testimonials[idx].feedback}"
                  </p>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                      {testimonials[idx].name}
                    </h3>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {testimonials[idx].title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center md:justify-end items-center gap-4">
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
