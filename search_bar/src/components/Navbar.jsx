"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="text-black  bg-white md:shadow-md p-4 flex items-center justify-between mb-2 sticky top-0 z-50">
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/navigation-67/32/Burger_hamburger_menu-1024.png"
            alt="Menu"
            className="w-8 h-8 cursor-pointer"
          />
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 transition-all duration-300 ease-in ${
          navbar ? "block" : "hidden"
        } md:flex`}
      >
        <li>
          <Link href="/" className="block py-2 md:py-0 hover:text-green-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="block py-2 md:py-0 hover:text-green-600">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 md:py-0 hover:text-green-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="block py-2 md:py-0 hover:text-green-600">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
