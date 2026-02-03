import { ProcessSteps } from "@/sections/ProcessSection/components/ProcessSteps";

export const ProcessSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent mt-[-55px] pt-[120px] pb-[50px] md:mt-0 md:py-[60px]">
      <div className="absolute box-border caret-transparent h-full opacity-20 w-full left-0 top-0"></div>
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1400px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full mx-[5px] p-2.5 md:mx-0">
            <section className="relative box-border caret-transparent w-full mt-5 md:mt-0">
              <ProcessSteps />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
