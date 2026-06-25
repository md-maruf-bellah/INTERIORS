"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { count: 180, label: "CURRENT CLIENTS" },
  { count: 10, label: "YEARS OF EXPERIENCE" },
  { count: 5, label: "AWARDS WINNING" },
  { count: 2, label: "OFFICES WORLDWIDE" },
];

const StatsSection = () => {
  // useInView hook ব্যবহার করা হয়েছে যাতে স্ক্রোল করে সেকশনে এলে অ্যানিমেশন শুরু হয়
  const { ref, inView } = useInView({
    triggerOnce: true, // একবারই অ্যানিমেশন হবে
    threshold: 0.3, // সেকশনের ৩০% দৃশ্যমান হলে অ্যানিমেশন শুরু হবে
  });

  return (
    <section ref={ref} className="bg-white pb-10 pt-25 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 ${
              index !== stats.length - 1 ? "md:border-r border-gray-200" : ""
            }`}
          >
            <h3 className="text-4xl md:text-8xl font-bold text-gray-400 mb-4">
              {inView ? (
                <CountUp start={0} end={stat.count} duration={2.5} />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-sm font-bold tracking-[0.2em] text-black text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
