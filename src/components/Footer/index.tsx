import { MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-indigo-700 to-emerald-600 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-bold">Oktavia Car Rental</h4>
            <p className="mt-2 text-sm text-indigo-100">
              Reliable & affordable car rental service in Kuching & Samarahan.
              Airport delivery, flexible packages, and 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-indigo-100">
              <li>
                <a href="#cars" className="hover:text-white transition">
                  🚗 Our Cars
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  💰 Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  ❓ FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  📞 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-3">Get in Touch</h5>
            <ul className="space-y-3 text-sm text-indigo-100">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +601120579875
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Kuching International Airport pickup
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61579635249791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M22.675 0h-21.35C.596 0 0 .597 0 1.333v21.333C0 23.403.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.404 24 24 23.403 24 22.667V1.333C24 .597 23.404 0 22.675 0z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition"
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
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 text-center py-4 text-sm text-indigo-100">
          © {new Date().getFullYear()} Oktavia Car Rental — Kuching & Samarahan.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
