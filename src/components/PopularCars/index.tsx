"use client";

import Image from "next/image";
import { Star, Car, Luggage, Users, Clock, CalendarDays } from "lucide-react";
// data/cars.ts
import {
  axia_silver,
  axia_gray,
  bezza_white,
  bezza_silver,
  ativa_red,
  saga_flx,
  // ativa gallery
  ativa_1,
  ativa_2,
  ativa_3,
  ativa_4,
  ativa_5,
  ativa_6,
  // bezza silver gallery
  bezza_silver_1,
  bezza_silver_2,
  bezza_silver_3,
  bezza_silver_4,
  // bezza white gallery
  bezza_white_1,
  bezza_white_2,
  bezza_white_3,
  bezza_white_4,
  // axia silver gallery
  axia_silver_1,
  axia_silver_2,
  axia_silver_3,
  axia_silver_4,
  axia_silver_5,
  // axia gray gallery
  axia_gray_1,
  axia_gray_2,
  axia_gray_3,
  axia_gray_4,
  // saga flx gallery
  saga_flx_1,
  saga_flx_2,
  saga_flx_3,
  saga_flx_4,
} from "@/assets/image";
import Link from "next/link";

export const cars = [
  {
    slug: "ativa-red",
    name: "Perodua Ativa (Pearl Delima Red)",
    priceOneDay: 150,
    priceThreeDayPlus: 140,
    rating: 4.9,
    image: ativa_red,
    desc: "Stylish SUV with turbo performance, 2-tone design, and modern comfort.",
    doors: "4 Doors",
    luggage: "2 Large, 2 Small",
    passengers: 5,
    gallery: [ativa_1, ativa_2, ativa_3, ativa_4, ativa_5, ativa_6],
  },
  {
    slug: "axia-silver",
    name: "Perodua Axia (Glittering Silver)",
    priceOneDay: 100,
    priceThreeDayPlus: 85,
    rating: 4.7,
    image: axia_silver,
    desc: "Compact and fuel-efficient hatchback, perfect for city driving.",
    doors: "4 Doors",
    luggage: "1 Large, 1 Small",
    passengers: 4,
    gallery: [
      axia_silver_1,
      axia_silver_2,
      axia_silver_3,
      axia_silver_4,
      axia_silver_5,
    ],
  },
  {
    slug: "axia-gray",
    name: "Perodua Axia (Granite Gray)",
    priceOneDay: 100,
    priceThreeDayPlus: 85,
    rating: 4.7,
    image: axia_gray,
    desc: "Reliable compact car, excellent for urban and long-distance driving.",
    doors: "4 Doors",
    luggage: "1 Large, 1 Small",
    passengers: 4,
    gallery: [axia_gray_1, axia_gray_2, axia_gray_3, axia_gray_4],
  },
  {
    slug: "bezza-white",
    name: "Perodua Bezza (Ivory White)",
    priceOneDay: 100,
    priceThreeDayPlus: 90,
    rating: 4.8,
    image: bezza_white,
    desc: "Comfortable sedan with spacious interior, perfect for family trips.",
    doors: "4 Doors",
    luggage: "2 Large, 1 Small",
    passengers: 4,
    gallery: [bezza_white_1, bezza_white_2, bezza_white_3, bezza_white_4],
  },
  {
    slug: "bezza-silver",
    name: "Perodua Bezza (Glittering Silver)",
    priceOneDay: 100,
    priceThreeDayPlus: 90,
    rating: 4.8,
    image: bezza_silver,
    desc: "Fuel-efficient sedan with modern design and extra comfort.",
    doors: "4 Doors",
    luggage: "2 Large, 1 Small",
    passengers: 4,
    gallery: [bezza_silver_1, bezza_silver_2, bezza_silver_3, bezza_silver_4],
  },
  {
    slug: "saga-flx",
    name: "Proton Saga FLX SE",
    priceOneDay: 90,
    priceThreeDayPlus: 80,
    rating: 4.6,
    image: saga_flx,
    desc: "Affordable and reliable sedan, a trusted choice for everyday driving.",
    doors: "4 Doors",
    luggage: "2 Large, 1 Small",
    passengers: 4,
    gallery: [saga_flx_1, saga_flx_2, saga_flx_3, saga_flx_4],
  },
];

export default function PopularCars() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-indigo-700 px-3 py-2 bg-indigo-200 rounded-full">
            Popular Cars
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Most Popular Cars
          </h2>
        </div>

        {/* Car Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border overflow-hidden flex flex-col"
            >
              {/* Car Image */}
              <div className="relative w-full h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  RM{car.priceOneDay}
                  <span className="text-xs">/Day</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-gray-900">
                    {car.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star size={16} fill="currentColor" className="mr-1" />
                    {car.rating}
                  </div>
                </div>
                <p className="text-sm text-gray-600 flex-grow">{car.desc}</p>

                {/* Price Options */}
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-indigo-100 p-3 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-2 text-gray-800">
                      <CalendarDays className="w-4 h-4 text-indigo-600" />
                      <span className="font-medium">1–2 Days</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-green-700">
                        RM{car.priceOneDay}
                      </span>
                      <span className="text-red-400 line-through text-sm">
                        {" "}
                        RM{car.priceOneDay + 30}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-2 text-gray-800">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="font-medium">3 Days & Above</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-green-700">
                        RM{car.priceThreeDayPlus}
                        {(car.name === "Perodua Axia (Granite Gray)" ||
                          car.name === "Perodua Axia (Glittering Silver)" ||
                          car.name === "Perodua Bezza (Ivory White)" ||
                          car.name === "Perodua Bezza (Glittering Silver)") && (
                          <> - RM{car.priceThreeDayPlus + 10}</>
                        )}
                        {car.name === "Proton Saga FLX SE" && (
                          <> - RM{car.priceThreeDayPlus + 5}</>
                        )}
                      </span>
                      <span className="text-red-400 line-through text-sm">
                        RM{car.priceThreeDayPlus + 20}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Car size={16} /> Doors: {car.doors}
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage size={16} /> Suitcase: {car.luggage}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} /> Passengers: 0{car.passengers}
                  </div>
                </div>

                <Link
                  href={`/cars/${car.slug}`}
                  className="mt-2 w-full font-medium py-2 rounded-lg cursor-pointer  text-blue-600 underline"
                >
                  View Real Image
                </Link>

                {/* Button */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
                  className="mt-6 w-full text-center bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 cursor-pointer transition"
                >
                  Rent now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
