import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <section className="relative bg-neutral-900 box-border caret-transparent pt-10 pb-5 md:pt-[60px] md:pb-10">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1400px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <FooterContent />
        </div>
      </div>
    </section>
  );
};
