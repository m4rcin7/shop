import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

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
        className={`${inter.className} bg-gradient-to-br from-slate-500 to-stone-800 text-white p-6 lg:p-8 rounded-2xl shadow-2xl shadow-pink-200/50 flex flex-col items-center`}
      >
        <LoadingScreen /> {/* Dodane tutaj */}
        <Header />
        <main className="my-12 mb-12 w-full flex-grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
