import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";
import { NavbarCTA } from "@/sections/Navbar/components/NavbarCTA";

export const NavbarContainer = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-wrap max-w-[1400px] mx-auto md:flex-nowrap">
      <div className="relative box-border caret-transparent flex min-h-px w-full">
        <div className="relative content-center items-center box-border caret-transparent flex flex-wrap w-full mx-2.5 p-2.5 md:mx-0">
          <section className="relative bg-white shadow-[rgba(0,0,0,0.1)_0px_3px_15px_0px] box-border caret-transparent w-full z-0 rounded-[10px] md:z-[4]">
            <div className="relative box-border caret-transparent flex flex-wrap max-w-[1375px] mx-auto md:flex-nowrap">
              <div className="relative box-border caret-transparent flex min-h-px w-[70%] md:w-1/5">
                <div className="relative content-center items-center box-border caret-transparent flex flex-wrap justify-start w-full ml-0 p-2.5 md:justify-center md:ml-[30px]">
                  <NavbarLogo />
                </div>
              </div>
              <div className="relative box-border caret-transparent flex min-h-px w-[27%] md:w-[58.47%]">
                <div className="relative content-center items-center box-border caret-transparent flex flex-wrap w-full px-2.5">
                  <div className="relative box-border caret-transparent w-full">
                    <div className="box-border caret-transparent flex flex-col">
                      <DesktopMenu />
                      <MobileMenuToggle />
                      <MobileMenu />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent flex min-h-px w-full z-[1] md:w-[21.194%] md:z-auto">
                <div className="relative content-center items-center box-border caret-transparent flex flex-wrap justify-end w-full mr-0 p-0 md:mr-[30px] md:p-2.5">
                  <NavbarCTA />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
