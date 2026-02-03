import { IntroContent } from "@/sections/IntroSection/components/IntroContent";

export const IntroSection = () => {
  return (
    <section className="relative shadow-[rgba(0,0,0,0.24)_0px_12px_10px_0px] box-border caret-transparent z-[1] border-teal-500 py-0 border-b-[5px] border-solid md:pt-[42px] md:pb-[41px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1121px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <IntroContent />
        </div>
      </div>
    </section>
  );
};
