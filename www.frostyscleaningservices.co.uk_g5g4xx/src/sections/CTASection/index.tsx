import { CTAContent } from "@/sections/CTASection/components/CTAContent";
import { CTAImage } from "@/sections/CTASection/components/CTAImage";

export const CTASection = () => {
  return (
    <section className="relative shadow-[rgba(0,0,0,0.24)_0px_12px_10px_0px] box-border caret-transparent z-[1] border-teal-500 py-0 border-b-[5px] border-solid md:py-[45px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1400px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[54.449%]">
          <CTAContent />
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[45.511%]">
          <CTAImage />
        </div>
      </div>
    </section>
  );
};
