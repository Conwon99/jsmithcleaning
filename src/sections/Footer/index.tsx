import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";
import { services } from "@/data/services";

export const Footer = () => {
  return (
    <section className="relative bg-[linear-gradient(rgb(0,0,0)_0%,rgb(0,0,0)_100%)] box-border caret-transparent">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-2.5">
            <section className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[1300px] mx-auto md:flex-nowrap">
                <FooterColumn
                  title="Who We Are"
                  variant="who-we-are"
                  logoUrl="/jsmithcleaning.jpg"
                  logoAlt="J Smith Exterior Cleaning Logo"
                  description="J Smith Exterior Cleaning is a professional exterior cleaning company covering Ayrshire, Glasgow and surrounding areas. We are dedicated to customer satisfaction and reliability, specializing in pressure washing and softwashing services. Our services include pressure washing for driveways, patios, and hard surfaces, as well as gentle softwashing for render, walls, and delicate surfaces to remove algae, moss, and grime without causing damage."
                />
                <FooterColumn
                  title="Our Services"
                  variant="services"
                  services={services.map((service) => ({ name: service.name, url: `/${service.slug}` }))}
                  locations={[
                    { name: "Kilmarnock", url: "/kilmarnock" },
                    { name: "Ayr", url: "/ayr" },
                    { name: "Irvine", url: "/irvine" },
                    { name: "Ardrossan", url: "/ardrossan" },
                    { name: "Saltcoats", url: "/saltcoats" },
                    { name: "Stevenston", url: "/stevenston" },
                    { name: "Troon", url: "/troon" },
                    { name: "Prestwick", url: "/prestwick" },
                    { name: "Cumnock", url: "/cumnock" },
                    { name: "Largs", url: "/largs" },
                  ]}
                />
                <FooterColumn
                  title="Contact Us"
                  variant="contact-us"
                  email="jasonsmith96@hotmail.co.uk"
                  emailLabel="Email Us:"
                  phone="07857 353191"
                  phoneLabel="Call Us:"
                  address="Ayrshire, Scotland"
                  hoursTitle="Hours Of Operation"
                  hoursContent={
                    <>
                      Monday 8:00AM – 5:00PM
                      <br />
                      Tuesday 8:00AM – 5:00PM
                      <br />
                      Wednesday 8:00AM – 5:00PM
                      <br />
                      Thursday 8:00AM – 5:00PM
                      <br />
                      Friday 8:00AM – 5:00PM
                      <br />
                      Saturday 9:00AM – 2:00PM
                      <br />
                      Sunday – Closed
                    </>
                  }
                />
                <FooterColumn
                  title="Service Area"
                  variant="service-area"
                  mapEmbedUrl="https://www.google.com/maps?q=Ayrshire,+Scotland&output=embed"
                />
              </div>
            </section>
            <SocialLinks />
            <FooterBottom />
          </div>
        </div>
      </div>
    </section>
  );
};
