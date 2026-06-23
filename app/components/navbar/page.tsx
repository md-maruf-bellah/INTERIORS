"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "./../../../public/logo.png";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    // { name: "OUR CLIENTS", path: "/clients" },
    { name: "CONTACT", path: "/contact" },
  ];
  return (
    <div>
      <header className="absolute top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8">
        <div className="flex items-center gap-0">
          <div>
            <Image
              src={logo}
              alt="Imagine Interiors logo"
              width={50}
              height={50}
            />
          </div>
          <div className="text-xs font-bold tracking-widest">
            <span className="" style={{ fontSize: "16px" }}>
              {" "}
              IMAGINE
            </span>
            <br />
            <span style={{ fontSize: "12px" }}> INTERIORS</span>
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-[10px] font-bold tracking-[0.2em]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="hover:text-gray-400 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </header>
    </div>
  );
};

export default NavbarPage;
