import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Painting Shop",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full bg-gradient-to-br from-slate-500 to-stone-800 text-white rounded-2xl shadow-2xl shadow-pink-200/50 flex flex-col items-center`}
      >
        <LoadingScreen />
        <CartProvider>
          <Header />
          <main className="my-12 mb-12 w-full h-full flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
