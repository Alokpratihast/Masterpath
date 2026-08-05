import { notFound } from "next/navigation";

import { courses } from "@/data/courses";

import Hero from "@/components/courses/details/Hero/Hero";
import AboutCourse from "@/components/courses/About/Aboutcourse";
import Curriculum from "@/components/courses/details/Curriculum";
import Skills from "@/components/courses/details/Skills";
import Tools from "@/components/courses/details/Tools";
import Projects from "@/components/courses/details/Project";
import Eligibility from "@/components/courses/details/Eligibility";
import Certification from "@/components/courses/details/Certification";
import PlacementSupport from "@/components/courses/details/PlacementSupport";
import CTA from "@/components/courses/details/CTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const course = courses.find(
    (course) => course.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <>
      <Hero course={course} />

      <AboutCourse course={course} />

      <Curriculum course={course} />

      <Skills course={course} />

      <Tools course={course} />

      <Projects course={course} />

      <Eligibility course={course} />

      <Certification course={course} />

      <PlacementSupport course={course} />

      <CTA course={course} />
    </>
  );
}