export const NavbarLogo = () => {
  return (
    <div className="relative box-border caret-transparent text-left w-full">
      <div className="box-border caret-transparent mt-[-5px] p-3.5">
        <a
          href="https://www.frostyscleaningservices.co.uk/"
          className="text-neutral-900 box-border caret-transparent inline-block hover:text-amber-500 hover:border-amber-500"
        >
          <img
            src="https://c.animaapp.com/mjg54wmywipTJF/assets/FROSTY-web-logo.webp"
            alt=""
            sizes="(max-width: 500px) 100vw, 500px"
            className="aspect-[auto_500_/_115] box-border caret-transparent inline-block max-w-full w-full"
          />
        </a>
      </div>
    </div>
  );
};
