import db from " /db/index";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error('Invalid user data')
  }

  let dbUser = await db.userTastify.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {

    dbUser = await db.userTastify.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        connectedAccountId: "",
      },
    });
  }

  return { success: true }
}