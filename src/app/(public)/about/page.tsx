import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import Achievements from "@/components/about/Achievements";
import Mentors from "@/components/about/Mentors";
import CoreValues from "@/components/about/CoreValues";
import FinalCTA from "@/components/about/FinalCTA";
import Services from "@/components/about/Services";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Story />
      <MissionVision />
      <Achievements />
      <Mentors />
      <Services/>
      <CoreValues />
      <FinalCTA />
    </>
  );
}