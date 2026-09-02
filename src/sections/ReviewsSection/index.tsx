import React from "react";

interface ReviewsSectionProps {
  backgroundImage?: string;
}

export const ReviewsSection = ({ backgroundImage = "/services/pressurewashing.png" }: ReviewsSectionProps) => {
  return (
    <section className="relative bg-scroll bg-stone-900/40 bg-no-repeat bg-cover box-border caret-transparent py-10 md:py-16 md:bg-fixed w-full" style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute bg-black/50 box-border caret-transparent opacity-60 inset-0 md:bg-black/40 w-full"></div>
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap z-10 w-full">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
              </div>
            </div>
            
            <div className="relative text-white text-lg box-border caret-transparent leading-7 text-center w-full mb-6 font-figtree md:text-2xl md:leading-9">
              <div className="text-lg box-border caret-transparent leading-7 md:text-2xl md:leading-9">
                <p className="text-lg box-border caret-transparent leading-7 mb-4 md:text-2xl md:leading-9">
                  Check Out Great Reviews On Our
                </p>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent text-center w-full mb-6">
              <div className="box-border caret-transparent">
                <h3 className="text-white text-3xl font-bold not-italic box-border caret-transparent leading-9 font-thiccboi md:text-4xl md:leading-10">
                  Exterior Cleaning Services in Ayrshire
                </h3>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex text-center py-6">
                  <span className="border-t-white box-border caret-transparent flex w-[10%] mx-auto border-t-[5px]"></span>
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent flex items-center justify-center gap-4 mb-6">
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <svg className="text-yellow-400 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <p className="text-white text-center text-lg font-figtree mb-8">
                Rated 5 Stars by Our Customers
              </p>
              
              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "Had Jason and the team round to give the drive and roof a deep clean. The workmanship was great, he knew his stuff. The outcome was outstanding, the roof was left looking like new. 5 star service, will definitely use again in the future."
                  </p>
                  <p className="text-white/90 text-sm font-semibold">- Andrew Shearer</p>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "Had this company twice doing jobs for me (monoblock drive) and (roof cleaned) great finish on both jobs, roof looks like brand new, (best looking roof in the street now) decent and fair prices and Jason is a lovely and accommodating guy. Keep up the good work and I will definitely be using them again."
                  </p>
                  <p className="text-white/90 text-sm font-semibold">- Robert Smith</p>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "Thanks to Jason at J Smith Power Washing. Got the boys in to power wash the tarmac at my back door as it was covered in green moss and the result came up great, would highly recommend and will definitely be using the boys again. Thanks again for your services."
                  </p>
                  <p className="text-white/90 text-sm font-semibold">- Dylan Hall</p>
                </div>

                <div className="bg-neutral-800/50 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-base mb-3 font-figtree">
                    "Used this company to do a roof clean and they done a great job at a good price and got it done quickly, they also went over and above what we spoke about when they viewed the job initially by doing extra cleaning in and around the areas we agreed on. I would definitely recommend them."
                  </p>
                  <p className="text-white/90 text-sm font-semibold">- Darren</p>
                </div>
              </div>
            </div>
            
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[30px]"></div>
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
                <div className="box-border caret-transparent h-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

