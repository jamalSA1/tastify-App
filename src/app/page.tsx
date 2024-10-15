
import MaxWidthWrapper from " /components/MaxWidthWrapper";
import Products from " /components/Products";
import {Navbar} from " /components/Navbar";
import { HydrateClient } from " /trpc/server";
import NavbarLink from " /components/NavbarLink";
import { NewestProducts } from " /components/NewestProducts";


export default async function Home() {

  return (
    <HydrateClient>
      <div className="flex justify-between items-center flex-col">
        <div className="mt-[20px] h-[1800px]">

            <NavbarLink />
          <NewestProducts />

        </div>
        
        </div>
    </HydrateClient>
  );
}
