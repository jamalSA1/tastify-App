import { Card } from " /components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from " /db/index";
import { SettingsForm } from " /components/form/SettingsForm";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  const data = await prisma.userTastify.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
    },
  });

  return data;
}

export default async function SetttingsPage() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user.username);
  
  if (!user) {
    throw new Error("Not Authorized");
  }

  const data = await getData(user.id);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <SettingsForm
          firstName={data?.firstName as string}
          lastName={data?.lastName as string}
          email={user.email as string}
        />
      </Card>
    </section>
  );
}