import React from "react";

export const FeatureRow = () => {
  return (
    <section className="relative bg-[#17539B] box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
            <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-6 border-solid shadow-lg border-b border-[#17539B]/80">
            <div className="box-border caret-transparent relative text-center w-full">
              <div className="box-border caret-transparent flex items-center justify-center gap-3">
                {/* Shield Icon for Fully Insured */}
                <svg className="text-white w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h2 className="text-white text-xl font-semibold not-italic box-border caret-transparent leading-6 font-thiccboi md:text-2xl md:leading-7">
                  Fully Insured
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
            <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-6 border-solid shadow-lg border-b border-[#17539B]/80">
            <div className="box-border caret-transparent relative text-center w-full">
              <div className="box-border caret-transparent flex items-center justify-center gap-3">
                {/* Briefcase Icon for Professional Service */}
                <svg className="text-white w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-white text-xl font-semibold not-italic box-border caret-transparent leading-6 font-thiccboi md:text-2xl md:leading-7">
                  Professional Service
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
            <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-6 border-solid shadow-lg border-b border-[#17539B]/80">
            <div className="box-border caret-transparent relative text-center w-full">
              <div className="box-border caret-transparent flex items-center justify-center gap-3">
                {/* Star Icon for Quality Guaranteed */}
                <svg className="text-white w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h2 className="text-white text-xl font-semibold not-italic box-border caret-transparent leading-6 font-thiccboi md:text-2xl md:leading-7">
                  Quality Guaranteed
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

