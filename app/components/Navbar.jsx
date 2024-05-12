'use client';

import React, { useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Experiences",
    path: "#experiences",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Educations",
    path: "#educations",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl mt-10">
      <div className="hidden md:flex gap-4 text-black">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link} />
        ))}
      </div>
      
      <div className="hidden md:flex gap-4">
        <button
          className="w-15 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setNavbarOpen(prev => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded origin-left"></div>
          <div className="w-10 h-1 bg-white rounded origin-left"></div>
          <div className="w-10 h-1 bg-white rounded origin-left"></div>
        </button>

        {navbarOpen && (
          <div className="absolute top-0 right-0 h-screen w-screen bg-black text-white flex flex-col items-center gap-8 text-4xl z-40">
            {navLinks.map((link, index) => (
              <div className="" key={index}>
                <NavLink href={link.path} title={link.title} />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
