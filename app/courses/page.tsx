import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseSection from "@/components/courses/CourseSection";
import Outcomes from "@/components/courses/Outcomes";
import ApplyBand from "@/components/courses/ApplyBand";
import { COURSES } from "@/lib/courses-data";

export const metadata = {
  title: "WhiteBox — Training Programmes",
  description:
    "Three structured, project-led training programmes — AI Engineering, Data Science, and Cybersecurity. Online, part-time, cohort-based.",
};

export default function CoursesPage() {
  return (
    <>
      <Nav />
      <main>
        <CoursesHero />
        {COURSES.map((course, i) => (
          <CourseSection
            key={course.id}
            course={course}
            background={i % 2 === 1 ? "surface" : "white"}
          />
        ))}
        <Outcomes />
        <ApplyBand />
      </main>
      <Footer />
    </>
  );
}
