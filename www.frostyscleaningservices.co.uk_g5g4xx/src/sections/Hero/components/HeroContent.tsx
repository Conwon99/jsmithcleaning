import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-wrap max-w-[1109px] mx-auto md:flex-nowrap">
      <div className="relative box-border caret-transparent flex min-h-px w-full">
        <div className="relative content-start box-border caret-transparent flex flex-wrap justify-center w-full mt-0 mx-[5px] p-2.5 md:mt-10 md:mx-0">
          <div className="relative box-border caret-transparent text-center w-full mb-5">
            <div className="box-border caret-transparent mt-11 md:mt-3">
              <h1 className="text-white text-[26px] font-semibold box-border caret-transparent leading-[26px] md:text-[67px] md:leading-[67px]">
                Professional Cleaning Services Throughout Ayrshire
              </h1>
            </div>
          </div>
          <div className="relative box-border caret-transparent w-full mb-5">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-[13px]"></div>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent w-full mb-5">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent text-center">
                  <HeroButton />
                </div>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent text-center">
                  <a
                    href="tel://01292521870"
                    className="relative text-white text-[15px] font-extrabold bg-[linear-gradient(171deg,rgb(18,106,111)_47%,rgb(39,130,134)_88%)] box-border caret-transparent inline-block tracking-[1.6px] leading-[15px] uppercase align-middle w-[92%] px-[30px] py-[18px] rounded-lg md:text-2xl md:leading-6 md:w-[30%] hover:bg-yellow-400"
                  >
                    <i className="text-[17px] font-normal box-border caret-transparent inline-block leading-[17px] normal-case align-middle mr-6 font-jkiticon md:text-[31px] md:leading-[31px] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[17px] before:not-italic before:normal-nums before:font-normal before:tracking-[1.6px] before:leading-[17px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-jkiticon before:md:text-[31px] before:md:leading-[31px]"></i>
                    01292 521870{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
