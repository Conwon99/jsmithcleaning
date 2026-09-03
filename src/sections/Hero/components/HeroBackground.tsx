import React from "react";

export const HeroBackground = () => {
  return (
    <div className="absolute text-sm box-border caret-transparent leading-[20.3px] break-words z-0 overflow-hidden inset-0 md:text-[17px] md:leading-[24.65px]">
      <div className="relative text-neutral-400 text-[13px] caret-transparent h-[743px] leading-[18.85px] break-words w-full font-helvetica md:h-[695px]">
        <div className="relative caret-transparent break-words">
          <div className="relative caret-transparent h-[743px] break-words w-full z-[2] md:h-[695px]">
            <div className="relative caret-transparent h-full break-words overflow-hidden">
              <div
                className="absolute caret-transparent h-[743px] break-words w-full z-[2] overflow-hidden left-0 top-0 md:h-[695px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${encodeURI("/hero-background.webp")}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
