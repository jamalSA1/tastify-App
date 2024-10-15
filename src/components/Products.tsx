import db from ' /db';
import { ArrowLeft, LucideBookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import colaProduct from 'public/cola.png'
import React from "react";

export default async function Products() {
  const product = await db.product.findMany();

  return <>
  <div className="flex justify-around flex-wrap pt-5 text-right">
    {product.map((product) => (
      <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5" key={product.id}>
    <div className="grid place-items-center">
    <Image src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4"  width={50} height={50}/>
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">{product.category}</span>
    </div>
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">{product.price}</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>
    ))}
</div>

    </>
}

// bg-orange-200/70 rounded-xl shadow-sm