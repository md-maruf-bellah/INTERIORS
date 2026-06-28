"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { allProjects } from "./AllProject";

export default function PortfolioPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const categories = [
    "All",
    "Office Interior",
    "Home Interior",
    "Restaurant Interior",
    "Office Interiors",
    "Restaurant Interiors",
  ];

  const filtered = useMemo(
    () =>
      filter === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <main className="bg-white">
      {/* 1. Premium Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden mb-20">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Portfolio Hero"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h3 className="tracking-[0.4em] uppercase text-sm font-light mb-4">
            Crafting Excellence
          </h3>
          <h1 className="text-5xl md:text-7xl font-extralight">Our Work</h1>
          <div className="w-20 h-[1px] bg-white mt-8"></div>
        </div>
      </section>

      {/* 2. Portfolio Grid Section */}
      <section className="py-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="w-full flex overflow-x-auto gap-4 mb-16 pb-4 px-4 scrollbar-hide justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(9);
              }}
              className={`px-6 py-3 text-xs font-bold uppercase transition-all duration-300 border whitespace-nowrap cursor-pointer ${
                filter === cat
                  ? "border-black text-black bg-gray-50"
                  : "border-gray-200 text-gray-400 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {filtered.slice(0, visibleCount).map((p) => (
            <div
              key={p.id}
              onClick={() => router.push(`/portfolio/${p.id}`)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={p.thumbnail}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt={p.title}
                />
              </div>
              <p className="text-amber-600 text-[10px] tracking-widest font-bold uppercase mb-1">
                {p.category}
              </p>
              <h3 className="font-light text-xl text-gray-800">{p.title}</h3>
            </div>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <button
            onClick={() => setVisibleCount((v) => v + 9)}
            className="block mx-auto mt-20 px-12 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            LOAD MORE
          </button>
        )}
      </section>
    </main>
  );
}
