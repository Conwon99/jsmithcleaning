import React from "react";

interface LocationContextProps {
  locationName: string;
  neighborhoods: string[];
  transportLinks: string[];
  propertyTypes: string[];
  landmarks: string[];
  weatherNote: string;
  cleaningNeeds: string[];
  population?: string;
  context?: string;
}

export const LocationContext: React.FC<LocationContextProps> = ({
  locationName,
  neighborhoods,
  transportLinks,
  propertyTypes,
  landmarks,
  weatherNote,
  cleaningNeeds,
  population,
  context
}) => {
  return (
    <section className="relative bg-neutral-50 py-12 md:py-16">
      <div className="max-w-[1300px] mx-auto px-5">
        <div className="mb-8">
          <h2 className="text-neutral-900 text-3xl font-bold font-thiccboi mb-4 text-center md:text-4xl">
            About {locationName}
          </h2>
          {population && (
            <p className="text-neutral-700 text-base leading-6 font-figtree mb-4 text-center max-w-3xl mx-auto">
              {context && <>{context} </>}
              {population}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-neutral-900 text-xl font-bold font-thiccboi mb-4">
              Areas We Serve in {locationName}
            </h3>
            <p className="text-neutral-700 text-sm leading-6 font-figtree mb-4">
              We provide professional exterior cleaning services throughout {locationName}, including {neighborhoods.join(', ')}, and surrounding areas.
            </p>
            <h3 className="text-neutral-900 text-xl font-bold font-thiccboi mb-4 mt-6">
              Easy Access & Transport
            </h3>
            <p className="text-neutral-700 text-sm leading-6 font-figtree">
              {locationName} is well-connected with {transportLinks.join(', ')} making our services easily accessible to residents and businesses.
            </p>
            <h3 className="text-neutral-900 text-xl font-bold font-thiccboi mb-4 mt-6">
              Property Types
            </h3>
            <p className="text-neutral-700 text-sm leading-6 font-figtree">
              {locationName} features diverse property types including {propertyTypes.join(', ')}.
            </p>
          </div>
          
          {/* Right Column */}
          <div>
            <h3 className="text-neutral-900 text-xl font-bold font-thiccboi mb-4">
              Why Exterior Cleaning Matters in {locationName}
            </h3>
            <p className="text-neutral-700 text-sm leading-6 font-figtree mb-4">
              {weatherNote} This creates specific cleaning needs - from {cleaningNeeds.join(' to ')}. Our expert team understands the unique challenges of maintaining {propertyTypes[0]} and {propertyTypes[1]} properties in {locationName}.
            </p>
            <h3 className="text-neutral-900 text-xl font-bold font-thiccboi mb-4 mt-6">
              Local Landmarks & Areas
            </h3>
            <p className="text-neutral-700 text-sm leading-6 font-figtree">
              From {landmarks.join(' to ')} to residential areas, we help maintain and protect properties throughout {locationName} with professional cleaning services tailored to local conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
