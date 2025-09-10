"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Great service! Delivered to Kuching airport and the car was clean and fuel efficient.",
    author: "Aisyah, Kuching",
  },
  {
    text: "Easy booking via WhatsApp. Staff were friendly and punctual.",
    author: "Hamdan, Sri Aman",
  },
  {
    text: "Affordable rates and great condition cars. Will rent again.",
    author: "Lina, Samarahan",
  },
  {
    text: "Super convenient, especially the free airport delivery. Highly recommended!",
    author: "Faizal, Miri",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900">
        What our customers say
      </h3>

      <div className="relative mt-10">
        {/* Slides */}
        <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="w-full flex-shrink-0 p-8 text-center"
              >
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  “{t.text}”
                </p>
                <footer className="mt-6 text-sm font-medium text-indigo-600">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
