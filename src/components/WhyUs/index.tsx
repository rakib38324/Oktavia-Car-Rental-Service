"use client";

import { MapPin, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-indigo-700 px-3 py-2 bg-indigo-200 rounded-full">
            We Are The Best
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            Enjoy Every Journey <br />
            With Your Own Way <br />
            Of Driving
          </h2>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <MapPin size={32} className="text-gray-700 mb-4" />
            <h3 className="font-bold text-lg text-gray-900">Free Pick Up & Drop</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your convenience matters. Complimentary pick-up and drop-off service
              for any vehicle, a stress-free experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <Users size={32} className="text-gray-700 mb-4" />
            <h3 className="font-bold text-lg text-gray-900">24/7 Road Assistant</h3>
            <p className="mt-2 text-sm text-gray-600">
              No matter the time or place, our 24/7 roadside assistance ensures
              you’re never stranded. Drive confidently with support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
