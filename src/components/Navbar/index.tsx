import { logo } from "@/assets/image";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto p-3 flex items-center justify-between shadow-2xl">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 flex items-center justify-center text-white text-lg font-bold shadow-md">
            <Image
              src={logo}
              alt="Logo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase">Oktavia Car Rental</h1>
            <p className="text-xs text-gray-500">Kuching &amp; Samarahan</p>
          </div>
        </Link>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow-md hover:opacity-95"
        >
          <Phone size={14} /> Book Now
        </a>
      </nav>
    </div>
  );
};

export default NavbarComponent;
