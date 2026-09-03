export interface Faq {
  question: string;
  answer: string;
}

/** 4 FAQs per service. Use {town} where the town name should be inserted. */
const serviceFaqs: Record<string, Faq[]> = {
  "roof-cleaning": [
    { question: "How often should I get my roof cleaned in {town}?", answer: "Most {town} properties need roof cleaning every 2-3 years. Ayrshire's damp climate means moss and algae build up faster than in drier parts of the country, so roofs in exposed or heavily shaded spots may need cleaning sooner." },
    { question: "Is roof cleaning safe for my tiles?", answer: "Yes. We use biocide treatment rather than aggressive scraping or high-pressure blasting, which can crack or dislodge tiles. The treatment kills moss and algae at the root without damaging the roofing material underneath." },
    { question: "Will the moss come straight back?", answer: "The biocide treatment we apply after cleaning is designed to prevent regrowth for longer than cleaning alone. Moss and algae will eventually return over time, which is why a 2-3 year cleaning cycle keeps most roofs looking good." },
    { question: "Do you offer free quotes for roof cleaning?", answer: "Yes, every quote is free and no-obligation. Get in touch and we'll arrange a time to have a look and give you an accurate price." },
  ],
  "brick-cleaning": [
    { question: "Can brick cleaning damage my pointing?", answer: "Not with our soft wash method. We use gentle low-pressure application rather than aggressive pressure washing, which is what typically damages pointing and masonry on brick and sandstone." },
    { question: "Will brick cleaning remove black staining completely?", answer: "In most cases, yes. Black staining is usually algae and pollution build-up sitting on the surface, which our soft wash treatment lifts away. Deep-set staining from decades of weathering may lighten significantly rather than disappear entirely." },
    { question: "How long does brick cleaning take in {town}?", answer: "Most residential brick cleaning jobs in {town} take half a day to a full day, depending on the size of the property and how much brickwork needs treating." },
    { question: "Is soft washing suitable for sandstone as well as brick?", answer: "Yes, our soft wash treatment is safe for sandstone, brick, and render. We adjust the approach depending on the surface to make sure it's cleaned without any risk of damage." },
  ],
  "conservatory-cleaning": [
    { question: "Can you clean my conservatory roof without scratching the glass?", answer: "Yes. We use specialist cleaning solutions rather than abrasive tools, so your glass comes away streak-free with no risk of scratching." },
    { question: "How often does a conservatory need cleaning?", answer: "We'd recommend a professional clean once or twice a year in {town}, more often if your conservatory sits under trees or gets a lot of algae growth on the roof panels." },
    { question: "Will you clean the frames as well as the glass?", answer: "Yes, our conservatory cleaning covers roof panels, frames, and glass, so the whole structure gets cleaned in one visit, not just the glazing." },
    { question: "Do you work on all types of conservatory roofs?", answer: "We clean polycarbonate, glass, and tiled conservatory roofs, adjusting our approach to suit the material safely." },
  ],
  "driveway-cleaning": [
    { question: "What surfaces can you clean driveways made from?", answer: "We clean block paving, tarmac, and concrete driveways in {town}. Each surface gets the right pressure and technique so it's cleaned thoroughly without damage." },
    { question: "Can you remove oil stains from my driveway?", answer: "Our high-pressure cleaning removes most oil staining. Very old or deeply soaked-in oil stains may lighten rather than disappear completely, but we'll always give you an honest assessment before starting." },
    { question: "Do you offer sealing after cleaning?", answer: "Yes, we can apply a sealant after cleaning on request, which helps keep your driveway looking newer for longer and makes it easier to keep clean." },
    { question: "How long will my driveway stay clean for?", answer: "It depends on the surface, drainage, and how much shade or tree cover your property has, but most {town} driveways stay looking good for 12-18 months before moss and algae start to build up again." },
  ],
  "gutter-cleaning": [
    { question: "Do you need ladders to clean my gutters?", answer: "No, we use high-reach vacuum equipment operated from ground level, so there's no need for ladders against your property." },
    { question: "How do I know if my gutters need cleaning?", answer: "The clearest sign is water overflowing over the edge of the gutter when it rains, rather than draining through the downpipe. If you've noticed this at your {town} property, it's worth booking a clear." },
    { question: "Can you show me the gutters are actually clear afterwards?", answer: "Yes, we take before-and-after photos of your gutters so you can see the blockages we've cleared, even though they're out of sight from ground level." },
    { question: "How often should gutters be cleaned?", answer: "Once or twice a year is typical, ideally before winter. Properties in {town} with overhanging trees may need clearing more often as leaves and moss build up faster." },
  ],
  "patio-cleaning": [
    { question: "What causes my patio to go green and slippery?", answer: "Algae growth from Ayrshire's damp weather is the main cause. It builds up on slabs, block paving, and natural stone, and becomes slippery and dangerous underfoot if left untreated." },
    { question: "Can you clean the joints between my patio slabs as well?", answer: "Yes, our high-pressure cleaning clears weeds and moss from between the joints, not just the surface of the slabs." },
    { question: "Will cleaning restore my patio's original colour?", answer: "In most cases, yes. High-pressure cleaning lifts the built-up algae, dirt, and staining that's dulled the surface, revealing the original colour of your slabs or paving underneath." },
    { question: "How soon can I use my patio in {town} after cleaning?", answer: "You can usually walk on it once the surface has dried, typically within a few hours. If we've applied a sealant, we'll let you know the recommended drying time before it should be used." },
  ],
  "patio-driveway-cleaning": [
    { question: "Is it cheaper to book patio and driveway cleaning together?", answer: "Yes, cleaning both areas in one visit is more cost-effective than booking them separately, since we're already on site with the equipment set up." },
    { question: "How long does a combined patio and driveway clean take?", answer: "For most {town} properties, a combined clean takes a full day, depending on the total surface area and the level of dirt, algae, and staining." },
    { question: "Can you treat different surface types in the same visit?", answer: "Yes, we regularly clean block paving, tarmac, slabs, and natural stone in the same visit, adjusting pressure and technique for each surface." },
    { question: "Do you offer sealing across both areas?", answer: "Yes, we can apply a sealant to both your patio and driveway after cleaning, giving your whole outdoor space a consistent, protected finish." },
  ],
  "pressure-washing": [
    { question: "What surfaces is pressure washing suitable for?", answer: "Pressure washing works well on driveways, patios, paths, walls, and other hard, durable surfaces. For more delicate surfaces like render or cladding, we'd usually recommend soft washing instead." },
    { question: "Will pressure washing damage my surfaces?", answer: "Not when done properly. We use the right pressure and technique for each surface, which is what separates professional pressure washing from a garden hose attachment that can force water under joints or damage weaker materials." },
    { question: "How much does pressure washing cost in {town}?", answer: "It depends on the size of the area and how dirty the surfaces are. We give every {town} customer a free, no-obligation quote before any work starts." },
    { question: "Do I need to be home while you work?", answer: "No, as long as we have access to the areas that need cleaning and a water supply, you don't need to be home during the visit." },
  ],
  "soft-washing": [
    { question: "What's the difference between soft washing and pressure washing?", answer: "Soft washing uses low-pressure application with a biocide treatment rather than high-pressure water. It's designed for render, cladding, and other surfaces that could be damaged by pressure washing." },
    { question: "Is soft washing safe for render?", answer: "Yes, soft washing is specifically suited to render and roughcast. It cleans algae and staining without the risk of forcing water behind the render or damaging the surface, which pressure washing can do." },
    { question: "How long do the results from soft washing last?", answer: "The biocide treatment kills algae and moss at the root, so results typically last longer than pressure washing alone, often 12-24 months depending on {town}'s weather and how shaded the property is." },
    { question: "Can soft washing be used on more than one surface at once?", answer: "Yes, we regularly soft wash render, cladding, and roofs in the same visit if a property needs more than one area treated." },
  ],
  "upvc-cleaning": [
    { question: "Why have my uPVC frames gone grey?", answer: "uPVC discolours over time from UV exposure, pollution, and grime building up on the surface. Regular cleaning slows this down and restores the original white finish." },
    { question: "Can you remove black mould from around my window seals?", answer: "Yes, our specialist cleaning solution removes black mould and discolouration from uPVC frames and seals without damaging the plastic." },
    { question: "Do you clean fascias and soffits as well as windows?", answer: "Yes, our uPVC cleaning covers window frames, doors, fascias, and soffits, so the whole exterior gets a consistent finish, not just the windows." },
    { question: "How often should uPVC be cleaned in {town}?", answer: "Once or twice a year keeps most {town} properties looking bright. Properties near busy roads or with more grime exposure may benefit from cleaning more often." },
  ],
};

/** Returns 4 FAQs for a service with {town} tokens substituted. */
export function getFaqsForService(serviceSlug: string, town: string): Faq[] {
  const faqs = serviceFaqs[serviceSlug] ?? [];
  return faqs.map((faq) => ({
    question: faq.question.replace(/\{town\}/g, town),
    answer: faq.answer.replace(/\{town\}/g, town),
  }));
}

/** Builds an FAQPage JSON-LD schema object from a list of FAQs. */
export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}
