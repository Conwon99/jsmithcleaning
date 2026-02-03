export type FooterColumnProps = {
  variant: string;
  title: string;
  description?: string;
  socialLinks?: Array<{
    url: string;
    icon: string;
    isInstagram?: boolean;
  }>;
  contactItems?: Array<{
    icon: string;
    text: string;
    isLink?: boolean;
    href?: string;
  }>;
  phoneNumber?: string;
  phoneText?: string;
  ctaText?: string;
  ctaUrl?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`relative content-start box-border caret-transparent flex flex-wrap w-full ${props.variant}`}
    >
      <div className="relative box-border caret-transparent w-full mb-5">
        <div className="box-border caret-transparent">
          <h2 className="text-white text-[22px] font-bold box-border caret-transparent leading-[26.4px] font-montserrat md:text-[28px] md:leading-[33.6px]">
            {props.title}
          </h2>
        </div>
      </div>

      {props.description && (
        <div className="relative text-white text-[15px] box-border caret-transparent leading-[22.5px] w-full mb-5 md:text-lg md:leading-[27px]">
          <div className="text-[15px] box-border caret-transparent leading-[22.5px] mb-[-15px] md:text-lg md:leading-[27px] md:mb-0">
            <p className="text-[15px] box-border caret-transparent leading-[22.5px] mb-[14.4px] md:text-lg md:leading-[27px]">
              {props.description}
            </p>
          </div>
        </div>
      )}

      {props.socialLinks && (
        <div className="relative box-border caret-transparent w-full">
          <div className="text-[0px] box-border caret-transparent leading-[0px] text-left">
            <div className="box-border caret-transparent gap-x-2.5 inline-block justify-center justify-items-center gap-y-0 w-full">
              {props.socialLinks.map((link, index) => (
                <span
                  key={index}
                  className="box-border caret-transparent inline-block"
                >
                  <a
                    href={link.url}
                    className="text-neutral-900 text-[17px] items-center bg-teal-500 box-border caret-transparent inline-flex h-[34px] justify-center leading-[17px] text-center w-[34px] rounded-[5px] hover:text-amber-500 hover:bg-white hover:border-amber-500"
                  >
                    {link.isInstagram ? (
                      <i className="relative text-white box-border caret-transparent block h-[17px] w-[17px] font-elementskit before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[17px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[17px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-8.5px] before:visible before:border-separate before:left-2/4 before:font-elementskit"></i>
                    ) : (
                      <img
                        src={link.icon}
                        alt="Icon"
                        className="relative box-border caret-transparent h-[17px] w-[17px]"
                      />
                    )}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {props.contactItems && (
        <div className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent pr-[50px]">
            <ul className="box-border caret-transparent list-none pl-0">
              {props.contactItems.map((item, index) => (
                <li
                  key={index}
                  className={`relative items-center box-border caret-transparent flex ${index > 0 ? "mt-[5px]" : ""} ${index < props.contactItems.length - 1 ? "pb-[5px]" : ""}`}
                >
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-neutral-900 text-[15px] items-center box-border caret-transparent flex leading-[22.5px] w-full md:text-lg md:leading-[27px] hover:text-amber-500 hover:border-amber-500"
                    >
                      <span className="relative text-[15px] box-border caret-transparent flex leading-[22.5px] top-0 md:text-lg md:leading-[27px]">
                        <img
                          src={item.icon}
                          alt="Icon"
                          className="text-[15px] box-border caret-transparent h-3.5 leading-[22.5px] w-3.5 mr-[3.5px] md:text-lg md:leading-[27px]"
                        />
                      </span>
                      <span className="text-white text-[15px] self-center box-border caret-transparent block leading-[22.5px] pl-[5px] md:text-lg md:leading-[27px]">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <>
                      <span className="relative box-border caret-transparent flex top-0">
                        <img
                          src={item.icon}
                          alt="Icon"
                          className="box-border caret-transparent h-3.5 w-3.5 mr-[3.5px]"
                        />
                      </span>
                      <span className="text-white text-[15px] self-center box-border caret-transparent block leading-[22.5px] pl-[5px] md:text-lg md:leading-[27px]">
                        {item.text}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {props.phoneNumber && (
        <div className="relative self-center box-border caret-transparent max-w-full">
          <div className="box-border caret-transparent mb-0 md:mb-5">
            <div className="box-border caret-transparent">
              <div className="relative box-border caret-transparent text-left">
                <h2 className="text-white text-xl font-semibold box-border caret-transparent leading-5 md:text-[22px] md:leading-[22px]">
                  Call Us :{" "}
                  <span className="text-teal-500 text-xl box-border caret-transparent inline-block leading-5 md:text-[22px] md:leading-[22px]">
                    <span className="text-xl box-border caret-transparent inline-block leading-5 md:text-[22px] md:leading-[22px]">
                      {props.phoneNumber}
                    </span>
                  </span>
                </h2>
                <div className="text-base box-border caret-transparent inline-block leading-6 w-full">
                  <p className="text-white text-xs box-border caret-transparent my-2.5 md:text-lg">
                    {props.phoneText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {props.ctaText && props.ctaUrl && (
        <div className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent text-left">
                <a
                  href={props.ctaUrl}
                  className="relative text-white text-xs bg-teal-500 box-border caret-transparent inline-block tracking-[1px] leading-3 text-center uppercase align-middle w-[45%] border border-amber-400 py-[18px] rounded-[5px] border-solid md:text-sm md:leading-[14px] hover:bg-amber-400"
                >
                  {props.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
