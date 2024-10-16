import Link from "next/link";
import UserButtonCom from "./UserButton";
import NavbarSearch from "./NavbarSearch";

export function Navbar() {
  return (
    <nav className="fixed bg-white border-b border-gray-100 flex justify-between max-w-7xl w-full items-center px-4 md:px-20 mx-auto py-3 z-99999">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-black">
            TASTIFY<span className="text-orange-600">food</span>
          </h1>
        </Link>
      </div>
      <div className="items-center">
        <NavbarSearch />
      </div>
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
          <UserButtonCom />
      </div>
    </nav>
  );
}