'use client';

import React, { useState } from "react";
import NavLink from "./NavLink";

import { motion } from "framer-motion";

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
    path: "/projects",
  },
  {
    title: "Educations",
    path: "#educations",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const topVariants={
    closed:{
      rotate:0,
    },
    opened:{
      rotate:45,
      backgroundColor:"rgb(255,255,255)",
    }
  };

  const centerVariants={
    closed:{
      rotate:1,
    },
    opened:{
      opacity:0,
    }
  };

  const bottomVariants={
    closed:{
      rotate:0,
    },
    opened:{
      rotate:-45,
      backgroundColor:"rgb(255,255,255)",
    }
  };

  const ListVariants = {
    closed:{
      x:"100vw",
    },
    opened:{
      x:0,
      when:"beforeChildren",
      transition:{staggerChildren:0.2},
    }
  }

  const ListItemsVariants = {
    closed:{
      x:-10,
      opacity:0,
    },
    opened:{
      x:0,
      opacity:1,
    }
  }

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
          <motion.div variants={topVariants} animate={navbarOpen ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={navbarOpen ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div variants={bottomVariants} animate={navbarOpen ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
        </button>

        {navbarOpen && (
          <motion.div variants={ListVariants} initial='closed' animate='opened' className="absolute top-0 right-0 h-screen w-screen bg-black text-white flex flex-col items-center gap-8 text-4xl z-40">
            {navLinks.map((link, index) => (
              <motion.div variants={ListItemsVariants} className="" key={index}>
                <NavLink href={link.path} title={link.title} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
