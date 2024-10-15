import React from "react";
import { Button } from "./ui/button";
import  Link  from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export default async function UserButtonCom() {
    const {getUser} = getKindeServerSession();
  const user = await getUser();
  return (
    <>
  <div className="">
            {user ? (
          <UserNav
            email={user.email as string}
            name={user.given_name as string}
            userImage={user.picture as string}
            user={user as unknown as string}
          />
        ) : (
          <div className="flex items-center gap-x-2">
            <Button asChild>
              <RegisterLink>تسجيل</RegisterLink>
            </Button>
          </div>
        )}
  </div>
    </>
  )
}
