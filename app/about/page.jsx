"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <Section title="About Me" className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-200 leading-relaxed"
        >
          Hello! I'm an artist passionate about transforming emotions into
          visual stories. My journey started with a simple brush and grew into a
          lifelong dedication to expressing creativity through vibrant colors
          and unique compositions.
        </motion.p>
      </Section>

      <Section title="Achievements" className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "10+ Years of Experience",
              desc: "Creating artwork for over a decade.",
            },
            {
              title: "1000+ Artworks Sold",
              desc: "Bringing joy to collectors worldwide.",
            },
            {
              title: "Featured in Art Magazines",
              desc: "Recognized in top art publications.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-pink-400">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
