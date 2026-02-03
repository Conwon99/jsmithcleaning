import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="relative bg-[url('https://www.frostyscleaningservices.co.uk/wp-content/uploads/2024/08/company-vehicle.jpg')] bg-no-repeat bg-cover box-border caret-transparent bg-center py-[50px]">
      <div className="absolute bg-black box-border caret-transparent h-full opacity-40 w-full left-0 top-0"></div>
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1400px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full px-[15px] py-0 md:p-2.5">
            <TestimonialCard
              slideNumber="1"
              imageUrl="https://c.animaapp.com/mjg54wmywipTJF/assets/brick-wall-pressure-washing-150x150.jpg"
              name="Robert Mccormack"
              reviewSource="Google Review"
              testimonialText="Had Frosty’s Cleaning Services out today carrying out a render clean at my property. Our exterior walls had green algae on them. The two guys worked solidly for about 3hrs and the result was amazing, walls were as good as new. Very friendly chaps and I would not hesitate using Frosty’s again. Would definitely recommend their cleaning services."
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full px-[15px] py-0 md:p-2.5">
            <TestimonialCard
              slideNumber="1"
              imageUrl="https://c.animaapp.com/mjg54wmywipTJF/assets/brick-wall-pressure-washing-150x150.jpg"
              name="Jim Ferguson"
              reviewSource="Google Review"
              testimonialText="Frostys cleaned my roof, everything went smoothly. The squad turned up on the day at the appointed time and got down to business. The guys were friendly and worked in a professional manner. they completed the job and tidied up before leaving. They are due to return in approx 8 weeks to check things out and clean the gutters again. I am very pleased with the results so far."
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full px-[15px] py-0 md:p-2.5">
            <TestimonialCard
              slideNumber="1"
              imageUrl="https://c.animaapp.com/mjg54wmywipTJF/assets/brick-wall-pressure-washing-150x150.jpg"
              name="Susan Maitland"
              reviewSource="Google Review"
              testimonialText={
                <>
                  Fantastic service throughout. Roof looks great after being
                  scraped and sprayed with biocide. Gutters cleaned and a
                  (previously unknown) issue with a blocked downpipe all fixed.
                  I was kept informed at all times despite not being at home
                  during the works. I&apos;d recommend with great confidence{" "}
                  <img
                    role="img"
                    alt="👌"
                    src="https://c.animaapp.com/mjg54wmywipTJF/assets/1f44c.svg"
                    className="text-base box-border caret-transparent h-4 leading-6 max-w-full w-4 mx-[1.12px] md:text-lg md:h-[18px] md:leading-[27px] md:w-[18px] md:mx-[1.26px]"
                  />
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
