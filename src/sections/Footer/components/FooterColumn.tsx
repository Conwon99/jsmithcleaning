import { usePhoneNumber } from "@/hooks/usePhoneNumber";

export type FooterColumnProps = {
  title: string;
  variant: string;
  logoUrl?: string;
  logoAlt?: string;
  description?: string;
  email?: string;
  emailLabel?: string;
  phone?: string;
  phoneLabel?: string;
  address?: string;
  hoursTitle?: string;
  hoursContent?: React.ReactNode;
  mapEmbedUrl?: string;
  services?: Array<{ name: string; url: string }>;
  locations?: Array<{ name: string; url: string }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  const { phoneDisplay, phoneHref } = usePhoneNumber();
  
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[25%]">
      <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
        <div className="relative box-border caret-transparent w-full mb-5">
          <div className="box-border caret-transparent">
            <p className="text-white text-[26px] font-semibold box-border caret-transparent leading-[26px] font-thiccboi_condensed">
              {props.title}
            </p>
          </div>
        </div>

        {props.variant === "who-we-are" && (
          <>
            <div className="relative box-border caret-transparent w-full mb-5">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <a
                  href="/"
                  className="text-cyan-500 box-border caret-transparent inline-block hover:text-cyan-400"
                >
                  <img
                    src={props.logoUrl || "/jsmithcleaning.jpg"}
                    alt={props.logoAlt || "J Smith Exterior Cleaning Logo"}
                    sizes="(max-width: 150px) 100vw, 150px"
                    className="aspect-[auto_150_/_150] box-border caret-transparent inline-block max-w-full w-[150px]"
                  />
                </a>
              </div>
            </div>
            <div className="relative text-white box-border caret-transparent text-center w-full font-ruda">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  {props.description}
                </p>
              </div>
            </div>
          </>
        )}

        {props.variant === "contact-us" && (
          <>
            <div className="relative text-white box-border caret-transparent w-full mb-5 font-thiccboi">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  {props.emailLabel}{" "}
                  <a
                    href={`mailto:${props.email}`}
                    className="text-cyan-500 box-border caret-transparent hover:text-cyan-400"
                  >
                    {props.email}
                  </a>
                </p>
                <p className="box-border caret-transparent mb-[14.4px]">
                  <span className="box-border caret-transparent">
                    {props.phoneLabel}
                    <a
                      href={phoneHref}
                      className="text-cyan-500 box-border caret-transparent hover:text-cyan-400"
                    >
                      {" "}
                      {phoneDisplay}
                    </a>
                  </span>
                </p>
                <p className="box-border caret-transparent mb-[14.4px]">
                  <span className="box-border caret-transparent">
                    Address: {props.address}
                  </span>
                </p>
              </div>
            </div>
            <div className="relative text-white text-[15px] box-border caret-transparent leading-[22.5px] w-full font-thiccboi">
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent mb-[14.4px]">
                  <strong className="font-bold box-border caret-transparent">
                    {props.hoursTitle}
                  </strong>
                </p>
                <p className="box-border caret-transparent mb-[14.4px]">
                  {props.hoursContent}
                </p>
              </div>
            </div>
          </>
        )}

        {props.variant === "service-area" && (
          <div className="relative box-border caret-transparent w-full">
            <div className="box-border caret-transparent">
              <iframe
                src={props.mapEmbedUrl}
                className="box-border caret-transparent h-[400px] leading-4 max-w-full w-full rounded-lg"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>
        )}

        {props.variant === "services" && props.services && (
          <div className="relative text-white box-border caret-transparent w-full font-thiccboi">
            <div className="box-border caret-transparent">
              <ul className="list-none p-0 m-0">
                {props.services.map((service, index) => (
                  <li key={index} className="box-border caret-transparent mb-3">
                    <a
                      href={service.url}
                      className="text-cyan-500 box-border caret-transparent hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
              {props.locations && props.locations.length > 0 && (
                <div className="relative box-border caret-transparent mt-6 group">
                  <a
                    href="/locations"
                    className="text-cyan-500 box-border caret-transparent hover:text-cyan-400 transition-colors inline-block"
                  >
                    Our Locations
                  </a>
                  <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-black/95 rounded-lg shadow-lg min-w-[180px] py-2">
                    <ul className="list-none p-0 m-0">
                      {props.locations.map((location, index) => (
                        <li key={index} className="box-border caret-transparent">
                          <a
                            href={location.url}
                            className="text-cyan-500 box-border caret-transparent hover:text-cyan-400 transition-colors block px-4 py-2 hover:bg-white/10"
                          >
                            {location.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {props.variant === "locations" && props.locations && (
          <div className="relative text-white box-border caret-transparent w-full font-thiccboi">
            <div className="box-border caret-transparent">
              <ul className="list-none p-0 m-0">
                {props.locations.map((location, index) => (
                  <li key={index} className="box-border caret-transparent mb-3">
                    <a
                      href={location.url}
                      className="text-cyan-500 box-border caret-transparent hover:text-cyan-400 transition-colors"
                    >
                      {location.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

