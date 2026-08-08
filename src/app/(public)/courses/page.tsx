import Hero from "@/components/courses/Hero";
import FeaturedCourses from "@/components/courses/FeaturedCourses";
import AllCourses from "@/components/courses/AllCourses";
import WhyLearn from "@/components/courses/WhyLearn";

export default function CoursesPage() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <AllCourses />
      <WhyLearn />
    </>
  );
}