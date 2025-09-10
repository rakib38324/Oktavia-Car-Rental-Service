/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";

import { CalendarDays, Clock } from "lucide-react";
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

type CarPageProps = {
  params: Promise<{ slug: string }>; // 👈 important
};



export default async function CarPage({ params }: CarPageProps) {
  const cars = [
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
const { slug } = await params; // 👈 must await
  const car = cars?.find((c) => c.slug === slug);

  if (!car) {
    return <div className="p-6 text-center text-red-500">Car not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
      {/* 🚗 Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{car.name}</h1>
          <p className="mt-4 text-lg text-gray-600">{car.desc}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              {car.doors}
            </span>
            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm">
              {car.passengers} Passengers
            </span>
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm">
              {car.luggage}
            </span>
          </div>
          <div className="mt-6">
            {/* Price Options */}
            <div className="w-2/3 mt-4 space-y-3 text-sm">
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
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow-md hover:opacity-95 mt-3"
          >
            Rent via WhatsApp
          </a>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image src={car.image} alt={car.name} fill className="object-cover" />
        </div>
      </section>

      {/* 🖼️ Image Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {car.gallery.map((img: any, idx: number) => (
            <div
              key={idx}
              className={`relative group rounded-xl overflow-hidden shadow-md h-96`}
            >
              <Image
                src={img}
                alt={`${car.name} image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-medium">View {car.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 Specs Section */}
      <section className="bg-gray-50 p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          <li>🚘 {car.doors}</li>
          <li>👥 {car.passengers} Passengers</li>
          <li>🛄 {car.luggage}</li>
          <li>⭐ {car.rating} / 5 Rating</li>
          <li>💰 RM {car.priceOneDay} per day</li>
        </ul>
      </section>

      {/* 📖 About Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">About This Car</h2>
        <p className="text-gray-600 leading-relaxed">
          {car.desc} Perfect for both short trips and long drives. All cars are
          regularly serviced, clean, and insured for your peace of mind.
        </p>
      </section>

      <section className="bg-gray-50 p-10 rounded-3xl shadow-sm">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl">⛽</p>
            <h3 className="mt-4 font-semibold">Fuel Efficient</h3>
            <p className="text-gray-600 text-sm mt-2">
              Save more with excellent mileage.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl">📱</p>
            <h3 className="mt-4 font-semibold">Smart Connectivity</h3>
            <p className="text-gray-600 text-sm mt-2">
              Bluetooth & Apple CarPlay included.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl">🛡</p>
            <h3 className="mt-4 font-semibold">Safe Drive</h3>
            <p className="text-gray-600 text-sm mt-2">
              Equipped with advanced safety features.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl">🧳</p>
            <h3 className="mt-4 font-semibold">Spacious</h3>
            <p className="text-gray-600 text-sm mt-2">
              Extra luggage room for long trips.
            </p>
          </div>
        </div>
      </section>

      {/* 💬 Reviews Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white rounded-xl p-6 shadow">
            <p className="text-gray-600">
              Smooth drive and very fuel-efficient!
            </p>
            <footer className="mt-3 text-sm text-gray-500">— Aisyah</footer>
          </blockquote>
          <blockquote className="bg-white rounded-xl p-6 shadow">
            <p className="text-gray-600">
              Easy pickup at the airport. Car was clean and ready.
            </p>
            <footer className="mt-3 text-sm text-gray-500">— Faiz</footer>
          </blockquote>
        </div>
      </section>

      {/* 📲 Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white p-10 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl font-bold">Ready to Book?</h2>
        <p className="mt-2 text-lg">
          Reserve {car.name} today for your next trip.
        </p>
        <a
          href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Now via WhatsApp
        </a>
      </section>
    </div>
  );
}
