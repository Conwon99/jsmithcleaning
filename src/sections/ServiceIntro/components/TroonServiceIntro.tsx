import React, { useState, useRef, useEffect } from "react";

export const TroonServiceIntro = () => {
  const questions = [
    <>Is moss growing on your roof? We do <span className="text-[#17539B] font-semibold">roof cleaning</span> in Troon that removes moss and stops it coming back.</>,
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
      setSliderPosition(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
    };
    if (isDragging) { document.addEventListener("mousemove", handleMouseMove); document.addEventListener("mouseup", handleMouseUp); return () => { document.removeEventListener("mousemove", handleMouseMove); document.removeEventListener("mouseup", handleMouseUp); }; }
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
                    <h2 className="text-neutral-900 text-2xl font-bold not-italic box-border caret-transparent leading-8 font-thiccboi md:text-4xl md:leading-10">Who's the Best Exterior Cleaning Company Near Me in Troon?</h2>
                  </div>
                  <ul className="box-border caret-transparent list-none pl-0">
                    {questions.map((q, i) => (
                      <li key={i} className="relative items-center box-border caret-transparent flex justify-start pb-4">
                        <span className="relative box-border caret-transparent flex pr-3.5 flex-shrink-0"><div className="bg-[#17539B] rounded-full w-6 h-6 flex items-center justify-center"><svg className="text-white h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div></span>
                        <span className="text-sm self-center box-border caret-transparent block leading-6 pl-2 font-figtree md:text-base">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative box-border caret-transparent flex flex-col w-full md:w-1/2">
                  <div ref={containerRef} className="relative overflow-hidden rounded-lg shadow-2xl w-full h-[300px] md:h-[400px]" onTouchStart={() => setIsDragging(true)} onTouchEnd={() => setIsDragging(false)} onTouchMove={(e) => { if (!containerRef.current) return; const rect = containerRef.current.getBoundingClientRect(); setSliderPosition(Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100))); }}>
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${encodeURI("/jsmith-softwashing-before.webp")}')` }} />
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${encodeURI("/jsmith-softwashing-render.webp")}')`, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} />
                    <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }} onMouseDown={handleMouseDown}>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"><div className="flex gap-1"><div className="w-1 h-4 bg-[#17539B] rounded"></div><div className="w-1 h-4 bg-[#17539B] rounded"></div></div></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-3 pointer-events-none">
                      <div className="bg-black/70 px-4 py-2 rounded"><h4 className="text-white font-bold uppercase">Before</h4></div>
                      <div className="bg-[#17539B]/90 px-4 py-2 rounded"><h4 className="text-white font-bold uppercase">After</h4></div>
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
