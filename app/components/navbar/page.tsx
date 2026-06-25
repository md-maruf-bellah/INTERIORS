"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "./../../../public/logo.png";
import Link from "next/link";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রল ইভেন্ট লিসেনার
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "SERVICES",
      subLinks: [
        { name: "INTERIOR DESIGN", path: "/service/our-team" },
        { name: "EXTERIOR DESIGN", path: "/service/our-story" },
        { name: "CUSTOM FURNITURE DESIGN", path: "/service/career" },
      ],
    },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="relative">
      <header
        className={`fixed top-0 w-full  mx-auto z-50 flex items-center justify-between px-6 md:px-10 py-2 text-white transition-all duration-300 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <Link href={"/"} className="flex items-center gap-0">
          <Image src={logo} alt="Logo" width={53} height={53} />
          <div className="font-bold tracking-widest">
            <span className="block text-[16px]">IMAGINE</span>
            <span className="block text-[12px]">INTERIORS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8 text-sm tracking-[0.2em]">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group h-16 flex items-center"
              >
                {link.subLinks ? (
                  <div className="flex items-center cursor-pointer hover:text-gray-400">
                    {link.name}
                    <ChevronDown
                      size={16}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-300"
                    />

                    <div className="absolute top-full left-0 pt-0 w-68 hidden group-hover:block">
                      <div className="bg-black/90 backdrop-blur-md p-4 shadow-lg border-t-1 border-gray-700">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block py-2 hover:text-gray-400 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
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

      {/* Mobile Menu ... (বাকি কোড একই থাকবে) */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 transition-all ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <div key={link.name} className="text-center">
            {link.subLinks ? (
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="text-2xl tracking-widest flex items-center hover:text-gray-400"
              >
                {link.name}
                <ChevronDown
                  className={`ml-2 transition-transform ${isSubMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
            ) : (
              <a
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl tracking-widest hover:text-gray-400"
              >
                {link.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarPage;
