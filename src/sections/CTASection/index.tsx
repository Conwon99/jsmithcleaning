import React from "react";
import { GoogleReviewBadge } from "@/components/GoogleReviewBadge";

export const CTASection = () => {
  return (
    <section
      className="relative bg-scroll bg-cover bg-center bg-no-repeat box-border caret-transparent py-10 md:py-16 md:bg-fixed"
      style={{ backgroundImage: `url('${encodeURI("/cta-roof-drone.jpg")}')` }}
    >
      <div className="absolute bg-[#17539B]/85 box-border caret-transparent inset-0"></div>
      <div className="relative z-10 items-center box-border caret-transparent flex flex-wrap max-w-[1300px] min-h-[300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[66.666%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full mb-5 md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[50px]"></div>
                </div>
              </div>
            </div>
            <div className="relative text-white text-lg box-border caret-transparent leading-7 text-center w-full font-figtree md:text-xl md:leading-8">
              <div className="text-lg box-border caret-transparent leading-7 md:text-xl md:leading-8">
                <p className="text-lg box-border caret-transparent leading-7 mb-4 md:text-xl md:leading-8">
                  Ready to transform your property's exterior? Contact J Smith Exterior Cleaning today for professional exterior cleaning services in Ayrshire. We offer free, no-obligation quotes and guarantee exceptional results on every job.
                </p>
                <p className="text-lg box-border caret-transparent leading-7 md:text-xl md:leading-8">
                  Don't wait - let us help you restore your property to its original beauty. Get in touch now!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full mb-5 md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[50px]"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <a
                  href="/contact"
                  className="button-shine relative text-white text-lg font-bold box-border caret-transparent inline-flex items-center justify-center tracking-wide leading-normal text-center align-middle bg-[#8dae23] hover:bg-[#7a9a1f] hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 px-7 py-4 rounded-md shadow-lg whitespace-nowrap md:px-8 md:py-5 md:text-xl"
                >
                  <span className="relative z-10 text-white box-border caret-transparent uppercase whitespace-nowrap">
                    Get A Free Quote
                  </span>
                </a>
              </div>
              <div className="flex justify-center">
                <GoogleReviewBadge stacked />
              </div>
            </div>
            <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5 md:h-[50px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

