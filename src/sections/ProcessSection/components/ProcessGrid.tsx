import React from "react";

type ProcessStep = {
  number: number;
  title: string;
  icon: React.ReactNode;
};

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Fill In The Website Enquiry Form",
    icon: (
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <svg className="absolute top-2 left-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <svg className="absolute bottom-2 right-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
    ),
  },
  {
    number: 2,
    title: "We'll Review And Reply With Our Quote",
    icon: (
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <svg className="absolute top-1 right-1 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg className="absolute top-3 right-3 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      </div>
    ),
  },
  {
    number: 3,
    title: "Upon Agreement, We Will Arrange A Date",
    icon: (
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <svg className="absolute bottom-2 left-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <svg className="absolute bottom-2 right-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    ),
  },
  {
    number: 4,
    title: "We Will Arrive And Carry Out The Work",
    icon: (
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v3.28c0 .297.106 .586.294 .797l2.5 3.06a1 1 0 01.206.646V19a2 2 0 002 2h.5" />
        </svg>
        <svg className="absolute top-1 right-1 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    ),
  },
];

export const ProcessGrid = () => {
  return (
    <div className="text-sm box-border caret-transparent leading-[20.3px] break-words w-full py-10 md:text-[17px] md:leading-[24.65px] md:py-16">
      <div className="text-sm box-border caret-transparent flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 leading-[20.3px] break-words px-5 md:text-[17px] md:leading-[24.65px] md:px-0">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="relative box-border caret-transparent flex flex-col items-center text-center leading-[20.3px] break-words flex-1 max-w-[250px] md:text-[17px] md:leading-[24.65px]">
              {/* Gold Circle with Number */}
              <div className="relative box-border caret-transparent mb-4 leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
              </div>
              
              {/* Square Box with Icon */}
              <div className="relative box-border caret-transparent mb-4 leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                <div className="bg-amber-500/10 border-2 border-amber-500 w-24 h-24 rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-neutral-900">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              {/* Text */}
              <div className="relative box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                <p className="text-neutral-900 text-base font-semibold box-border caret-transparent leading-6 break-words md:text-lg md:leading-7">
                  {step.title}
                </p>
              </div>
            </div>
            
            {/* Curved Arrow (except for last item) */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:block relative box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
                <svg
                  className="w-12 h-12 text-amber-500"
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
    </div>
  );
};
