"use client";

import Section from "@/components/Section";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useCart();

  return (
    <Section title="Cart" className="text-center">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-300">Your cart is empty! 🫤</p>
          <Link
            href="/pictures"
            className="text-green-300 underline font-extrabold
"
          >
            🎨Check Pictures 🔎
          </Link>
        </div>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-center items-center bg-white/10 p-4 gap-[20px] rounded-lg shadow-lg backdrop-blur-md"
            >
              <span className="text-white capitalize">{item.title}</span>
              <span>{item.quantity} quantity</span>
              <span>{item.price} $</span>
              <button
                onClick={() => addToCart(item)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg transition-transform hover:scale-105"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg transition-transform hover:scale-105"
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
