"use client";

import Section from "@/components/Section";
import Image from "next/image";
import aboutImg from "@/images/aboutImg.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section title="About Me" className="relative text-center">
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-32">
        
        <motion.div
          className="max-w-lg p-8 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-white shadow-xl dark:shadow-md rounded-3xl relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-pink-600 dark:text-pink-400">
            Creativity is my passion
          </h2>
          <p className="leading-loose">
            I am an avid art enthusiast with a deep appreciation for both
            classical and contemporary works. My passion for art began at an
            early age, inspired by visits to local galleries and museums. Over
            the years, I have developed a keen eye for detail and a strong
            understanding of various artistic techniques and styles.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-6 left-6 w-[320px] h-[420px] bg-pink-400 dark:bg-purple-700 rounded-3xl blur-xl opacity-50"></div>

          <Image
            className="w-[300px] lg:w-[350px] h-auto shadow-2xl rounded-3xl transition-transform duration-300 hover:rotate-2"
            src={aboutImg}
            alt="About me image"
          />
        </motion.div>
      </div>
    </Section>
  );
}
