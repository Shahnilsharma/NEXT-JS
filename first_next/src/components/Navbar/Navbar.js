"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-3 py-4 sm:flex  sm:justify-between">
      <div className="flex items-center justify-between mx-10">
        {/* Logo & Title */}
        <a href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Company Logo"
            width={60}
            height={60}
          />
          <span className="font-bold text-xl">360Xpert Solutions</span>
        </a>

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
        >
          <Image
            src={menuOpen ? "/images/close.svg" : "/images/hamb.svg"}
            alt="Toggle Menu"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="mx-10" >
      <ul className="hidden sm:flex space-x-6 mt-4 sm:px-1 sm:justify-center sm:align-top">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
      </div>
     
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="sm:hidden mt-4 bg-white text-black p-4 rounded-lg space-y-2">
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
