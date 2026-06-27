"use client";

import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Leaf,
  MessageSquareHeart,
} from "lucide-react";

const advantages = [
  { title: "Hassle-free process", icon: CheckCircle2 },
  { title: "Transparent costs", icon: ShieldCheck },
  { title: "On-time delivery", icon: Clock },
  { title: "Eco-friendly & advanced tech", icon: Leaf },
  { title: "Personalized consultation", icon: MessageSquareHeart },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-light text-gray-900 uppercase tracking-[0.1em]">
            Interior Designer in{" "}
            <span className="font-bold text-gray-500">Bangladesh</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Are you looking to create an awesome space to live or work in? Do
            you look forward to a hassle-free interior design process? You've
            come to the right place!
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our portfolio in both residential interior design and commercial
            interior design speaks for itself. We transform visions into reality
            with precision and elegance.
          </p>
          <button className="px-8 py-3 bg-black text-white hover:bg-yellow-500 transition-all uppercase tracking-widest text-sm">
            View Our Portfolio
          </button>
        </div>

        {/* Right Side: Advantage List with Background Image */}
        <div
          className="relative p-10  overflow-hidden min-h-[400px] flex items-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* অন্ধকার ওভারলে যাতে টেক্সট সুন্দর দেখায় */}
          <div className="absolute inset-0 bg-white/1 backdrop-blur-sm overflow-hidden font-sans"></div>

          <div className="relative z-10 w-full">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-100">
              The Imagine Interiors Advantage
            </h3>
            <ul className="space-y-6">
              {advantages.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-gray-100"
                >
                  <div className="bg-gray-100 p-2 text-white">
                    <item.icon size={20} className="text-black" />
                  </div>
                  <span className="text-lg font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
