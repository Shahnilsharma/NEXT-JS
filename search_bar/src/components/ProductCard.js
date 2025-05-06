"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-2 max-w-xs w-full hover:shadow-lg transition-shadow">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full h-auto object-contain"
        />
        <h3 className="text-lg font-semibold text-black text-center">{product.name}</h3>
        <p className="text-green-700 font-bold">${product.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm">{product.category}</p>
      </div>
    </Link>
  );
}

