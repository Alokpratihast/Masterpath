import Hero from "@/components/home/Hero";
import FeaturedProgram from "@/components/home/FeaturedProgram";
import WhyChoose from "@/components/home/WhyChoose";
import PlacementJourney from "@/components/home/PlacementJourney";
import HiringPartners from "@/components/home/HiringPartners";
import Testimonials from "@/components/home/Testimonial";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import WhoWeAre from "@/components/home/WhoWeAre";
import StudentAchievements from "@/components/home/StudentAchievements.tsx/StudentAchievements";


export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre/>
      <PlacementJourney />
      <FeaturedProgram />
      <WhyChoose />
      <StudentAchievements/>
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}