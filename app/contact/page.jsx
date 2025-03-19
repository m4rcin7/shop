"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 1000);
  };

  return (
    <Section title="Get in Touch" className="max-w-3xl">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            required
            className="p-3 bg-white/20 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-3 bg-white/20 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Message"
            rows={4}
            required
            className="p-3 bg-white/20 rounded-md outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-6 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-bold transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-10 text-center text-white">
        <p className="flex items-center justify-center gap-2">
          <FaPhoneAlt /> +48 123 456 789
        </p>
        <p className="flex items-center justify-center gap-2 mt-2">
          <FaEnvelope /> example@email.com
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            className="text-3xl text-pink-400 hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-3xl text-pink-400 hover:text-white transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Success Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-pink-500">
                Message Sent!
              </h3>
              <p className="text-gray-700 mt-2">
                We will get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
