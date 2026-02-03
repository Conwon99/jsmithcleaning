import { HeroSlider } from "@/sections/Hero/components/HeroSlider";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative box-border caret-transparent mt-[-222px] z-0 pt-[70%] pb-[20%] px-[0%] md:pt-[20%] md:pb-[10%]">
      <HeroSlider />
      <div className="absolute bg-slate-950 box-border caret-transparent h-full opacity-30 w-full left-0 top-0"></div>
      <HeroContent />
    </section>
  );
};
