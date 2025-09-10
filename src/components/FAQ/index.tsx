"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you deliver to Kuching Airport?",
    answer:
      "✅ Yes — we offer free delivery to Kuching Airport for selected bookings. Confirm during reservation.",
  },
  {
    question: "What documents are needed?",
    answer:
      "✅ Valid driving license, IC or passport, and a deposit/authorization as required.",
  },
  {
    question: "Can I extend my booking?",
    answer:
      "✅ Yes — contact us via WhatsApp and we'll update your rental duration and rate.",
  },
  {
    question: "Are the cars insured?",
    answer:
      "✅ All cars include basic insurance. Additional coverage options are available upon request.",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "✅ Yes, child/baby seats are available upon request with a small additional fee.",
  },
  {
    question: "What if my flight is delayed?",
    answer:
      "✅ No worries! Just update us on WhatsApp and our team will adjust the delivery time.",
  },
  {
    question: "Is fuel included in the rental price?",
    answer:
      "✅ Cars come with a standard fuel level. Customers are required to return with the same level.",
  },
  {
    question: "Can I rent for long-term (1 week+)?",
    answer:
      "✅ Yes — we offer discounted weekly and long-term rental packages for both individuals and companies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h3>
        <p className="text-center text-gray-600 mt-2">
          Everything you need to know before booking with Oktavia Car Rental 🚗
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full cursor-pointer flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0 px-5"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
