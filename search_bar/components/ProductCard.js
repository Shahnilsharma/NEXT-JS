"use client";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-2 w-48">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-contain"
      />
      <h3 className="text-lg font-semibold text-black">{product.name}</h3>
      <p className="text-green-700 font-bold">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 text-sm">{product.category}</p>
    </div>
  );
}
