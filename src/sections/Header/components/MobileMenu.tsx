import React, { useState } from "react";
import { services } from "@/data/services";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hamburger Button - Hidden when menu is open */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="relative text-white text-base font-semibold box-border caret-transparent inline-flex items-center justify-center tracking-[1px] leading-[24px] break-words uppercase z-[10] p-3 cursor-pointer md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[8] md:hidden"
            onClick={toggleMenu}
          />
          <div className="fixed top-0 left-0 right-0 bg-neutral-900 z-[9] shadow-lg md:hidden">
            <div className="max-w-[1300px] mx-auto px-5 py-6">
              <div className="flex items-center justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "hero")}
                    className="text-white text-lg font-semibold box-border caret-transparent block tracking-[1px] leading-7 break-words uppercase py-4 px-3 hover:text-cyan-600 transition-colors text-center"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-semibold box-border caret-transparent block tracking-[1px] leading-7 break-words uppercase py-4 px-3 hover:text-cyan-600 transition-colors text-center"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/locations"
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-semibold box-border caret-transparent block tracking-[1px] leading-7 break-words uppercase py-4 px-3 hover:text-cyan-600 transition-colors text-center"
                  >
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    href="/reviews"
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-semibold box-border caret-transparent block tracking-[1px] leading-7 break-words uppercase py-4 px-3 hover:text-cyan-600 transition-colors text-center"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-white text-lg font-semibold box-border caret-transparent w-full flex items-center justify-center gap-2 tracking-[1px] leading-7 break-words uppercase py-4 px-3 hover:text-cyan-600 transition-colors"
                  >
                    Services
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
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
                  </button>
                  {isServicesOpen && (
                    <ul className="bg-neutral-800/50 space-y-2 py-2">
                      <li>
                        <a
                          href="/services"
                          onClick={() => setIsOpen(false)}
                          className="text-white/90 text-base font-semibold box-border caret-transparent block tracking-[1px] leading-6 break-words uppercase py-3 px-6 hover:text-cyan-400 transition-colors"
                        >
                          All Services
                        </a>
                      </li>
                      {services.map((service) => (
                        <li key={service.slug}>
                          <a
                            href={`/${service.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 text-base box-border caret-transparent block tracking-[1px] leading-6 break-words py-2 px-6 hover:text-cyan-400 transition-colors"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-semibold box-border caret-transparent block tracking-[1px] leading-7 break-words uppercase py-4 px-3 hover:text-cyan-600 transition-colors text-center"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

