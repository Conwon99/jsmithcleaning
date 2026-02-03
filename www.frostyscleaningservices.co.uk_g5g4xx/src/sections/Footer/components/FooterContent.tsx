import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="relative content-start box-border caret-transparent flex flex-wrap w-full px-[15px] md:px-2.5">
      <section className="relative box-border caret-transparent w-full mt-2.5">
        <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
          <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
            <FooterColumn
              variant="mr-20"
              title="Social"
              description="Keep up with our team when  they’re out and about via social media"
              socialLinks={[
                {
                  url: "https://www.facebook.com/frostyscleaningservices",
                  icon: "https://c.animaapp.com/mjg54wmywipTJF/assets/icon-10.svg",
                },
                {
                  url: "https://www.instagram.com/frostyscleaningservices/?hl=en-gb",
                  icon: "",
                  isInstagram: true,
                },
              ]}
            />
          </div>
          <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
            <FooterColumn
              variant="mr-0 mt-[30px] md:mr-2.5 md:mt-0"
              title="Contact Info"
              contactItems={[
                {
                  icon: "https://c.animaapp.com/mjg54wmywipTJF/assets/icon-11.svg",
                  text: " 6 Alloway Place, Ayr, KA7 2AA",
                },
                {
                  icon: "https://c.animaapp.com/mjg54wmywipTJF/assets/icon-12.svg",
                  text: "01292 521870 ",
                  isLink: true,
                  href: "tel://01292521870 ",
                },
                {
                  icon: "https://c.animaapp.com/mjg54wmywipTJF/assets/icon-13.svg",
                  text: "info@frostyscleaningservices.co.uk",
                },
              ]}
            />
          </div>
          <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
            <FooterColumn
              variant="ml-0 mt-[30px] rounded-[3px] md:ml-[30px] md:mt-0"
              title="Get Free Estimate"
              phoneNumber="01292 521870"
              phoneText="The team at Frostys is ready to take your call. "
              ctaText="Quote Form"
              ctaUrl="https://www.frostyscleaningservices.co.uk/contact/"
            />
          </div>
        </div>
      </section>
      <div className="relative box-border caret-transparent w-full mb-5">
        <div className="box-border caret-transparent mt-[50px]">
          <div className="box-border caret-transparent flex py-0.5">
            <span className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-gray-800 box-border caret-transparent flex w-full border-t"></span>
          </div>
        </div>
      </div>
      <section className="relative box-border caret-transparent w-full">
        <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
          <div className="relative box-border caret-transparent flex min-h-px w-full">
            <div className="relative content-end items-end box-border caret-transparent flex flex-wrap w-full">
              <div className="relative text-white text-xs box-border caret-transparent leading-[18px] text-left w-full md:text-sm md:leading-[21px] md:text-center">
                <div className="text-xs box-border caret-transparent leading-[18px] text-left mb-[5px] md:text-sm md:leading-[21px] md:text-center md:mb-[15px]">
                  <p className="text-xs box-border caret-transparent leading-[18px] text-left mb-[14.4px] md:text-sm md:leading-[21px] md:text-center">
                    Copyright © 2024. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
