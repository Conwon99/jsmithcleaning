import React, { useState, useRef, useEffect } from "react";

export const AyrServiceIntro = () => {
  const questions = [
    <>Is moss growing on your roof? We do <span className="text-[#17539B] font-semibold">roof cleaning</span> in Ayr that removes moss and stops it coming back.</>,
    <>Are your gutters blocked? Our <span className="text-[#17539B] font-semibold">gutter cleaning</span> service clears them out and stops overflow problems.</>,
    <>Is your driveway covered in stains? <span className="text-[#17539B] font-semibold">Driveway cleaning</span> makes it look new again.</>,
    <>Are your windows and doors green with algae? <span className="text-[#17539B] font-semibold">UPVC cleaning</span> removes it all safely.</>,
    <>What do you do if your patio's slippery? <span className="text-[#17539B] font-semibold">Patio cleaning</span> makes it safe and clean again.</>,
  ];

  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <section className="relative box-border caret-transparent py-10 md:py-16">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-5">
            <div className="relative box-border caret-transparent w-full mb-8">
              <div className="relative box-border caret-transparent flex flex-col md:flex-row gap-8 items-start">
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div className="relative box-border caret-transparent text-left w-full mb-6">
                    <h2 className="text-neutral-900 text-2xl font-bold not-italic box-border caret-transparent leading-8 font-thiccboi md:text-4xl md:leading-10">
                      Who's the Best Exterior Cleaning Company Near Me in Ayr?
                    </h2>
                  </div>
                  <div className="relative box-border caret-transparent text-left w-full">
                    <ul className="box-border caret-transparent list-none pl-0">
                      {questions.map((question, index) => (
                        <li key={index} className="relative items-center box-border caret-transparent flex justify-start pb-4">
                          <span className="relative box-border caret-transparent flex pr-3.5 flex-shrink-0">
                            <div className="bg-[#17539B] rounded-full w-6 h-6 flex items-center justify-center">
                              <svg className="text-white h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                          </span>
                          <span className="text-sm self-center box-border caret-transparent block leading-6 pl-2 font-figtree md:text-base">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div ref={containerRef} className="relative text-sm box-border caret-transparent w-full leading-[20.3px] break-words overflow-hidden rounded-lg shadow-2xl md:text-[17px] md:leading-[24.65px]" onTouchStart={() => setIsDragging(true)} onTouchEnd={() => setIsDragging(false)} onTouchMove={(e) => { if (!containerRef.current) return; const touch = e.touches[0]; const rect = containerRef.current.getBoundingClientRect(); const x = touch.clientX - rect.left; const percentage = (x / rect.width) * 100; setSliderPosition(Math.max(0, Math.min(100, percentage))); }}>
                    <div className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] md:text-[17px] md:h-[400px] md:leading-[24.65px]" style={{ backgroundImage: `url('${encodeURI("/jsmith-softwashing-before.webp")}')` }} />
                    <div className="absolute text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words top-0 left-0 w-full h-[300px] md:text-[17px] md:h-[400px] md:leading-[24.65px]" style={{ backgroundImage: `url('${encodeURI("/af1.png")}')`, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} />
                    <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 md:text-[17px] md:leading-[24.65px]" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }} onMouseDown={handleMouseDown}>
                      <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize md:text-[17px] md:leading-[24.65px]">
                        <div className="flex gap-1"><div className="w-1 h-4 bg-[#17539B] rounded"></div><div className="w-1 h-4 bg-[#17539B] rounded"></div></div>
                      </div>
                    </div>
                    <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words bottom-0 left-0 right-0 flex justify-between px-4 py-3 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-4 pointer-events-none">
                      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words bg-black/70 px-4 py-2 rounded md:text-[17px] md:leading-[24.65px]"><h4 className="text-white text-lg font-bold box-border caret-transparent leading-6 break-words uppercase font-thiccboi md:text-xl md:leading-7">Before</h4></div>
                      <div className="text-sm box-border caret-transparent leading-[20.3px] break-words bg-[#17539B]/90 px-4 py-2 rounded md:text-[17px] md:leading-[24.65px]"><h4 className="text-white text-lg font-bold box-border caret-transparent leading-6 break-words uppercase font-thiccboi md:text-xl md:leading-7">After</h4></div>
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
