import { ServicesHeader } from "@/sections/ServicesSection/components/ServicesHeader";

export const ServicesSection = () => {
  return (
    <section className="relative bg-cyan-700 box-border caret-transparent pt-10 pb-[380px]">
      <div className="absolute box-border caret-transparent leading-[0px] w-full overflow-hidden left-0 -bottom-px">
        <img
          src="https://c.animaapp.com/mjg54wmywipTJF/assets/icon-6.svg"
          alt="Icon"
          className="relative box-border caret-transparent translate-x-[-50.0%] w-[calc(100%_+_1.3px)] left-2/4"
        />
      </div>
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1400px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <ServicesHeader />
        </div>
      </div>
    </section>
  );
};
