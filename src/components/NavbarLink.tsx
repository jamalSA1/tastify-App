'use client'
import { cn } from " /lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navbarLinks = [
  {
    id: 1,
    name: "All Products",
    href: "/",
  },
  {
    id: 1,
    name: "Templates",
    href: "#",
  },
  {
    id: 2,
    name: "Ui Kits",
    href: "#",
  },
  {
    id: 3,
    name: "Icons",
    href: "#",
  },
];


export default function NavbarLink() {
  const location = usePathname();

  return (
    <div className="flex justify-center items-center sm:col-span-6 gap-x-2">
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "bg-orange-500 opacity-90 rounded-full text-white shadow-md"
              : "hover:bg-muted hover:bg-opacity-75",
            "group flex items-center px-2 py-2 font-medium rounded-full text-md"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
