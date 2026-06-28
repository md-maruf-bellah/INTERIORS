"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
];

const BrandSlider = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: { duration: 30, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-thin text-black uppercase">
          Trusted by the Best Brands
        </h2>
      </div>

      <div className="relative w-full overflow-hidden mask-fade cursor-grab">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={controls}
          initial={{ x: 0 }}
          // অটোমেটিক মুভমেন্ট চালু করা
          onAnimationComplete={() => {
            controls.set({ x: 0 });
            controls.start({
              x: "-50%",
              transition: { duration: 30, ease: "linear", repeat: Infinity },
            });
          }}
          // কার্সার নিলে থামবে
          onHoverStart={() => controls.stop()}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          // কার্সার সরালে আবার শুরু হবে
          onHoverEnd={() => {
            controls.start({
              x: "-50%",
              transition: { duration: 30, ease: "linear", repeat: Infinity },
            });
          }}
        >
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 border border-gray-300 px-4 "
            >
              <img
                src={logo}
                alt="Brand"
                className="max-h-16 w-full object-contain opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>

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
