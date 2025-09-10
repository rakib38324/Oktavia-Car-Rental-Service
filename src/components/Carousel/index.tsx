/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ cars }: { cars: any[] }) {
  const [current, setCurrent] = useState(0);

  // Auto play every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cars.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [cars.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-400">
        <div className="relative w-full h-64 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={cars[current].name}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={cars[current].img}
                alt={cars[current].name}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">{cars[current].name}</h3>
          <p className="text-sm text-gray-500">{cars[current].subtitle}</p>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-3 gap-2">
        {cars.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${
              idx === current ? "bg-indigo-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
