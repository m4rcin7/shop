"use client";

import Image from "next/image";
import Section from "@/components/Section";
import PICTURE_DATA from "../../API_DATA/data";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";

export default function Pictures() {
  const { addToCart } = useCart();

  return (
    <Section title="Art Gallery" className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PICTURE_DATA.map((picture) => (
          <motion.div
            key={picture.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-md flex flex-col items-center text-center"
          >
            <Image
              src={picture.img}
              alt={picture.title}
              className="rounded-lg mb-4 object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold text-white mb-2">
              {picture.title}
            </h3>
            <p className="text-lg text-pink-400 font-semibold">
              {picture.price} $
            </p>
            <button
              onClick={() => addToCart(picture)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
