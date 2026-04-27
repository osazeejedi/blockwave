import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CoursesPreview from "@/components/sections/CoursesPreview";
import Values from "@/components/sections/Values";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <CoursesPreview />
        <Values />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
