import React from 'react';
import products from '../../../data';
import Image from 'next/image';

const Page = ({ params }) => {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <p className="text-green-700 font-bold text-xl mb-2">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.category}</p>
          <p>{product.description || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

