"use client";

import React from "react";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { ativa_red, axia_gray, axia_silver, bezza_silver, bezza_white, saga_flx } from "@/assets/image";
import Carousel from "@/components/Carousel";

export default function HeroBanner(): React.JSX.Element {
  const cars = [
  {
    name: "Perodua Ativa (Pearl Delima Red)",
    subtitle: "Stylish SUV • Turbo Power • Perfect for Family Trips",
    img: ativa_red,
  },
  {
    name: "Perodua Axia (Glittering Silver)",
    subtitle: "Compact • Fuel Efficient • Easy City Driving",
    img: axia_silver,
  },
  {
    name: "Perodua Bezza (Ivory White)",
    subtitle: "Comfort • Spacious Sedan • Great for Long Drives",
    img: bezza_white,
  },
  {
    name: "Perodua Axia (Granite Grey)",
    subtitle: "Practical • Fuel Saver • Smooth Daily Commute",
    img: axia_gray,
  },
  {
    name: "Perodua Bezza (Glittering Silver)",
    subtitle: "Elegant • Reliable Sedan • Family-Friendly Choice",
    img: bezza_silver,
  },
  {
    name: "Proton Saga FLX (White)",
    subtitle: "Classic • Affordable • Trusted for Everyday Use",
    img: saga_flx,
  },
];



  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
            <MapPin size={14} /> Delivered to Kuching Airport & Hotels
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight font-sans">
            Drive Your Journey with{" "}
            <span className="text-indigo-600">Oktavia Car Rental</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            Affordable, reliable & flexible car rental service in Kuching &
            Samarahan. Book instantly via WhatsApp and enjoy free airport
            delivery with selected packages.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:opacity-95"
            >
              <Phone size={16} className="mr-2" /> Book Now
            </a>
            
          </div>

          {/* Trust Badges */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={16} /> Free
              Airport Delivery
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-emerald-500" size={16} /> Daily & Weekly
              Rates
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={16} />{" "}
              Well-Maintained Cars
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={16} /> Up to 30%
              Discount
            </div>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <Carousel cars={cars} />
        
      </div>
    </section>
  );
}
