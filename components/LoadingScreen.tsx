"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#1a1a2e] z-50"
        >
          <FaSpinner className="text-pink-500 dark:text-purple-400 text-6xl animate-spin" />
          <p className="mt-4 text-lg text-gray-900 dark:text-white">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
