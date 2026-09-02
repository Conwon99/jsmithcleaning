import { Phone } from "lucide-react";
import { usePhoneNumber } from "@/hooks/usePhoneNumber";

export const MobilePhoneButton = () => {
  const { phoneHref, canonicalPhoneDisplay } = usePhoneNumber();

  return (
    <a
      href={phoneHref}
      aria-label={`Call us: ${canonicalPhoneDisplay}`}
      className="flex-shrink-0 w-11 h-11 rounded-full bg-[#17539B] flex items-center justify-center hover:opacity-90 transition-opacity"
      onClick={() => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'phone_nav', {
            event_category: 'CTA',
            event_label: 'Navigation Phone Button'
          });
        }
      }}
    >
      <Phone className="w-5 h-5 text-white" strokeWidth={2.5} fill="currentColor" />
    </a>
  );
};
