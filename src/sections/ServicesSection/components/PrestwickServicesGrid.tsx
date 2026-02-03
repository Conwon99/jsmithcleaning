import React from "react";

type ServiceGridItem = { title: string; imageUrl: string; path: string; description: string; };

const services: ServiceGridItem[] = [
  { title: "ROOF CLEANING", imageUrl: "/services/roofcleaning.png", path: "/prestwick/roof-cleaning", description: "Professional roof cleaning to remove moss, algae, and dirt, protecting your roof and enhancing your property's appearance." },
  { title: "PRESSURE WASHING", imageUrl: "/services/pressurewashing.png", path: "/prestwick/pressure-washing", description: "Powerful pressure washing services for driveways, patios, and exterior surfaces to remove tough stains and dirt." },
  { title: "PVC/GUTTER CLEANING", imageUrl: "/Gutter.png", path: "/prestwick/gutter-cleaning", description: "Professional PVC window, door, and frame cleaning combined with comprehensive gutter cleaning and maintenance services." },
  { title: "SOFTWASHING", imageUrl: "/SOFTWASH1.jpeg", path: "/prestwick/soft-washing", description: "Gentle yet effective soft washing for delicate surfaces, using eco-friendly solutions to safely clean your property." },
];

export const PrestwickServicesGrid = () => (
  <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
    <div className="text-sm box-border caret-transparent grid grid-cols-1 gap-5 leading-[20.3px] break-words px-5 py-5 md:text-[17px] md:grid-cols-3 md:gap-8 md:leading-[24.65px] md:px-0 md:py-10">
      {services.map((service, index) => (
        <a key={index} href={service.path} className="text-sm box-border caret-transparent relative group leading-[20.3px] break-words overflow-hidden md:text-[17px] md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
            <div className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent relative block leading-[20.3px] break-words w-full aspect-square transition-transform duration-300 ease-in-out group-hover:scale-110 md:text-[17px] md:leading-[24.65px]" style={{ backgroundImage: `url('${encodeURI(service.imageUrl)}')` }}>
              <div className="text-sm box-border caret-transparent absolute bottom-0 left-0 right-0 bg-[#17539B] leading-[20.3px] break-words flex items-center justify-between px-4 py-3 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-4">
                <h3 className="text-white text-lg font-bold box-border caret-transparent leading-[24px] break-words uppercase font-thiccboi md:text-xl md:leading-[28px]">{service.title}</h3>
                <svg className="text-white w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div className="text-sm box-border caret-transparent bg-white leading-[20.3px] break-words px-4 py-4 md:text-[17px] md:leading-[24.65px] md:px-5 md:py-5">
              <p className="text-neutral-700 text-sm box-border caret-transparent leading-5 break-words font-figtree md:text-base md:leading-6">{service.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);
