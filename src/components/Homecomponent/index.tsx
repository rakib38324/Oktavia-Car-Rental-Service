"use client";

import React, { JSX } from "react";

import HeroBanner from "../Banner";


import WhyChooseUs from "../WhyUs";
import PopularCars from "../PopularCars";
import Pricing from "../Pricing";
import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";




export default function HomeComponent(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* HERO */}

      <HeroBanner />
      

      <WhyChooseUs />

      <PopularCars />

      <Pricing />

      <Testimonials />

      <FAQ />

      <ContactUs />

      
    </main>
  );
}
