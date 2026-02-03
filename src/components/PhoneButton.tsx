import { usePhoneNumber } from "@/hooks/usePhoneNumber";

interface PhoneButtonProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showLabel?: boolean;
  labelText?: string;
}

export const PhoneButton = ({ 
  className = "relative text-white box-border caret-transparent inline-flex items-center gap-3 break-words px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity",
  iconClassName = "flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center",
  textClassName = "text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight",
  showLabel = true,
  labelText = "CALL US NOW"
}: PhoneButtonProps) => {
  const { phoneDisplay, phoneHref, canonicalPhoneDisplay } = usePhoneNumber();

  return (
    <a
      href={phoneHref}
      title="Click Here"
      role="button"
      aria-label={`Call us: ${canonicalPhoneDisplay}`}
      className={className}
    >
      {/* Circular icon with phone */}
      <div className={iconClassName}>
        <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      
      {/* Text content */}
      <div className="flex flex-col">
        {showLabel && (
          <span className="text-gray-300 text-xs uppercase tracking-wide leading-tight">
            {labelText}
          </span>
        )}
        <span className={textClassName}>
          {phoneDisplay}
        </span>
      </div>
    </a>
  );
};

