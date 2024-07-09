"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center bg-gray-100 p-3 px-5 justify-between relative z-10">
      <div className="flex items-center">
        <p className="font-bold text-xl">Navbar</p>
        <ul className="hidden md:flex ml-10 p-1">
          <Link href="/">
            <li
              className={`mr-3 ${pathname === "/" ? "text-red-300" : "text-black"} cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${pathname === "/about" ? "text-red-300" : "text-black"} cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/products">
            <li
              className={`mr-3 ${pathname === "/products" ? "text-red-300" : "text-black"} cursor-pointer`}
            >
              Produk
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-1">
        <button
          className="rounded-lg cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login <span>|</span>
        </button>
        <button
          className="rounded-lg cursor-pointer"
          onClick={() => signIn()}
        >
          Signin <span>|</span>
        </button>
        <TiShoppingCart className="mt-1" size={25} />
        <button
          className="md:hidden text-2xl z-20"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
      {nav && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-100 p-3 z-10">
          <ul className="flex flex-col items-center">
            <Link href="/">
              <li
                className={`mb-3 ${pathname === "/" ? "text-red-300" : "text-black"} cursor-pointer`}
                onClick={() => setNav(false)}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`mb-3 ${pathname === "/about" ? "text-red-300" : "text-black"} cursor-pointer`}
                onClick={() => setNav(false)}
              >
                About
              </li>
            </Link>
            <Link href="/products">
              <li
                className={`mb-3 ${pathname === "/products" ? "text-red-300" : "text-black"} cursor-pointer`}
                onClick={() => setNav(false)}
              >
                Produk
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
