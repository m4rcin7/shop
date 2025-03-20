"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          Discover My Art
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          A journey through colors, emotions, and imagination. Explore unique
          paintings and creative expressions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 mt-8"
      >
        <Link
          href="/pictures"
          className="px-8 py-3 text-lg font-medium uppercase rounded-lg bg-white text-pink-700 shadow-md shadow-pink-500/30 hover:bg-pink-600 hover:text-white transition-all duration-300"
        >
          Explore Gallery
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-20 right-10 text-lg font-semibold bg-white/20 px-6 py-2 rounded-lg backdrop-blur-md shadow-md shadow-pink-500/20"
      >
        Feel the Art, Live the Imagination
      </motion.div>
    </div>
  );
}
