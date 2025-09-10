"use client";

import { MapPin, Car, Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function OurLocations() {
  const locations = [
    {
      title: "Kuching City",
      desc: "Central hub with convenient pickup points across the city.",
      icon: Car,
    },
    {
      title: "Samarahan",
      desc: "Easy access for students and residents nearby.",
      icon: MapPin,
    },
    {
      title: "Kuching International Airport",
      desc: "Seamless airport pickup & drop-off for stress-free travel.",
      icon: Plane,
    },
  ];

  return (
    <section id="locations" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900"
        >
          Our Locations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Wherever you’re headed, Oktavia Car Rental is here to serve you.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {locations.map((loc, idx) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-gray-900">
                  {loc.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{loc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
