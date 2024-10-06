import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import colaProduct from 'public/cola.png'
import React from "react";
import { ProductCard } from './product-card';

export default function Products() {

  const product = {
    id: '1',
    name: 'cole',
    price: 10.00,
    image: colaProduct.src,
    rating: 4.3,
    category: 'juc',
    description: 'cola'
  }

  return <>
  {/* <div className='pt-8 flex items-center justify-center flex-wrap gap-5 w-[100%] h-52 text-end'>
    <Link href='/' className="bg-white w-40 shadow-lg rounded-xl pb-2">
      <div className='grid place-items-center  py-2 h-32'>
      <Image src={colaProduct.src} alt="product" width={90} height={40} />
      </div>
      {/* <p className='font-medium text-sm text-gray-900 w-40 p-2 ltr overflow-hidden text-nowrap text-end'>حمال علي المالكي بتتعلم</p> */}
      {/* <div className="pr-2 flex justify-between items-center">
      <div className="bg-orange-700 rounded-full ml-2 p-0.5">
      <ArrowLeft width={20} height={20} color='white'/>
      </div>
      <p className='font-bold'>10.00sr</p>
      </div>
  </div> */}

    <ProductCard products={[product]}/>
    <ProductCard products={[product]}/>
    <ProductCard products={[product]}/>
    </>
}

// bg-orange-200/70 rounded-xl shadow-sm