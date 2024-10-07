import { ArrowLeft, LucideBookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import colaProduct from 'public/cola.png'
import React from "react";

export default function Products() {

  return <>
  <div className="flex justify-around flex-wrap pt-5 text-right">

  <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5">
    <div className="grid place-items-center">
    <img src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4" />
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">Catogry</span>
    </div>
    <h2 className="text-lg font-semibold">Regular Fit Linen-blend</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">169.00</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5">
    <div className="grid place-items-center">
    <img src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4" />
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">Catogry</span>
    </div>
    <h2 className="text-lg font-semibold">Regular Fit Linen-blend</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">169.00</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5">
    <div className="grid place-items-center">
    <img src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4" />
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">Catogry</span>
    </div>
    <h2 className="text-lg font-semibold">Regular Fit Linen-blend</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">169.00</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5">
    <div className="grid place-items-center">
    <img src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4" />
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">Catogry</span>
    </div>
    <h2 className="text-lg font-semibold">Regular Fit Linen-blend</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">169.00</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5">
    <div className="grid place-items-center">
    <img src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4" />
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">Catogry</span>
    </div>
    <h2 className="text-lg font-semibold">Regular Fit Linen-blend</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">169.00</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4 w-52 mt-5">
    <div className="grid place-items-center">
    <img src={colaProduct.src} alt="Regular Fit Linen-blend T-shirt" className=" rounded-md mb-4" />
    </div>
    <div className="flex justify-between items-center mb-2">
        <button className="ml-2 text-gray-400 hover:text-orange-600">
          <LucideBookmark className="h-6 w-6" />
        </button>
      <span className="text-gray-500 text-sm">Catogry</span>
    </div>
    <h2 className="text-lg font-semibold">Regular Fit Linen-blend</h2>
    <div className="flex justify-end items-center gap-1">
    <p className="text-gray-600">169.00</p>
    <span className="text-gray-500 text-[10px] mt-1.5">SAR</span>
    </div>
  </div>

  
</div>

    </>
}

// bg-orange-200/70 rounded-xl shadow-sm