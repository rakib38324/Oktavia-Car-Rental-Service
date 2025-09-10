"use client";

import { motion } from "framer-motion";
import { Car, Phone, CalendarCheck, LocateFixedIcon } from "lucide-react";

/**
 * NOTE:
 * - All Tailwind classes used for colors are literal strings inside the `steps` array
 *   so Tailwind JIT can see them when scanning source files.
 * - If you still have trouble, see the Tailwind safelist example below.
 */

const steps = [
  {
    id: 1,
    title: "Choose Your Car",
    desc: "Browse our wide selection of reliable vehicles suited for every trip.",
    // explicit classes (literal strings)
    cardBg: "bg-indigo-50",
    circleBg: "bg-indigo-600",
    iconColor: "text-white",
    Icon: Car,
  },
  {
    id: 2,
    title: "Contact Us",
    desc: "Reach us instantly via WhatsApp or call for confirmation.",
    cardBg: "bg-green-50",
    circleBg: "bg-green-600",
    iconColor: "text-white",
    Icon: Phone,
  },
  {
    id: 3,
    title: "Confirm Booking",
    desc: "Share your details, pickup location, and dates to secure your booking.",
    cardBg: "bg-yellow-50",
    circleBg: "bg-yellow-500",
    iconColor: "text-white",
    Icon: CalendarCheck,
  },
  {
    id: 4,
    title: "Pick Up & Drive",
    desc: "Collect your car at the airport or chosen spot and enjoy the ride!",
    cardBg: "bg-emerald-50",
    circleBg: "bg-emerald-600",
    iconColor: "text-white",
    Icon: LocateFixedIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Renting a car with Oktavia is quick and hassle-free — just follow these steps:
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`${step.cardBg} p-6 rounded-2xl shadow hover:shadow-md transition`}
              >
                <div
                  className={`${step.circleBg} w-12 h-12 flex items-center justify-center rounded-full mx-auto`}
                >
                  <Icon className={`${step.iconColor} w-6 h-6`} />
                </div>

                <h3 className="mt-4 font-semibold text-lg text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
