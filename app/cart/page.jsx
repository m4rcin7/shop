"use client";

import Section from "@/components/Section";
import { useCart } from "@/app/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <Section title="Cart" className="text-center">
      {cart.length === 0 ? (
        <p className="text-white">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-md"
            >
              <span className="text-white">
                {item.title} - {item.quantity} quantity
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg transition-transform hover:scale-105"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
