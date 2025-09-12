/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CustomerGalleryCarousel({ customers }: { customers: any[] }) {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % customers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [customers.length]);

  // Get 2 items per slide
  const getSlideItems = () => {
    const total = customers.length;
    const first = customers[current];
    const second = customers[(current + 1) % total];
    return [first, second];
  };

  const slideItems = getSlideItems();

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Happy Customers
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex justify-center items-start gap-6 overflow-hidden">

          {slideItems.map((customer) => (
            <div
              key={customer.name}
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-xl shadow-lg overflow-hidden bg-white"
            >
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src={customer.img}
                  alt={customer.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="p-4 text-center bg-white">
                <h3 className="font-semibold text-lg">{customer.name}</h3>
                <p className="text-gray-500">{customer.carModel}</p>
                <p className="text-gray-500">{customer.duration}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {customers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full transition-colors ${
                idx === current ? "bg-indigo-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
