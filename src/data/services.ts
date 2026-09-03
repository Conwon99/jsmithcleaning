export interface Service {
  slug: string;
  name: string;
  /** Before/after component to use: "roof" | "patio" (until dedicated photo sets exist per service) */
  beforeAfter: "roof" | "patio";
  heroImage: string;
  serviceImage: string;
  /** Opening problem statement in the hero, e.g. "Your roof's covered in green moss. It's spreading." */
  heroProblem: string;
  /** 6 checklist questions; use {town} where the town name should be inserted */
  checklist: string[];
  methodName: string;
  serviceDescription: string;
  methodBenefitsHeading: string;
  methodBenefits: string;
  whyChoose: string;
  /** Why this problem builds up locally, e.g. "the heavy rain we get here means moss grows fast" */
  localReason: string;
  /** Consequence of leaving it, 2-3 short sentences */
  localConsequence: string;
  /** "Step 3: We Clean Your X" process step description */
  processStep3: string;
  finalCta: string;
}

export const services: Service[] = [
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    beforeAfter: "roof",
    heroImage: "/services/roofcleaning-hero.webp",
    serviceImage: "/services/roofcleaning.webp",
    heroProblem: "Your roof's covered in green moss. It's spreading.",
    checklist: [
      "Is moss growing on your roof in {town}?",
      "What do you do if your roof's covered in algae?",
      "Worried about moss damaging your tiles?",
      "Want someone who knows {town} roofs?",
      "Need your roof to last longer?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "Biocide Treatment",
    serviceDescription:
      "Our professional roof cleaning service uses specialised biocide treatments that safely and effectively remove moss, algae, lichen, and other organic growth from your roof. The biocide treatment not only cleans your roof but also prevents future growth, ensuring your roof stays clean and protected for years to come.",
    methodBenefitsHeading: "Biocide Treatment Benefits",
    methodBenefits:
      "The biocide treatment we apply after cleaning prevents moss, algae, and lichen from returning, protecting your roof and extending its lifespan. This treatment is safe for your roofing materials and the environment, providing long-term protection for your property.",
    whyChoose:
      "Roof cleaning with biocide treatment makes your roof last longer. It stops moss coming back. It protects your property. Call J Smith Exterior Cleaning today for a free quote. We'll get your roof looking good again.",
    localReason: "the heavy rain we get here means moss grows fast",
    localConsequence: "it damages your tiles. It blocks your gutters. It makes your house look old.",
    processStep3: "We clean your roof properly. We remove all the moss, algae, and lichen. We get the job done right. Your roof will look clean again.",
    finalCta:
      "Professional roof cleaning with biocide treatment extends the life of your roof and prevents future growth. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "brick-cleaning",
    name: "Brick Cleaning",
    beforeAfter: "roof",
    heroImage: "/services/brickcleaning.webp",
    serviceImage: "/services/brickcleaning.webp",
    heroProblem: "Your brickwork's covered in black staining and green algae. It's spreading.",
    checklist: [
      "Is your brickwork covered in algae in {town}?",
      "What do you do if your walls are stained black?",
      "Worried about damp getting into your brickwork?",
      "Want someone who knows {town} sandstone and brick?",
      "Need your brickwork to look new again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "Soft Wash Treatment",
    serviceDescription:
      "Our professional brick cleaning service uses gentle soft washing techniques and specialised biocide treatments that safely remove algae, moss, lichen, and black staining from brick and sandstone. The treatment cleans without damaging pointing or masonry, and helps prevent regrowth so your walls stay clean for longer.",
    methodBenefitsHeading: "Soft Wash Treatment Benefits",
    methodBenefits:
      "The biocide treatment we apply after washing prevents algae, moss, and lichen from returning, protecting your brickwork and pointing. It's safe for sandstone, brick, and render, and gives long-term protection against Ayrshire's damp weather.",
    whyChoose:
      "Brick cleaning with soft washing makes your property look years younger without risking the masonry. It stops staining coming back. Call J Smith Exterior Cleaning today for a free quote. We'll get your brickwork looking good again.",
    localReason: "the damp Ayrshire climate means algae and black staining build up fast on brick and sandstone",
    localConsequence: "it traps moisture against the wall. It damages pointing over time. It makes your house look neglected.",
    processStep3: "We clean your brickwork properly. We remove all the algae, moss, and staining. We get the job done right. Your walls will look clean again.",
    finalCta:
      "Professional brick cleaning with soft wash treatment protects your pointing and masonry and prevents future staining. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "conservatory-cleaning",
    name: "Conservatory Cleaning",
    beforeAfter: "roof",
    heroImage: "/services/conservatorycleaning.webp",
    serviceImage: "/services/conservatorycleaning.webp",
    heroProblem: "Your conservatory roof's covered in algae and grime, blocking out the light.",
    checklist: [
      "Is your conservatory roof letting in less light in {town}?",
      "What do you do if your conservatory frames are green with algae?",
      "Worried about streaky, patchy conservatory glass?",
      "Want someone who knows {town} conservatories?",
      "Need your conservatory looking bright again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "Specialist Glass & Frame Clean",
    serviceDescription:
      "Our professional conservatory cleaning service safely removes algae, moss, and grime from your roof panels, frames, and glass using specialist cleaning solutions. We restore natural light and give your conservatory a streak-free finish without scratching the glass or damaging seals.",
    methodBenefitsHeading: "Specialist Clean Benefits",
    methodBenefits:
      "Our specialist cleaning solution cuts through built-up grime and algae without harsh chemicals that can damage seals or frames. It leaves your glass streak-free and helps slow down regrowth, keeping your conservatory brighter for longer.",
    whyChoose:
      "Conservatory cleaning brings the light back into your room and stops algae building up on the roof. It protects your seals and frames. Call J Smith Exterior Cleaning today for a free quote. We'll get your conservatory looking bright again.",
    localReason: "Ayrshire's damp weather means algae builds up fast on conservatory roofs",
    localConsequence: "it blocks out natural light. It leaves your glass looking dirty and streaked. It makes the room feel darker and colder.",
    processStep3: "We clean your conservatory properly. We remove all the algae, moss, and grime. We get the job done right. Your conservatory will look bright again.",
    finalCta:
      "Professional conservatory cleaning restores natural light and protects your frames and seals. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "driveway-cleaning",
    name: "Driveway Cleaning",
    beforeAfter: "roof",
    heroImage: "/services/drivewaycleaning.webp",
    serviceImage: "/services/drivewaycleaning.webp",
    heroProblem: "Your driveway's covered in black stains, moss, and weeds. It's an eyesore.",
    checklist: [
      "Is your driveway covered in black stains in {town}?",
      "What do you do if moss and weeds keep coming back?",
      "Worried about oil stains ruining your driveway?",
      "Want someone who knows {town} block paving and tarmac?",
      "Need your driveway looking new again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "High-Pressure Cleaning",
    serviceDescription:
      "Our professional driveway cleaning service uses high-pressure washing to safely and effectively remove dirt, moss, algae, oil stains, and weeds from block paving, tarmac, and concrete. We restore your driveway's original colour and can finish with sand re-jointing and a sealant on request.",
    methodBenefitsHeading: "High-Pressure Cleaning Benefits",
    methodBenefits:
      "High-pressure cleaning lifts ground-in dirt and stains that a hose or brush can't shift. It clears moss and weeds from between the joints, and an optional sealant treatment helps stop them coming back, keeping your driveway looking newer for longer.",
    whyChoose:
      "Driveway cleaning brings back your kerb appeal and stops moss and weeds taking hold again. It protects your paving. Call J Smith Exterior Cleaning today for a free quote. We'll get your driveway looking good again.",
    localReason: "Ayrshire's wet weather means moss, algae, and weeds build up fast between paving joints",
    localConsequence: "it makes your driveway slippery. It looks unkempt. It lowers your property's kerb appeal.",
    processStep3: "We clean your driveway properly. We remove all the dirt, moss, and staining. We get the job done right. Your driveway will look clean again.",
    finalCta:
      "Professional driveway cleaning with high-pressure washing restores your kerb appeal and helps prevent moss and weeds returning. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    beforeAfter: "roof",
    heroImage: "/services/guttercleaning.webp",
    serviceImage: "/services/guttercleaning.webp",
    heroProblem: "Your gutters are blocked with leaves and moss. Water's overflowing every time it rains.",
    checklist: [
      "Are your gutters overflowing every time it rains in {town}?",
      "What do you do if leaves and moss keep blocking your gutters?",
      "Worried about damp getting into your walls?",
      "Want someone who knows {town} properties?",
      "Need your gutters clear before winter?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "High-Reach Vacuum Clearance",
    serviceDescription:
      "Our professional gutter cleaning service uses high-reach vacuum equipment to safely clear leaves, moss, and debris from your gutters and downpipes, all from ground level with no ladders needed. We check for blockages and take before-and-after photos so you can see the job's done properly.",
    methodBenefitsHeading: "Gutter Clearance Benefits",
    methodBenefits:
      "Clear gutters stop water overflowing down your walls and pooling at your foundations. Removing built-up debris prevents blockages, protects your fascias and soffits, and reduces the risk of damp getting into your property.",
    whyChoose:
      "Gutter cleaning stops overflowing water damaging your walls and foundations. It protects your property from damp. Call J Smith Exterior Cleaning today for a free quote. We'll get your gutters flowing freely again.",
    localReason: "Ayrshire's trees and heavy rain mean leaves and moss block gutters fast",
    localConsequence: "it causes overflowing water down your walls. It damages your fascias and soffits. It leads to damp inside your property.",
    processStep3: "We clear your gutters properly. We remove all the leaves, moss, and debris. We get the job done right. Your gutters will flow freely again.",
    finalCta:
      "Professional gutter cleaning clears blockages and protects your property from water damage and damp. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "patio-cleaning",
    name: "Patio Cleaning",
    beforeAfter: "patio",
    heroImage: "/services/patiocleaning.webp",
    serviceImage: "/services/patiocleaning.webp",
    heroProblem: "Your patio's covered in green algae and black grime. It's slippery and looks awful.",
    checklist: [
      "Is your patio green and slippery in {town}?",
      "What do you do if algae keeps coming back on your slabs?",
      "Worried about weeds growing between your patio joints?",
      "Want someone who knows {town} patios and outdoor spaces?",
      "Need your patio looking new again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "High-Pressure Cleaning",
    serviceDescription:
      "Our professional patio cleaning service uses high-pressure washing to safely and effectively remove dirt, algae, moss, and weeds from slabs, block paving, and natural stone. We restore your patio's original colour and can add sand re-jointing and a sealant to keep it looking newer for longer.",
    methodBenefitsHeading: "High-Pressure Cleaning Benefits",
    methodBenefits:
      "High-pressure cleaning lifts ground-in algae and grime that a hose or brush can't shift. It clears weeds from between the joints, and an optional sealant treatment helps stop moss and algae coming back.",
    whyChoose:
      "Patio cleaning makes your outdoor space safe and enjoyable again and stops algae taking hold. It protects your slabs. Call J Smith Exterior Cleaning today for a free quote. We'll get your patio looking good again.",
    localReason: "Ayrshire's damp weather means algae and moss build up fast on patios",
    localConsequence: "it makes the surface slippery and dangerous. It looks unkempt. It ruins your outdoor space.",
    processStep3: "We clean your patio properly. We remove all the algae, moss, and staining. We get the job done right. Your patio will look clean again.",
    finalCta:
      "Professional patio cleaning with high-pressure washing makes your outdoor space safe again and helps prevent algae returning. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "patio-driveway-cleaning",
    name: "Patio & Driveway Cleaning",
    beforeAfter: "patio",
    heroImage: "/services/pressurewashing.webp",
    serviceImage: "/services/pressurewashing.webp",
    heroProblem: "Your patio and driveway are covered in algae, moss, and stains. It's letting your property down.",
    checklist: [
      "Are your patio and driveway both looking tired in {town}?",
      "What do you do if algae and moss cover your outdoor surfaces?",
      "Worried about weeds taking over your paving?",
      "Want one team to sort your whole outdoor space?",
      "Need your patio and driveway looking new again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "High-Pressure Cleaning",
    serviceDescription:
      "Our combined patio and driveway cleaning service uses high-pressure washing to clean your whole outdoor space in one visit - block paving, tarmac, slabs, and natural stone. We remove dirt, algae, moss, and stains, and can finish with sand re-jointing and a sealant across both areas.",
    methodBenefitsHeading: "High-Pressure Cleaning Benefits",
    methodBenefits:
      "Cleaning your patio and driveway together saves you time and gives your whole property a consistent, freshly cleaned look. High-pressure washing lifts ground-in dirt and stains, and an optional sealant treatment helps keep both surfaces looking newer for longer.",
    whyChoose:
      "Patio and driveway cleaning transforms your whole outdoor space in one visit and stops algae and weeds taking hold again. Call J Smith Exterior Cleaning today for a free quote. We'll get your property looking good again.",
    localReason: "Ayrshire's wet weather means algae, moss, and weeds build up fast across paved areas",
    localConsequence: "it makes surfaces slippery and unsafe. It looks unkempt. It lowers your property's kerb appeal.",
    processStep3: "We clean your patio and driveway properly. We remove all the dirt, moss, and staining. We get the job done right. Your outdoor space will look clean again.",
    finalCta:
      "Professional patio and driveway cleaning restores your whole outdoor space and helps prevent moss and algae returning. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    beforeAfter: "roof",
    heroImage: "/services/pressurewashing.webp",
    serviceImage: "/services/pressurewashing.webp",
    heroProblem: "Your outdoor surfaces are covered in dirt, algae, and grime. It's time for a proper clean.",
    checklist: [
      "Are your outdoor surfaces looking dirty and neglected in {town}?",
      "What do you do if algae keeps building up on hard surfaces?",
      "Worried about stains that won't shift with a hose?",
      "Want someone who knows {town} properties?",
      "Need your property looking its best again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "High-Pressure Cleaning",
    serviceDescription:
      "Our professional pressure washing service safely and effectively removes dirt, algae, moss, and grime from driveways, patios, paths, walls, and other hard surfaces. We use the right pressure and technique for each surface, so you get a thorough clean without any damage.",
    methodBenefitsHeading: "High-Pressure Cleaning Benefits",
    methodBenefits:
      "Pressure washing lifts ground-in dirt and staining that ordinary cleaning can't shift. It's fast, effective, and works on most hard surfaces around your property, giving an instant improvement to how your property looks.",
    whyChoose:
      "Pressure washing gives your property an instant refresh and stops dirt and algae building up. It protects your surfaces. Call J Smith Exterior Cleaning today for a free quote. We'll get your property looking good again.",
    localReason: "Ayrshire's damp weather means dirt and algae build up fast on hard surfaces",
    localConsequence: "it makes surfaces look neglected. It can become slippery underfoot. It lowers your property's kerb appeal.",
    processStep3: "We clean your surfaces properly. We remove all the dirt, moss, and staining. We get the job done right. Your property will look clean again.",
    finalCta:
      "Professional pressure washing gives your property an instant refresh and helps prevent dirt and algae returning. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    beforeAfter: "roof",
    heroImage: "/jsmith-softwashing-after.webp",
    serviceImage: "/jsmith-softwashing-after.webp",
    heroProblem: "Your render, walls, or roof are covered in algae and green staining. Pressure washing alone won't fix it.",
    checklist: [
      "Is your render or walls covered in green algae in {town}?",
      "What do you do if staining keeps coming back after cleaning?",
      "Worried about pressure washing damaging delicate surfaces?",
      "Want someone who knows {town} render and cladding?",
      "Need a gentler clean that actually lasts?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "Soft Wash Biocide Treatment",
    serviceDescription:
      "Our professional soft washing service uses low-pressure application and specialised biocide treatments to safely remove algae, moss, lichen, and grime from render, cladding, walls, and delicate surfaces. Unlike high-pressure washing, soft washing cleans gently without risking damage.",
    methodBenefitsHeading: "Soft Wash Treatment Benefits",
    methodBenefits:
      "The biocide treatment we apply after washing kills algae and moss at the root and helps prevent it returning, giving longer-lasting results than pressure washing alone. It's safe for render, cladding, and delicate surfaces.",
    whyChoose:
      "Soft washing cleans gently without the risk of damage that high pressure can cause. It stops staining coming back for longer. Call J Smith Exterior Cleaning today for a free quote. We'll get your property looking good again.",
    localReason: "Ayrshire's damp climate means algae and green staining build up fast on render and cladding",
    localConsequence: "it makes your property look neglected. It can trap moisture against the wall. It gets worse the longer it's left.",
    processStep3: "We clean your walls properly. We remove all the algae, moss, and staining. We get the job done right. Your property will look clean again.",
    finalCta:
      "Professional soft washing with biocide treatment gives longer-lasting results than pressure washing alone. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
  {
    slug: "upvc-cleaning",
    name: "uPVC Cleaning",
    beforeAfter: "roof",
    heroImage: "/services/upvccleaning.webp",
    serviceImage: "/services/upvccleaning.webp",
    heroProblem: "Your uPVC windows, frames, and fascias have gone grey and grimy. They've lost their shine.",
    checklist: [
      "Have your uPVC frames gone grey and dull in {town}?",
      "What do you do if your window frames won't come clean?",
      "Worried about black mould around your window seals?",
      "Want someone who knows {town} uPVC and fascias?",
      "Need your windows looking bright white again?",
      "Looking for safe cleaning that works?",
    ],
    methodName: "Specialist uPVC Restoration Clean",
    serviceDescription:
      "Our professional uPVC cleaning service safely removes grime, black mould, and discolouration from window frames, doors, fascias, and soffits using specialist cleaning solutions. We restore that bright white finish without scratching or damaging the plastic.",
    methodBenefitsHeading: "uPVC Restoration Benefits",
    methodBenefits:
      "Our specialist cleaning solution cuts through built-up grime and mould that ordinary cleaning products can't shift. It restores your uPVC's original white finish and helps slow down discolouration, keeping your windows looking brighter for longer.",
    whyChoose:
      "uPVC cleaning brings back that bright white finish and boosts your property's kerb appeal. It protects your frames from long-term discolouration. Call J Smith Exterior Cleaning today for a free quote. We'll get your uPVC looking good again.",
    localReason: "Ayrshire's damp weather means grime and black mould build up fast on uPVC",
    localConsequence: "it turns your frames grey. It makes your windows look dirty even after rain. It lowers your property's kerb appeal.",
    processStep3: "We clean your uPVC properly. We remove all the grime, mould, and discolouration. We get the job done right. Your frames will look clean again.",
    finalCta:
      "Professional uPVC cleaning restores that bright white finish and helps prevent discolouration returning. Contact J Smith Exterior Cleaning today for a free, no-obligation quote and restore your property's appearance.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** 2-3 other services to cross-link from a given service's pages */
export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
