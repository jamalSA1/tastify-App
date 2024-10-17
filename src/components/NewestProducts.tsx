import Link from "next/link";
import db from " /db/index";
import { ProductCard } from "./ProductCard";

async function getData() {
  const data = await db.product.findMany({
    select: {
      price: true,
      details: true,
      category: true,
      name: true,
      id: true,
      image: true,
    },
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export async function NewestProducts() {
  const data = await getData();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
      <div className="md:flex md:items-center md:justify-between w-full">
        <h2 className="text-2xl font-extrabold tracking-tighter ">
          Newest Products
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
        {data.map((product) => (
          <ProductCard
            images={product.image}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}