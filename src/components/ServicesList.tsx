import React from "react";

type ServiceItem = {
  title: string;
  description: string;
  path: string;
};

// Helper function to generate image URL from service title
const getServiceImageUrl = (title: string): string => {
  const filename = title
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/&/g, '')
    .replace(/[^a-z0-9]/g, '');
  
  const serviceImageMap: { [key: string]: string } = {
    'roofcleaning': '/services/roofcleaning.png',
    'softwashing': '/SOFTWASH1.jpeg',
    'pressurewashing': '/services/pressurewashing.png',
    'pvcguttercleaning': '/Gutter.png',
    'patiocleaning': '/services/patiocleaning.jpg',
    'drivewaycleaning': '/services/drivewaycleaning.png',
    'brickcleaning': '/services/brickcleaning.png',
    'conservatorycleaning': '/services/conservatorycleaning.png',
    'upvccleaning': '/services/upvccleaning.jpg',
    'patiodrivewaycleaning': '/services/pressurewashing.png',
  };
  
  return serviceImageMap[filename] || `/services/${filename}.jpg`;
};

const services: ServiceItem[] = [
  {
    title: "Roof Cleaning",
    description: "Professional roof cleaning with biocide treatment to safely remove moss, algae, and grime while protecting your roof for the long term. Our expert team uses specialised equipment and eco-friendly solutions to restore your roof's appearance and extend its lifespan.",
    path: "/roof-cleaning",
  },
  {
    title: "Pressure Washing",
    description: "High-pressure cleaning services for hard surfaces to remove dirt, grime, and stains effectively using professional-grade equipment. Ideal for driveways, patios, paths, and other hard-wearing surfaces that can withstand high-pressure treatment.",
    path: "/pressure-washing",
  },
  {
    title: "PVC/Gutter Cleaning",
    description: "Comprehensive PVC and gutter cleaning services. Professional uPVC cleaning for windows, doors, frames, and fascias to restore their bright white appearance, combined with thorough gutter cleaning to remove leaves, debris, and blockages, preventing water damage and protecting your property.",
    path: "/gutter-cleaning",
  },
  {
    title: "Softwashing",
    description: "Gentle, effective soft washing for render and roughcast that removes algae and carbon using chemicals applied at low pressure, ensuring no damage to your property. Perfect for delicate surfaces that require careful treatment to maintain their integrity.",
    path: "/soft-washing",
  },
  {
    title: "Patio Cleaning",
    description: "Professional patio cleaning to restore your outdoor living spaces. Removes moss, algae, and dirt for a like-new finish. Ideal for stone, concrete, and block paving.",
    path: "/patio-cleaning",
  },
  {
    title: "Driveway Cleaning",
    description: "Expert driveway cleaning to remove oil stains, dirt, and grime. Enhances curb appeal and extends the life of your driveway. Suitable for all driveway surfaces.",
    path: "/driveway-cleaning",
  },
  {
    title: "Brick Cleaning",
    description: "Professional brick and sandstone cleaning using gentle soft washing to remove algae, moss, and black staining without damaging pointing or masonry. Restores brickwork to looking years younger.",
    path: "/brick-cleaning",
  },
  {
    title: "Conservatory Cleaning",
    description: "Specialist conservatory roof, frame, and glass cleaning that removes algae and grime without scratching the glass or damaging seals. Restores natural light and gives a streak-free finish.",
    path: "/conservatory-cleaning",
  },
  {
    title: "uPVC Cleaning",
    description: "Restoration cleaning for uPVC windows, doors, frames, fascias, and soffits, removing grime and black mould to bring back that bright white finish and boost your kerb appeal.",
    path: "/upvc-cleaning",
  },
  {
    title: "Patio & Driveway Cleaning",
    description: "Combined high-pressure cleaning for your whole outdoor space in one visit - block paving, tarmac, slabs, and natural stone. Removes dirt, algae, moss, and stains across both areas.",
    path: "/patio-driveway-cleaning",
  },
];

export const ServicesList = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px]">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const imageUrl = getServiceImageUrl(service.title);
        
        return (
          <div
            key={index}
            className="text-sm box-border caret-transparent flex flex-col md:flex-row items-center gap-8 leading-[20.3px] break-words mb-12 md:text-[17px] md:leading-[24.65px] md:mb-16 last:mb-0"
          >
            {/* Image - Left for even, Right for odd */}
            {isEven ? (
              <>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
                  <div
                    className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] rounded-lg shadow-lg md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                    style={{
                      backgroundImage: `url('${encodeURI(imageUrl)}')`,
                    }}
                  />
                </div>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2">
                  <h3 className="text-neutral-900 text-2xl font-bold box-border caret-transparent leading-[32px] break-words uppercase font-thiccboi mb-4 md:text-3xl md:leading-[42px]">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent leading-[24px] break-words mb-6 md:text-lg md:leading-[26px]">
                    {service.description}
                  </p>
                  <a
                    href={service.path}
                    className="text-white text-base font-bold box-border caret-transparent inline-flex items-center justify-center tracking-wide leading-normal text-center align-middle bg-[#8dae23] hover:bg-[#7a9a1f] hover:shadow-lg transition-all overflow-hidden px-6 py-3 rounded-md shadow-lg whitespace-nowrap md:px-8 md:py-4 md:text-lg w-fit"
                  >
                    Learn More
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2 order-2 md:order-1">
                  <h3 className="text-neutral-900 text-2xl font-bold box-border caret-transparent leading-[32px] break-words uppercase font-thiccboi mb-4 md:text-3xl md:leading-[42px]">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 text-base box-border caret-transparent leading-[24px] break-words mb-6 md:text-lg md:leading-[26px]">
                    {service.description}
                  </p>
                  <a
                    href={service.path}
                    className="text-white text-base font-bold box-border caret-transparent inline-flex items-center justify-center tracking-wide leading-normal text-center align-middle bg-[#8dae23] hover:bg-[#7a9a1f] hover:shadow-lg transition-all overflow-hidden px-6 py-3 rounded-md shadow-lg whitespace-nowrap md:px-8 md:py-4 md:text-lg w-fit"
                  >
                    Learn More
                  </a>
                </div>
                <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words w-full md:text-[17px] md:leading-[24.65px] md:w-1/2 order-1 md:order-2">
                  <div
                    className="text-sm bg-no-repeat bg-cover bg-center box-border caret-transparent block leading-[20.3px] break-words w-full h-[300px] rounded-lg shadow-lg md:text-[17px] md:h-[400px] md:leading-[24.65px]"
                    style={{
                      backgroundImage: `url('${encodeURI(imageUrl)}')`,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

