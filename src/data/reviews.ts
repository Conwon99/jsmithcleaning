export interface Review {
  author: string;
  rating: number;
  text: string;
}

/** The site's real written testimonials, also shown in ReviewsSection. */
export const reviews: Review[] = [
  {
    author: "Andrew Shearer",
    rating: 5,
    text: "Had Jason and the team round to give the drive and roof a deep clean. The workmanship was great, he knew his stuff. The outcome was outstanding, the roof was left looking like new. 5 star service, will definitely use again in the future.",
  },
  {
    author: "Robert Smith",
    rating: 5,
    text: "Had this company twice doing jobs for me (monoblock drive) and (roof cleaned) great finish on both jobs, roof looks like brand new, (best looking roof in the street now) decent and fair prices and Jason is a lovely and accommodating guy. Keep up the good work and I will definitely be using them again.",
  },
  {
    author: "Dylan Hall",
    rating: 5,
    text: "Thanks to Jason at J Smith Power Washing. Got the boys in to power wash the tarmac at my back door as it was covered in green moss and the result came up great, would highly recommend and will definitely be using the boys again. Thanks again for your services.",
  },
  {
    author: "Darren",
    rating: 5,
    text: "Used this company to do a roof clean and they done a great job at a good price and got it done quickly, they also went over and above what we spoke about when they viewed the job initially by doing extra cleaning in and around the areas we agreed on. I would definitely recommend them.",
  },
];

/** Total review count on the business's Google Business Profile (see SEO-DECISIONS.md). */
export const TOTAL_REVIEW_COUNT = 17;
