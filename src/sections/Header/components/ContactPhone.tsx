import { Phone } from "lucide-react";
import { usePhoneNumber } from "@/hooks/usePhoneNumber";

export const ContactPhone = () => {
  const { phoneDisplay, phoneHref, canonicalPhoneDisplay } = usePhoneNumber();
  
  return (
    <div className="text-sm box-border caret-transparent clear-both flex grow float-none leading-[20.3px] min-h-px break-words w-auto mx-auto md:text-[17px] md:clear-none md:float-none md:leading-[24.65px] md:w-auto md:mx-0">
      <div className="text-sm box-border caret-transparent flex flex-col grow justify-center leading-[20.3px] max-w-full min-w-px break-words w-full md:text-[17px] md:leading-[24.65px]">
        <div className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
          <div className="text-sm box-border caret-transparent leading-[20.3px] break-words mb-5 mx-5 md:text-[17px] md:mb-0 md:mx-0 md:leading-[24.65px]">
            <div className="text-sm box-border caret-transparent leading-[20.3px] break-words flex justify-center md:text-[17px] md:justify-start md:leading-[24.65px]">
              <a
                href={phoneHref}
                title="Click Here"
                role="button"
                aria-label={`Call us: ${canonicalPhoneDisplay}`}
                className="relative text-white box-border caret-transparent inline-flex items-center gap-3 break-words px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'phone_nav', {
                      event_category: 'CTA',
                      event_label: 'Navigation Phone Button'
                    });
                  }
                }}
              >
                {/* Circular icon with phone */}
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center">
                  <Phone className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} fill="currentColor" />
                </div>
                
                {/* Text content */}
                <div className="flex flex-col">
                  <span className="text-gray-300 text-xs uppercase tracking-wide leading-tight">
                    CALL US NOW
                  </span>
                  <span className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                    {phoneDisplay}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
