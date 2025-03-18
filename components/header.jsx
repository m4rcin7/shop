"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg fixed top-0 left-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center px-auto py-2 text-white max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="text-4xl font-bold text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          <FaPaintBrush />
        </Link>
        <ul className="flex items-center gap-10 text-lg">
          {["Home", "About Me", "Pictures", "Contact"].map((name) => (
            <li key={name}>
              <Link
                href={`/${name.toLowerCase().replace(" ", "")}`}
                className="px-auto py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/store"
          className="text-3xl font-bold text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          <MdOutlineLocalGroceryStore />
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex flex-col px-6 py-2 text-white bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-4xl font-bold text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <FaPaintBrush />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/store"
              className="text-3xl font-bold text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <MdOutlineLocalGroceryStore />
            </Link>
            <TbMenuDeep
              onClick={() => setNavMobile(!navMobile)}
              className="text-4xl cursor-pointer hover:text-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            navMobile ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } flex flex-col items-center gap-6 mt-4 overflow-hidden transition-all duration-500`}
        >
          {["Home", "About Me", "Pictures", "Contact"].map((name) => (
            <li key={name}>
              <Link
                href={`/${name.toLowerCase().replace(" ", "")}`}
                className="px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
