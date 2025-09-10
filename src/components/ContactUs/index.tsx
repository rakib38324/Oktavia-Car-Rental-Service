import React from "react";

const ContactUs = () => {
  return (
    <div>
      {/* CONTACT / CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white shadow-xl text-center">
          <h3 className="text-3xl font-bold">Ready to Drive with Oktavia?</h3>
          <p className="mt-3 text-lg text-emerald-100">
            Fast & reliable car rental in Kuching & Samarahan 🚗 Delivered to
            your location, hassle-free.
          </p>

          <a
            href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-green-600 font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.55 0 .29 5.26.29 11.75c0 2.07.54 4.09 1.56 5.87L0 24l6.52-1.71a11.73 11.73 0 0 0 5.52 1.38h.01c6.49 0 11.75-5.26 11.75-11.75a11.72 11.72 0 0 0-3.28-8.44ZM12.04 21a9.77 9.77 0 0 1-4.99-1.37l-.36-.22-3.87 1.01 1.04-3.77-.25-.39a9.77 9.77 0 0 1-1.53-5.26c0-5.4 4.39-9.79 9.79-9.79 2.62 0 5.09 1.02 6.94 2.87a9.74 9.74 0 0 1 2.86 6.93c0 5.4-4.39 9.79-9.79 9.79Zm5.36-7.31c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.75-1.42-1.67-1.58-1.96-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.55-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01s-.51.07-.77.36c-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.19 2.99.15.19 2.05 3.13 5 4.39.7.3 1.25.47 1.68.6.71.23 1.35.2 1.86.12.57-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
            </svg>
            Chat on WhatsApp
          </a>

          <p className="mt-4 text-sm text-emerald-100">
            📍 Available in Kuching & Samarahan <br />⏰ 24/7 Fast Response
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
