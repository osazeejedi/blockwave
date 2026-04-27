import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceSection from "@/components/services/ServiceSection";
import WhyBand from "@/components/services/WhyBand";
import ServicesCta from "@/components/services/ServicesCta";
import { SERVICES } from "@/lib/services-data";

export const metadata = {
  title: "WhiteBox — Services",
  description:
    "Software engineering, tech consulting, and professional training — three disciplines, one standard.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <ServicesHero />
        {SERVICES.map((service, i) => (
          <ServiceSection
            key={service.id}
            service={service}
            background={i % 2 === 0 ? "white" : "surface"}
          />
        ))}
        <WhyBand />
        <ServicesCta />
      </main>
      <Footer />
    </>
  );
}
