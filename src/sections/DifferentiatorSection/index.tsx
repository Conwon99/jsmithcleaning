import React from "react";

export const DifferentiatorSection = () => {

  return (
    <section className="relative bg-gradient-to-b from-transparent via-[#17539B]/10 to-[#17539B] box-border caret-transparent py-10 md:py-16">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="relative box-border caret-transparent flex flex-col md:flex-row gap-8 items-start">
                {/* Left Side - Text */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div className="relative box-border caret-transparent text-left w-full mb-6">
                    <h2 className="text-neutral-900 text-2xl font-bold not-italic box-border caret-transparent leading-8 font-thiccboi md:text-4xl md:leading-10">
                      <span className="text-[#17539B] underline">What Makes Us Different</span> From Other Exterior Cleaning Companies in Ayrshire?
                    </h2>
                  </div>
                  <div className="relative box-border caret-transparent text-left w-full font-figtree">
                    <div className="box-border caret-transparent">
                      <p className="text-neutral-700 text-base box-border caret-transparent mb-4 leading-6 md:text-lg md:leading-7">
                        At J Smith Exterior Cleaning, we stand out through our commitment to excellence, attention to detail, and customer-first approach. We use professional-grade equipment and eco-friendly solutions to deliver outstanding results while protecting your property and the environment.
                      </p>
                      <p className="text-neutral-700 text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
                        Our fully insured, professionally trained team is dedicated to providing exceptional service on every job. From pressure washing to gutter cleaning, we deliver reliable, professional results that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Image */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <img
                    src={encodeURI("/jsmith-exterior-cleaning-results.webp")}
                    alt="J Smith Exterior Cleaning - Professional exterior cleaning results"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="text-sm box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] object-cover rounded-lg shadow-lg md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-7"></div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent text-center w-full mb-8">
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
            </div>
            
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

