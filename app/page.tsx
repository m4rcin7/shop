"use client";
import Image from "next/image";
import homeImg from "@/images/teddy-ai.jpg";
import H2 from "@/components/H2.jsx";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const links = useMemo(
    () => [
      { name: "Nature", path: "/pictures" },
      { name: "Animals", path: "/pictures" },
      { name: "Flowers", path: "/pictures" },
      { name: "Abstract", path: "/pictures" },
      { name: "Fantasies", path: "/pictures" },
    ],
    []
  );

  return (
    <div className="w-full mx-auto py-20 relative flex flex-col items-center space-y-12">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10 w-full h-full opacity-40 bg-black">
        <Image
          className="object-cover w-full h-full"
          src={homeImg}
          alt="Artistic Background"
          priority
          layout="fill"
        />
      </div>

      {/* Welcome Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center tracking-wide text-white drop-shadow-lg"
      >
        Welcome to My Art World
      </motion.h1>

      {/* Image and Artistic Journey Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 w-full bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg shadow-pink-500/20"
      >
        <div className="w-full md:w-1/2 text-left md:text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            My Artistic Journey
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Painting is more than just a passion—it's a way to bring emotions
            and imagination to life. Every color tells a story, and each
            brushstroke captures a moment of inspiration. Whether it's nature,
            animals, or abstract art, my goal is to create pieces that
            resonate with emotions and bring joy to others.
          </p>
        </div>
      </motion.div>

      {/* Explore Themes Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full text-center"
      >
        <H2>Explore My Themes</H2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {links.map(({ name, path }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href={path}
                className="px-6 py-3 text-lg font-medium uppercase rounded-lg border border-white/50 text-white bg-white/20 backdrop-blur-md hover:bg-white/50 hover:text-pink-800 shadow-md shadow-pink-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}