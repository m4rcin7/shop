"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/CartContext";
import type { Picture } from "@/types/Picture";

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);
  const { cart } = useCart();

  const totalItems: number = cart.reduce<number>(
    (sum: number, item: Picture) => sum + (item.quantity ?? 1),
    0
  );

  return (
    <header className="w-full bg-[#1a1a2e] shadow-md fixed top-0 left-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto text-white">
        <Link
          href="/"
          className="text-4xl font-bold hover:scale-110 transition"
        >
          <FaPaintBrush className="text-purple-400" />
        </Link>
        <ul className="flex items-center gap-8 text-lg">
          {["Home", "About", "Pictures", "Contact"].map((name) => (
            <li key={name} className="relative group">
              <Link
                href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                className="px-4 py-2 rounded-lg transition-all duration-300 group-hover:text-purple-400"
              >
                {name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="relative">
          <Link
            href="/cart"
            className="text-3xl font-bold hover:scale-110 transition relative"
          >
            <MdOutlineLocalGroceryStore className="text-purple-400" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex flex-col px-6 py-4 bg-[#1a1a2e] shadow-md">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-4xl font-bold hover:scale-110 transition"
          >
            <FaPaintBrush className="text-purple-400" />
          </Link>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Link
                href="/cart"
                className="text-3xl font-bold hover:scale-110 transition relative"
              >
                <MdOutlineLocalGroceryStore className="text-purple-400" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Hamburger */}
            <TbMenuDeep
              onClick={() => setNavMobile(!navMobile)}
              className="text-4xl cursor-pointer text-purple-400 hover:scale-110 transition"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navMobile && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              {["Home", "About", "Pictures", "Contact"].map((name) => (
                <li key={name}>
                  <Link
                    href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                    className="block px-6 py-2 rounded-lg transition-all duration-300 text-white hover:bg-purple-400 hover:text-white"
                    onClick={() => setNavMobile(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
