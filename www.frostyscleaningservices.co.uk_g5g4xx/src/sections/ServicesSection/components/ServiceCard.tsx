export type ServiceCardProps = {
  href: string;
  iconSrc: string;
  title: string;
  description: string;
  titleTag?: "h3" | "h5";
  variant?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const TitleTag = props.titleTag || "h5";
  const cardClassName =
    props.variant === "default"
      ? "bg-white shadow-[rgba(0,0,0,0.11)_0px_0px_15px_0px] box-border caret-transparent border-amber-500 pt-[25px] pb-[30px] px-5 rounded-[20px] border-b-[5px] border-solid mb-[30px]"
      : "bg-white shadow-[rgba(0,0,0,0.11)_0px_0px_15px_0px] box-border caret-transparent border-amber-500 pt-[25px] pb-[30px] px-5 rounded-[20px] border-b-[5px] border-solid";

  return (
    <div className="relative box-border caret-transparent w-full">
      <div className={cardClassName}>
        <div className="[align-items:normal] box-border caret-transparent block text-left md:items-center md:flex">
          <div className="box-border caret-transparent block shrink min-h-0 min-w-0 mb-5 mx-auto md:flex md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:ml-0 md:mr-5 md:mb-0">
            <a
              href={props.href}
              className="text-teal-500 text-[50px] box-border caret-transparent inline-block fill-teal-500 leading-[50px] min-h-0 min-w-0 text-center md:block md:min-h-[auto] md:min-w-[auto]"
            >
              <img
                src={props.iconSrc}
                alt="Icon"
                className="relative box-border caret-transparent h-[50px] w-[50px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent grow min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <TitleTag className="text-black text-[22px] font-medium box-border caret-transparent leading-[31px] mt-2 mb-1.5">
              <a href={props.href} className="box-border caret-transparent">
                {props.title}
              </a>
            </TitleTag>
            <p className="text-[17px] box-border caret-transparent leading-[25.5px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
