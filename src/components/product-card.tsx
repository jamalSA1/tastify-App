'use client'

import Image from "next/image"
import { Star, ShoppingCart, Badge, ArrowLeft } from "lucide-react"
import { Button } from " /components/ui/button"
import { Card, CardContent, CardFooter } from " /components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  rating: number
  category: string
  description: string
}

export function ProductCard({products}: {products: ProductCardProps[]} = { products: [{ // تعديل هنا
  id: "1",
  name: "Sample Product",
  price: 19.99,
  image: "/placeholder.svg?height=200&width=200",
  rating: 4.5,
  category: 'jjj',
  description: '' // إضافة خاصية الوصف
}] }) {
  return (
    <div className="pt-8 flex items-center justify-center flex-wrap gap-5 w-[100%] -mx-2 rtl">
  {products.map((product) => (
    <div key={product.id} className="md:w-[50%] sm:w-1/2 lg:w-[50%] p-2">
      <Card className="w-full h-full overflow-hidden transition-shadow hover:shadow-lg">
        <div className="flex p-4 h-full">
          {/* المحتوى أولاً */}
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <CardContent className="p-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="mr-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold line-clamp-1 text-right">{product.name}</h3>
                  <p className="mt-1 text-right">{product.category}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2 text-right">{product.description}</p>
              {/* <p className="text-lg font-bold text-right">${product.price.toFixed(2)}</p> */}
            </CardContent>
            <CardFooter className="p-0 mt-2">
                <div className="flex items-center justify-between space-x-4 space-x-reverse w-full gap-10">
                <Button 
                  className="w-full"
                  size="sm"
                >
                  <ArrowLeft className="ml-2 h-4 w-4" />
                  مشاهدة المنتج
                </Button>
                <div className="flex gap-1 justify-center items-center">
                <p className="text-lg font-bold">{product.price.toFixed(2)}</p>
                <span className="text-sm text-gray-600 mt-2">SR</span>
                </div>
              </div>
            </CardFooter>
          </div>
          {/* الصورة في اليمين */}
          <div className="grid place-items-center w-24 h-24 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              width={84}
              height={40}
              objectFit="cover"
              className="rounded-md transition-transform hover:scale-105"
            />
          </div>
        </div>
      </Card>
    </div>
  ))}
</div>

  )
}