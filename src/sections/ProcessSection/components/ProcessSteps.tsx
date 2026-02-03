import React from "react";

type ProcessStep = {
  number: number;
  title: string;
  icon: React.ReactNode;
};

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Fill in the website Enquiry Form",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "We'll review and reply with our Quote",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Upon Agreement, we will arrange a date",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "We will Arrive and Carry Out The work",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v3.28c0 .297.106 .586.294 .797l2.5 3.06a1 1 0 01.206.646V19a2 2 0 002 2h.5" />
      </svg>
    ),
  },
];

export const ProcessSteps = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
      {processSteps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="relative box-border caret-transparent flex min-h-px w-full md:w-3/12">
            <div className="relative content-start box-border caret-transparent flex flex-wrap w-full mb-5 md:mb-0">
              {/* Step Number Badge */}
              <div className="relative box-border caret-transparent text-center w-full z-[3] mb-5">
                <div className="box-border caret-transparent -mb-10">
                  <div className="bg-[#8dae23] rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-3xl md:text-4xl font-bold">{step.number}</span>
                  </div>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="relative box-border caret-transparent w-full z-0">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="relative bg-transparent bg-no-repeat bg-cover box-border caret-transparent text-center overflow-hidden bg-center px-0 rounded-[5px] md:px-10">
                      {/* Icon Box */}
                      <div className="relative box-border caret-transparent z-[2]">
                        <div className="box-border caret-transparent inline-block border-[#8dae23] mb-5 p-[30px] rounded-[5px] border-2 border-solid md:p-10">
                          <div className="text-gray-900">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      {/* Title */}
                      <div className="relative box-border caret-transparent z-[2]">
                        <h3 className="text-gray-900 text-[22px] font-semibold box-border caret-transparent leading-[26.4px] capitalize mt-[5px] mb-[15px] md:text-2xl md:leading-[28.8px] font-thiccboi">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow between steps (positioned between steps, not inside) */}
          {index < processSteps.length - 1 && (
            <div className="hidden md:flex items-center justify-center w-auto flex-shrink-0 px-2 z-[3]">
              <svg
                className="w-12 h-12 text-[#8dae23]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
