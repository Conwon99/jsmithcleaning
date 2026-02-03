import React from "react";
import { TroonServicesGrid } from "@/sections/ServicesSection/components/TroonServicesGrid";

export const TroonServicesSection = () => (
  <div id="services" className="relative text-sm box-border caret-transparent leading-[20.3px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
    <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 py-10 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-16">
      <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent flex flex-col items-center text-center leading-[20.3px] break-words mb-8 md:text-[17px] md:leading-[24.65px] md:mb-12">
          <h2 className="text-neutral-900 text-3xl font-bold box-border caret-transparent clear-both leading-[40px] break-words font-thiccboi mb-4 md:text-5xl md:leading-[60px]">
            <span className="text-[#17539B]">Exterior Cleaning</span> Expert Friendly Service in Troon
          </h2>
          <div className="relative box-border caret-transparent w-full mb-4">
            <div className="box-border caret-transparent flex text-center py-[15px]">
              <span className="border-t-[#17539B] box-border caret-transparent flex w-[14%] mx-auto border-t-4"></span>
            </div>
          </div>
          <p className="text-neutral-700 text-base box-border caret-transparent leading-[24px] break-words max-w-4xl mx-auto font-figtree md:text-lg md:leading-[26px]">
            We serve Troon and the surrounding areas. Coastal humidity and salt air mean algae and moss thrive on Troon properties. We've been helping Troon homeowners fix these problems for years. Whether you're in the town centre, Barassie, Loans, Prestwick, or anywhere nearby, we can help.
          </p>
        </div>
        <TroonServicesGrid />
      </div>
    </div>
  </div>
);
