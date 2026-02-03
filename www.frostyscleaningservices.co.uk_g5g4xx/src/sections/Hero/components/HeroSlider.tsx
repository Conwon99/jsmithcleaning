export const HeroSlider = () => {
  return (
    <div className="absolute box-border caret-transparent h-full list-none w-full z-0 overflow-hidden mx-auto left-0 top-0">
      <div className="relative caret-transparent flex h-full w-full z-[1]">
        <div
          role="group"
          aria-label="2 / 3"
          className="relative box-border caret-transparent shrink-0 h-full opacity-100 pointer-events-auto translate-x-[1500px] w-screen md:opacity-0 md:pointer-events-none md:translate-x-[5120px]"
        >
          <div className="bg-[url('https://www.frostyscleaningservices.co.uk/wp-content/uploads/2024/05/Ayrshire-cleaning-company.png')] bg-cover box-border caret-transparent h-full pointer-events-auto w-full bg-center scale-[1.3] md:pointer-events-none md:transform-none"></div>
        </div>
        <div
          role="group"
          aria-label="3 / 3"
          className="relative box-border caret-transparent shrink-0 h-full opacity-0 pointer-events-none translate-x-[1875px] w-screen md:opacity-100 md:pointer-events-auto md:translate-x-[6400px]"
        >
          <div className="bg-[url('https://www.frostyscleaningservices.co.uk/wp-content/uploads/2024/08/company-vehicles.jpg')] bg-cover box-border caret-transparent h-full pointer-events-none transform-none w-full bg-center md:pointer-events-auto md:scale-[1.3]"></div>
        </div>
      </div>
    </div>
  );
};
