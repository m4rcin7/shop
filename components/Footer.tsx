"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a2e] shadow-md bottom-0 left-0 z-50 text-white py-6 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Painting Shop</h2>
          <p className="text-sm opacity-80">© 2025 All Rights Reserved.</p>
        </div>
        <nav className="flex space-x-6 text-sm">
          {["Home", "Pictures", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:underline hover:text-gray-200 transition"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-4">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedin].map(
            (Icon, idx) => (
              <Icon
                key={idx}
                className="w-6 h-6 hover:text-gray-300 transition cursor-pointer"
              />
            )
          )}
        </div>
      </div>
    </footer>
  );
}
