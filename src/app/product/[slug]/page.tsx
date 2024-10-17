// import { ProductDescription } from " /app/components/ProductDescription";
import db from " /db/index";
import { unstable_noStore as noStore } from "next/cache";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from " /components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

async function getData(id: string) {
  const data = await db.product.findUnique({
    where: {
      id: id,
    },
    select: {
      category: true,
      details: true,
      name: true,
      image: true,
      price: true,
      createdAt: true,
      id: true,
      userTastify: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  noStore();
  const data = await getData(params.slug);
  return (
    <section className="mx-auto px-4  lg:mt-10 max-w-7xl lg:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
      <div className="mt-3 md:hidden">
      <Link href='/' className="text-gray-500 border border-gray-300 px-5 rounded-md">Back</Link>
      </div>
      <Carousel className=" lg:row-end-1 lg:col-span-4">
        <CarouselContent>
          {data?.image.map((item, index) => (
            <CarouselItem key={index}>
              <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden mt-4">
                <Image
                  src={item as string}
                  alt="yoo"
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {data?.name}
        </h1>

        <p className="mt-2 text-muted-foreground">{data?.details}</p>

        <div className="border-t border-gray-200 mt-10 pt-10">
          <div className="grid grid-cols-2 w-full gap-y-3">
            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              price:
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.price}.00 SAR</h3>
              <h3 className="text-sm font-medium text-muted-foreground col-span-1">
                Category:
              </h3>
  
              <h3 className="text-sm font-medium col-span-1">{data?.category}</h3>
            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Released:
            </h3>
            <h3 className="text-sm font-medium col-span-1">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "long",
              }).format(data?.createdAt)}
            </h3>

          </div>
        </div>

        <div className="border-t border-gray-200 mt-10"></div>
      </div>

      {/* <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
        <ProductDescription content={data?.description as JSONContent} />
      </div> */}
    </section>
  );
}