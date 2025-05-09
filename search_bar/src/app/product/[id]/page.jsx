import React from 'react';
import products from '../../../data';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Page = async ({ params }) => {
  const awaitedParams = await params;
  const { id } = awaitedParams;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className="text-center text-red-600 font-semibold mt-10">Product not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className='w-screen bg-white h-screen'>
    <div className="max-w-4xl my-2  mx-auto p-6 bg-white rounded-lg shadow-green-200 shadow-l">
      <h1 className="text-4xl font-extrabold mb-10 text-emerald-950 text-center  ">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="  shadow-lg  shadow-emerald-400"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center text-black">
          <p className="text-green-700 font-bold text-2xl mb-3">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 italic mb-5">{product.category}</p>
          <p className="text-gray-800 leading-relaxed">{product.description || 'No description available.'}</p>
        </div>
     
      </div>
    </div>
</div>

    
    </>
  );
};

export default Page;

