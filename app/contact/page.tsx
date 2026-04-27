import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactBody from "@/components/contact/ContactBody";
import Faq from "@/components/contact/Faq";

export const metadata = {
  title: "WhiteBox — Contact & Enquiries",
  description:
    "Get in touch with WhiteBox. Whether you're exploring a consulting engagement, applying to a programme, or just want to ask a question — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactHero />
        <ContactBody />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
