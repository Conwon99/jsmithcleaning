import { MessageCircle } from "lucide-react";

export const StickyMessageButton = () => {
  return (
    <a
      aria-label="Message us"
      href="/contact"
      className="fixed text-sm bg-[#8dae23] box-border caret-transparent flex items-center gap-4 leading-[20.3px] break-words px-5 py-4 rounded-lg shadow-[rgba(0,0,0,0.3)_0px_3px_6px_0px] z-[2147483647] right-5 bottom-[15px] hover:bg-[#7a9a1f] transition-colors md:text-[17px] md:hidden md:leading-[24.65px]"
      onClick={() => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'quoteButton_sticky', {
            event_category: 'CTA',
            event_label: 'Sticky Message Button'
          });
        }
      }}
    >
      {/* Circular Icon with Message */}
      <div className="relative text-sm box-border caret-transparent flex items-center justify-center leading-[20.3px] break-words w-12 h-12 rounded-full bg-white/15 flex-shrink-0 md:text-[17px] md:leading-[24.65px]">
        <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
      </div>

      {/* Text Content */}
      <div className="text-sm box-border caret-transparent flex flex-col leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]">
        <span className="text-white/80 text-xs box-border caret-transparent leading-[16px] break-words font-medium uppercase tracking-wide md:text-[17px] md:leading-[24.65px]">
          Get In Touch
        </span>
        <span className="text-white text-xl box-border caret-transparent leading-[28px] break-words font-bold md:text-[17px] md:leading-[24.65px]">
          Message Us
        </span>
      </div>
    </a>
  );
};
