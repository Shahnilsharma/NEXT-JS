"use client";

import products from "../../data";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar"; // fixed path

export default function ProductsPage() {
  return (
    <>
      <Navbar /> {/* now inside return */}

      <div className="p-4 text-black bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
