import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            CompanyLogo
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/employees">
            Employees
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

