import React from "react";

export const SectionTransition = () => {
  return (
    <div className="relative text-sm box-border caret-transparent w-full flex justify-center items-center leading-[20.3px] break-words py-8 md:text-[17px] md:leading-[24.65px] md:py-12 z-20">
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 box-border caret-transparent bg-white rounded-full p-6 shadow-lg md:p-10">
        <img
          src="/jsmithcleaning.jpg"
          alt="J Smith Exterior Cleaning Logo"
          title="J Smith Exterior Cleaning Logo"
          className="box-border caret-transparent h-auto break-words object-contain max-h-[120px] max-w-[240px] md:max-h-[180px] md:max-w-[360px]"
        />
      </div>
    </div>
  );
};

