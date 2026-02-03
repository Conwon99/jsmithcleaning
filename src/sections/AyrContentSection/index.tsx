import React from "react";

export const AyrContentSection = () => {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="max-w-[1300px] mx-auto px-5">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">
              It's a common problem in Ayr. You look up at your roof and see green moss spreading. Your gutters overflow when it rains. Your driveway's covered in stains. You know it needs cleaning, but who do you call?
            </p>
            <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">
              We're J Smith Exterior Cleaning. We serve Ayr and the surrounding areas. We've been helping homeowners in Ayr, Alloway, Prestwick, and Troon keep their properties looking good for years. We know the seaside weather. We know the common problems. And we know how to fix them.
            </p>
          </div>

          <div className="space-y-8">
            {["Roof Cleaning", "Pressure Washing", "Soft Washing", "Gutter Cleaning", "Driveway Cleaning", "Patio Cleaning", "Brick Cleaning", "Conservatory Cleaning", "UPVC Cleaning"].map((service) => (
              <div key={service}>
                <h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">{service}</h2>
                <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">
                  {service === "Roof Cleaning" && "Ayr's seaside location means salt air and moisture help moss and algae thrive on roofs. If you don't clean it, the moss can damage your tiles and block gutters."}
                  {service === "Pressure Washing" && "Driveways get dirty. Patios get covered in algae. We use high-pressure water to blast away dirt, grime, and stains across Ayr and the surrounding areas."}
                  {service === "Soft Washing" && "Render, painted walls, UPVC need gentle cleaning. Soft washing removes algae and moss without damaging surfaces. Perfect for Ayr's mix of property types."}
                  {service === "Gutter Cleaning" && "With Ayr's rainfall and coastal weather, keeping gutters clear is essential. We clean out leaves, moss, and debris so water flows away properly."}
                  {service === "Driveway Cleaning" && "We clean all types of driveways in Ayr - block paving, tarmac, concrete. We remove oil stains, moss, algae, and general dirt."}
                  {service === "Patio Cleaning" && "Patios get slippery when covered in algae. We clean patios using pressure or soft washing depending on the surface. Safe and clean again."}
                  {service === "Brick Cleaning" && "Brickwork gets dirty over time. We clean brickwork carefully using the right methods for your brick type. Fresh and clean again."}
                  {service === "Conservatory Cleaning" && "Conservatories get dirty from algae and dirt. We clean inside and out - glass, frames, gutters. Bright and clean again."}
                  {service === "UPVC Cleaning" && "UPVC windows and doors get covered in green algae. We clean using soft washing. Gentle but effective. Clean and bright again."}
                </p>
                <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">
                  We work across Ayr, Alloway, Prestwick, and Troon. Call us for a free quote. We're fully insured and we know the area.
                </p>
              </div>
            ))}

            <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-neutral-900 text-xl font-bold leading-7 mt-4 mb-4 font-thiccboi md:text-2xl md:leading-8">Why Exterior Cleaning Matters in Ayr</h3>
              <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">
                Ayr's seaside location means salt air, moisture, and high humidity. Moss and algae grow fast here. If you don't keep on top of cleaning, your property will look run down quickly.
              </p>
              <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">
                We work all over Ayr - Alloway, Prestwick, Troon, and the surrounding areas. We know the local property types. Victorian terraces, modern homes, tourist accommodation - we understand the different needs.
              </p>
              <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">
                Regular exterior cleaning protects your property. It stops damage. It keeps your property looking good. That's why so many Ayr homeowners trust us with their exterior cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
