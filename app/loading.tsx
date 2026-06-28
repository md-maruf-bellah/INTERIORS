"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-[9999]">
      <div className="flex flex-col items-center gap-6">
        <motion.div className="flex gap-3">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="w-4 h-4 bg-black "
              animate={{ y: ["0%", "-100%", "0%"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          ))}
        </motion.div>

        <motion.span
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-500 font-medium tracking-[0.3em] uppercase text-sm"
        >
          Loading...
        </motion.span>
      </div>
    </div>
  );
}
