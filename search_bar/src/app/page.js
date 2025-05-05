"use client";

import { useState } from "react";
import products from "../data";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  // State to track the selected product category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State to track the current search query for filtering by product name
  const [searchQuery, setSearchQuery] = useState("");

  // List of product categories including "All" for no category filter
  const categories = ["All", "Accessories", "Clothing", "Stationery"];

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 text-black bg-gray-100 min-h-screen">
      {/* Search bar input for filtering products by name */}
      <div className="flex mx-2.5 mb-4 border-gray-600 max-w-1/4  border rounded-xl p-2">
       <img src="/search.jpg" className="size-6.5 my-2" ></img>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded w-80 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Category filter buttons */}
      <nav className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Grid of product cards filtered by category and search */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
