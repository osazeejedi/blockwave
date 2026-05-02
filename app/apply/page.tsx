import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ApplyHero from "@/components/apply/ApplyHero";
import ApplyForm from "@/components/apply/ApplyForm";

export const metadata = {
  title: "Apply — WhiteBox",
  description:
    "Apply to a WhiteBox training programme — AI & Automation Engineering, Data Science for Business, or Cybersecurity. Cohorts are limited.",
};

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main>
        <ApplyHero />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
