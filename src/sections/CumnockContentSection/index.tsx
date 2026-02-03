import React from "react";

const LOC = "Cumnock";
const AREAS = "Cumnock, Auchinleck, and Ochiltree";
const WEATHER = "East Ayrshire weather means moss and algae build up on roofs and gutters";

export const CumnockContentSection = () => (
  <section className="relative bg-white py-12 md:py-16">
    <div className="max-w-[1300px] mx-auto px-5">
      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">It's a common problem in {LOC}. You look up at your roof and see green moss spreading. Your gutters overflow when it rains. Your driveway's covered in stains. You know it needs cleaning, but who do you call?</p>
          <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We're J Smith Exterior Cleaning. We've been helping homeowners in {AREAS}, and the surrounding areas keep their properties looking good for years. We know the local weather. We know the common problems. And we know how to fix them.</p>
        </div>
        <div className="space-y-8">
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Roof Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">{WEATHER}. If you don't clean it, the moss can damage your tiles. It can block gutters.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">Our roof cleaning service removes all that moss, algae, and lichen. We use a special treatment that kills it and stops it coming back. We work on all types of roofs in {LOC}.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Pressure Washing</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Driveways get dirty. Patios get covered in algae. Pressure washing fixes all of this.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We do pressure washing for driveways, patios, paths around {LOC}. Your surfaces will look like new again.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Soft Washing</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Render, painted walls, UPVC need gentle cleaning. That's what soft washing is for.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">Soft washing removes algae, moss, and dirt without damaging your surfaces. We do a lot of soft washing work in {LOC}.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Gutter Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Blocked gutters cause big problems. In {LOC}, with the rain we get, keeping gutters clear is really important.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We clean out all the leaves, moss, and debris. Regular gutter cleaning stops expensive problems later.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Driveway Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Your driveway's the first thing people see. Driveway cleaning fixes this.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We clean all types of driveways in {LOC}. Your driveway will look clean and well-maintained again.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Patio Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Patios get slippery when covered in algae. Patio cleaning fixes all of this.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We clean patios. Your patio will be safe to walk on again.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Brick Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Brickwork gets dirty over time. Brick cleaning brings it back to life.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We clean brickwork carefully. Your brickwork will look fresh and clean again.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">Conservatory Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">Conservatories get dirty. Conservatory cleaning fixes this.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We clean conservatories inside and out. Your conservatory will be bright and clean again.</p></div>
          <div><h2 className="text-neutral-900 text-2xl font-bold leading-8 mt-8 mb-4 font-thiccboi md:text-3xl md:leading-9">UPVC Cleaning</h2><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">UPVC windows and doors get dirty. UPVC cleaning makes them look new again.</p><p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">We clean UPVC using soft washing. Your windows and doors will look clean and bright again.</p></div>
          <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
            <h3 className="text-neutral-900 text-xl font-bold leading-7 mt-4 mb-4 font-thiccboi md:text-2xl md:leading-8">Why Exterior Cleaning Matters in {LOC}</h3>
            <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">{WEATHER}. If you don't keep on top of cleaning, your property will look run down quickly.</p>
            <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8 mb-4">We work all over {LOC} - Auchinleck, Ochiltree, and the surrounding areas. We know the local property types. We understand this.</p>
            <p className="text-neutral-700 text-base leading-7 font-figtree md:text-lg md:leading-8">Regular exterior cleaning protects your property. That's why so many {LOC} homeowners trust us.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
