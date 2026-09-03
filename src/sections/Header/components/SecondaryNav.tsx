import React, { useState } from "react";
import { services } from "@/data/services";

export const SecondaryNav = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav aria-label="Secondary navigation" className="hidden md:block bg-[#17539B]/95 border-b-2 border-[#17539B]/80 backdrop-blur-sm relative z-50">
      <div className="max-w-[1300px] mx-auto px-5">
        <ul className="flex items-center justify-center gap-0 relative">
          <li>
            <a
              href="/"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block border-r border-[#17539B]/60"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block border-r border-[#17539B]/60"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/roof-cleaning"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block border-r border-[#17539B]/60"
            >
              Roof Cleaning
            </a>
          </li>
          <li>
            <a
              href="/pressure-washing"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block border-r border-[#17539B]/60"
            >
              Pressure Washing
            </a>
          </li>
          <li>
            <a
              href="/locations"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block border-r border-[#17539B]/60"
            >
              Locations
            </a>
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a
              href="/services"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block border-r border-[#17539B]/60 flex items-center gap-1"
            >
              Services
              <svg
                className={`w-4 h-4 text-white transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <div 
              className={`absolute left-0 top-full mt-1 w-[250px] bg-white shadow-xl rounded-lg z-[9999] py-2 border border-neutral-200 transition-all duration-200 ease-in-out ${
                isServicesOpen 
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="/services"
                className="block px-4 py-2 text-neutral-900 text-sm font-semibold hover:bg-[#17539B]/10 hover:text-[#17539B] transition-colors"
              >
                All Services
              </a>
              <div className="border-t border-neutral-200 my-1"></div>
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="block px-4 py-2 text-neutral-700 text-sm hover:bg-[#17539B]/10 hover:text-[#17539B] transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white font-semibold text-sm tracking-wide uppercase py-2 px-6 hover:bg-[#17539B]/80 transition-colors block"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

