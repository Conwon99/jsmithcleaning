export type TestimonialCardProps = {
  slideNumber: string;
  imageUrl: string;
  name: string;
  reviewSource: string;
  testimonialText: React.ReactNode;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="relative box-border caret-transparent max-w-full w-full md:max-w-none">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="absolute box-border caret-transparent left-[-150000px]">
                slide{" "}
                <span className="box-border caret-transparent">
                  {props.slideNumber}
                </span>{" "}
                of 1
              </div>
              <div className="box-border caret-transparent overflow-hidden">
                <div className="box-border caret-transparent -mr-2.5">
                  <div className="text-[0px] box-border caret-transparent leading-[0px] text-nowrap w-full md:w-[33.3333%]">
                    <div className="text-[15px] box-border caret-transparent inline-block leading-[22.5px] align-top w-full pr-2.5">
                      <div className="relative shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px] box-border caret-transparent text-left overflow-hidden p-0 rounded-[10px] md:pt-10 md:pb-5 md:px-10 before:accent-auto before:bg-size-[101%_101%] before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-full before:left-[-101%] before:tracking-[normal] before:leading-[22.5px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:top-0 before:font-poppins">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <ul className="relative box-border caret-transparent z-[2] mb-[15px] pl-0"></ul>
                        </div>
                        <div className="relative box-border caret-transparent flex justify-between z-[2]">
                          <div className="items-center box-border caret-transparent flex justify-between">
                            <div className="box-border caret-transparent flex">
                              <img
                                src={props.imageUrl}
                                alt={props.name}
                                sizes="(max-width: 150px) 100vw, 150px"
                                className="aspect-[auto_150_/_150] box-border caret-transparent max-w-full object-cover w-[60px] mr-5 rounded-[50%]"
                              />
                            </div>
                            <span className="relative box-border caret-transparent block z-[2]">
                              <strong className="text-teal-500 text-xl font-semibold box-border caret-transparent block leading-5 mb-px md:text-[22px] md:leading-[22px] md:mb-0.5">
                                {props.name}
                              </strong>
                              <p className="text-white text-xs box-border caret-transparent leading-[18px] mb-[14.4px] md:text-sm md:leading-[21px]">
                                {props.reviewSource}
                              </p>
                            </span>
                          </div>
                          <div className="text-white text-[50px] box-border caret-transparent flex leading-[50px] z-[2]">
                            <i className="box-border caret-transparent block font-elementskit before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[50px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[50px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-elementskit"></i>
                          </div>
                        </div>
                        <div className="relative box-border caret-transparent z-[2] my-[30px]">
                          <p className="text-white text-base box-border caret-transparent leading-6 mb-[14.4px] md:text-lg md:leading-[27px]">
                            {props.testimonialText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
