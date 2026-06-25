"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ২০টি ডাটার অ্যারে (সাথে ক্যাটাগরি)
const allProjects = [
  {
    id: 1,
    title: "Modern Office",
    category: "Office",
    img: "1497366216548-37526070297c",
  },
  {
    id: 2,
    title: "Luxury Villa",
    category: "Residential",
    img: "1502672260266-1c1ef2d93688",
  },
  {
    id: 3,
    title: "Public Hall",
    category: "Public",
    img: "1518780664697-55e3ad937233",
  },
  {
    id: 4,
    title: "Corporate Space",
    category: "Office",
    img: "1486406146926-c627a92ad1ab",
  },
  {
    id: 5,
    title: "Cozy Apartment",
    category: "Residential",
    img: "1577412647305-991150c7d163",
  },
  {
    id: 6,
    title: "Modern Museum",
    category: "Public",
    img: "1554469384-e58fac16e23a",
  },
  {
    id: 7,
    title: "Executive Desk",
    category: "Office",
    img: "1493663284031-b733aefaa834",
  },
  {
    id: 8,
    title: "Luxury House",
    category: "Residential",
    img: "1524758631624-e2822e304c36",
  },
  {
    id: 9,
    title: "City Library",
    category: "Public",
    img: "1586023492125-27c2c044fd75",
  },
  {
    id: 10,
    title: "Tech Office",
    category: "Office",
    img: "1616486338812-4d7442a84c73",
  },
  {
    id: 11,
    title: "Family Home",
    category: "Residential",
    img: "1600607687939-ce8a6c25118c",
  },
  {
    id: 12,
    title: "Art Gallery",
    category: "Public",
    img: "1615873968403-89e06862a202",
  },
].map((p) => ({
  ...p,
  image: `https://images.unsplash.com/photo-${p.img}?w=800&q=80`,
}));

const tabs = ["All", "Office", "Residential", "Public"];

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // ফিল্টার লজিক
  const filteredProjects = useMemo(() => {
    return activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // ফিল্টার চেঞ্জ হলে কাউন্ট রিসেট
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wider text-center uppercase ">
            Our Works
          </h2>
          <div className="w-40 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-2 transition-all ${activeTab === tab ? "border-b-2 border-black font-bold" : "text-gray-400 hover:text-black"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative h-[300px] overflow-hidden group cursor-pointer shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-yellow-500 text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-10 py-3 bg-black text-white hover:bg-yellow-500 transition-all"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
