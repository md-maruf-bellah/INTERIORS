"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icon import করা হয়েছে
import logo from "./../../../public/logo.png";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="relative">
      <header className="absolute top-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 text-white">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="Imagine Interiors logo"
            width={50}
            height={50}
          />
          <div className="font-bold tracking-widest">
            <span className="block text-[16px]">IMAGINE</span>
            <span className="block text-[12px]">INTERIORS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-[10px] font-bold tracking-[0.2em]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 z-50 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </header>

      {/* Mobile Menu (Overlay) */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-light tracking-widest hover:text-gray-400 transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavbarPage;
