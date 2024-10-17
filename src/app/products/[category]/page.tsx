import { ProductCard } from " /components/ProductCard";
import db from " /db/index";
import { type categoryType } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import NavbarLink from " /components/NavbarLink";

async function getData(category: string) {
  let input;

  switch (category) {
    case "juice": {
      input = "juice";
      break;
    }
    case "milk": {
      input = "milk";
      break;
    }
    case "candie": {
      input = "candie";
      break;
    }
    case "all": {
      input = redirect("/");
      break;
    }
    default: {
      return notFound();
    }
  }

  const data = await db.product.findMany({
    where: {
      category: input as categoryType,
    },
    select: {
      id: true,
      image: true,
      details: true,
      name: true,
      price: true,
    },
  });

  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  noStore();
  const data = await getData(params.category);
  return (
    <>
    <NavbarLink />
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
      
      <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
        {data.map((product) => (
          <ProductCard
          key={product.id}
          images={product.image}
          price={product.price}
          name={product.name}
          id={product.id}
          />
        ))}
      </div>
    </section>
    </>
  );
}