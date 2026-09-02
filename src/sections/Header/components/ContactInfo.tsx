import { ContactPhone } from "@/sections/Header/components/ContactPhone";
import { ContactEmail } from "@/sections/Header/components/ContactEmail";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";
import { MobilePhoneButton } from "@/sections/Header/components/MobilePhoneButton";

export const ContactInfo = () => {
  return (
    <div className="text-sm box-border caret-transparent clear-both flex grow float-none leading-[20.3px] min-h-px min-w-0 break-words w-auto mx-0 md:text-[17px] md:clear-none md:float-left md:leading-[24.65px] md:min-w-[auto] md:w-[70%] md:mx-0">
      <div className="text-sm box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-w-px break-words w-full md:text-[17px] md:leading-[24.65px]">
        {/* Mobile: phone icon + hamburger, right-aligned */}
        <div className="flex items-center justify-end gap-3 md:hidden">
          <MobilePhoneButton />
          <MobileMenu />
        </div>

        {/* Desktop: Buttons in same row, right-aligned */}
        <div className="text-sm box-border caret-transparent hidden leading-[20.3px] break-words md:flex md:items-center md:justify-end md:gap-6 md:text-[17px] md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent flex items-center gap-3 leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
            <ContactPhone />
            <ContactEmail />
          </div>
        </div>
      </div>
    </div>
  );
};
