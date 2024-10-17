import { Button } from " /components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from " /components/ui/carousel";
import { Skeleton } from " /components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface iAppProps {
  images: string[];
  name: string;
  price: number;
  id: string;
}

export function ProductCard({
  images,
  id,
  price,
  name,
}: iAppProps) {
  return (
    <div className="rounded-lg">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[200px]">
                <Image
                  alt="Product image"
                  src={item}
                  fill
                  className="object-cover w-full h-full rounded-lg"
                  />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl overflow-hidden h-[30px] w-[50%]">{name}</h1>
        <h3 className="inline-flex items-center rounded-md bg-none px-2 py-1 md:px-0 text-xs font-medium text-zinc-950 text-right">
          {price}.00 SAR
        </h3>
      </div>

      <Button asChild className="w-full mt-5">
        <Link href={`/product/${id}`}>Learn More!</Link>
      </Button>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[230px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="w-full h-6" />
      </div>

      <Skeleton className="w-full h-10 mt-5" />
    </div>
  );
}