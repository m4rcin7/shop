import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Painting Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-pink-600 to-pink-800 text-white p-6 lg:p-8 rounded-2xl shadow-2xl shadow-pink-200/50 flex flex-col items-center`}
      >
        <Header />
        <main className="w-full flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}