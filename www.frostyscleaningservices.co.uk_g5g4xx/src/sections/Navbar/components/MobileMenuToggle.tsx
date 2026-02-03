export const MobileMenuToggle = () => {
  return (
    <div
      role="button"
      aria-label="Menu Toggle"
      className="text-white text-[29px] items-center bg-black/10 box-border caret-transparent flex justify-center leading-[43.5px] min-h-[auto] min-w-[auto] mx-auto p-[7.25px] rounded-[3px] md:text-[22px] md:hidden md:leading-[33px] md:min-h-0 md:min-w-0 md:p-[5.5px]"
    >
      <img
        src="https://c.animaapp.com/mjg54wmywipTJF/assets/icon-2.svg"
        alt="Icon"
        className="text-[29px] box-border caret-transparent block h-[29px] leading-[43.5px] w-[29px] md:text-[22px] md:inline md:h-[22px] md:leading-[33px] md:w-[22px]"
      />
      <img
        src="https://c.animaapp.com/mjg54wmywipTJF/assets/icon-3.svg"
        alt="Icon"
        className="text-[29px] box-border caret-transparent hidden h-[29px] leading-[43.5px] w-[29px] md:text-[22px] md:h-[22px] md:leading-[33px] md:w-[22px]"
      />
    </div>
  );
};
