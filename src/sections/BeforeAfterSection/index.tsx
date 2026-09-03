import React, { useState, useEffect } from "react";

interface BeforeAfterSectionProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSection = ({ 
  beforeImage = "/jsmith-before-after-default-before.jpeg",
  afterImage = "/jsmith-before-after-default-after.webp",
  title = "Before & After",
  subtitle = "J Smith Exterior Cleaning"
}: BeforeAfterSectionProps = {}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: beforeImage, label: "Before" },
    { src: afterImage, label: "After" }
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
    <div className="relative text-sm items-center box-border caret-transparent flex justify-center leading-[20.3px] break-words px-5 py-10 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-16">
      <div className="text-sm box-border caret-transparent grow leading-[20.3px] max-w-[1300px] break-words mx-auto md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent flex flex-col items-center text-center leading-[20.3px] break-words mb-8 md:text-[17px] md:leading-[24.65px] md:mb-12">
          <h5 className="text-cyan-600 text-base italic font-semibold box-border caret-transparent clear-both tracking-[2px] leading-[22.4px] break-words uppercase font-kanit mb-2">
            {subtitle}
          </h5>
          <h3 className="text-neutral-900 text-[25px] italic font-bold box-border caret-transparent clear-both leading-[35px] break-words uppercase font-kanit md:text-3xl md:leading-[42px]">
            {title}
          </h3>
        </div>
        
        <div className="text-sm box-border caret-transparent flex justify-center leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
          <div className="relative text-sm box-border caret-transparent w-full max-w-4xl leading-[20.3px] break-words overflow-hidden rounded-lg shadow-2xl md:text-[17px] md:leading-[24.65px]">
            {/* Slideshow Container */}
            <div className="relative text-sm box-border caret-transparent w-full h-[400px] md:text-[17px] md:h-[600px] md:leading-[24.65px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words top-0 left-0 w-full h-[400px] md:text-[17px] md:h-[600px] md:leading-[24.65px] transition-opacity duration-1000 ease-in-out ${
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
                  className={`text-sm box-border caret-transparent leading-[20.3px] break-words w-3 h-3 rounded-full transition-all md:text-[17px] md:leading-[24.65px] md:w-4 md:h-4 ${
                    index === currentIndex
                      ? 'bg-cyan-600 w-8 md:w-10'
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
  );
};
