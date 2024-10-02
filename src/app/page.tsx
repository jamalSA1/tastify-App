
import MaxWidthWrapper from " /components/MaxWidthWrapper";
import SideBar from " /components/SideBar";
import { HydrateClient } from " /trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <div className="flex justify-between items-center flex-col bg-[#FDF4EF]">
        <SideBar />
        <MaxWidthWrapper>
        <div className="lg:mt-[80px] mt-[120px] h-[1800px]">hi</div>
        </MaxWidthWrapper>
        </div>
    </HydrateClient>
  );
}
