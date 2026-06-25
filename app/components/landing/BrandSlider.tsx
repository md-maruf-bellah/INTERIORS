"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/4/4a/Samsung_logo.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/3/30/Meta_Platforms_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
];

const BrandSlider = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className=" font-light text-gray-800 mb-8 text-center uppercase">
          <span className="text-gray-400 mb-4 font-bold pb-5"> Trusted by</span>{" "}
          <br />
          <span className="font-bold text-black text-4xl md:text-5xl">
            the Best Brands
          </span>
        </h2>
        <div className="w-40 h-[2px] bg-gray-300 mx-auto mt-6"></div>
      </div>

      {/* Infinite Scroll with Gradient Mask */}
      <div className="relative w-full overflow-hidden mask-fade">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 border border-gray-400 px-4"
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="max-h-16 w-full object-contain opacity-70 hover:opacity-100 transition-opacity "
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Masking CSS - এটি স্টাইল ফাইলে অথবা মডিউলে যোগ করুন */}
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default BrandSlider;
