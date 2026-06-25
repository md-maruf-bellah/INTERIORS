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
  ];

  const filtered = useMemo(
    () =>
      filter === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-20 my-20 bg-white">
      <h1 className="text-5xl font-light text-center mb-16 text-gray-500">
        OUR PORTFOLIO
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(9);
            }}
            className={`px-6 py-2 border text-black ${filter === cat ? "text-gray-500" : "hover:border-black"}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 ">
        {filtered.slice(0, visibleCount).map((p) => (
          <div
            key={p.id}
            onClick={() => router.push(`/portfolio/${p.id}`)}
            className="cursor-pointer group"
          >
            <img
              src={p.thumbnail}
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
            />
            <h3 className="mt-4 font-light text-lg text-gray-500">{p.title}</h3>
          </div>
        ))}
      </div>
      {visibleCount < filtered.length && (
        <button
          onClick={() => setVisibleCount((v) => v + 9)}
          className="block mx-auto mt-12 px-10 py-3 border text-gray-500 border-black hover:bg-black hover:text-white"
        >
          LOAD MORE
        </button>
      )}
    </section>
  );
}
