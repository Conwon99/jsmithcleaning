import React, { useState, useEffect } from "react";

export const ServiceIntro = () => {
  const questions = [
    <>Need <span className="text-[#17539B] font-semibold">roof cleaning</span> or <span className="text-[#17539B] font-semibold">gutter cleaning</span> to restore your property's exterior?</>,
    <>Want reliable <span className="text-[#17539B] font-semibold">pressure washing</span> or <span className="text-[#17539B] font-semibold">soft washing</span> services for your home?</>,
    <>Seeking expert <span className="text-[#17539B] font-semibold">driveway cleaning</span> or <span className="text-[#17539B] font-semibold">patio cleaning</span>?</>,
    <>Need <span className="text-[#17539B] font-semibold">uPVC cleaning</span> or <span className="text-[#17539B] font-semibold">conservatory cleaning</span> to maximise natural light?</>,
    "Looking for eco-friendly cleaning solutions for all your exterior cleaning needs?",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/jsmith-softwashing-before.webp", label: "Before" },
    { src: "/jsmith-softwashing-after.webp", label: "After" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative box-border caret-transparent py-10 md:py-16">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="relative box-border caret-transparent flex flex-col md:flex-row gap-8 items-start">
                {/* Left Side - All Text Content */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div className="relative box-border caret-transparent text-left w-full mb-6">
                    <h2 className="text-neutral-900 text-2xl font-bold not-italic box-border caret-transparent leading-8 font-thiccboi md:text-4xl md:leading-10">
                      Looking For <span className="text-[#17539B] underline">Professional</span> Exterior Cleaning Services in Ayrshire?
                    </h2>
                  </div>
                  <div className="relative box-border caret-transparent text-left w-full">
                    <ul className="box-border caret-transparent list-none pl-0">
                      {questions.map((question, index) => (
                        <li key={index} className="relative items-center box-border caret-transparent flex justify-start pb-4">
                          <span className="relative box-border caret-transparent flex pr-3.5 flex-shrink-0">
                            <div className="bg-[#17539B] rounded-full w-6 h-6 flex items-center justify-center">
                              <svg
                                className="text-white h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="text-sm self-center box-border caret-transparent block leading-6 pl-2 font-figtree md:text-base">
                            {question}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Side - Before/After Slideshow */}
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div className="relative text-sm box-border caret-transparent w-full leading-[20.3px] break-words overflow-hidden rounded-lg shadow-2xl md:text-[17px] md:leading-[24.65px]">
                    {/* Slideshow Container */}
                    <div className="relative text-sm box-border caret-transparent w-full h-[300px] md:text-[17px] md:h-[400px] md:leading-[24.65px]">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words top-0 left-0 w-full h-[300px] md:text-[17px] md:h-[400px] md:leading-[24.65px] transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                          style={{
                            backgroundImage: `url('${encodeURI(image.src)}')`,
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Dots Indicator */}
                    <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:text-[17px] md:leading-[24.65px]">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`text-sm box-border caret-transparent leading-[20.3px] break-words w-2.5 h-2.5 rounded-full transition-all md:text-[17px] md:leading-[24.65px] md:w-3 md:h-3 ${
                            index === currentIndex
                              ? 'bg-[#17539B] w-6 md:w-8'
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

