import Hero from "@/components/placement/hero/Hero";
import PlacementJourney from "@/components/placement/PlacementJourney/PlacementJourney";

// Next Components
import HiringPartners from "@/components/placement/HiringPartners/HiringPartners";
import PlacementSupport from "@/components/placement/PlacementSupport/PlacementSupport";
import SuccessStories from "@/components/placement/SuccessStories/SuccessStories";
import WhyCompaniesHire from "@/components/placement/WhyCompaniesHire/WhyCompaniesHire";
import FAQ from "@/components/placement/FAQ/FAQ";
import CTA from "@/components/placement/CTA/CTA";

export default function PlacementPage() {
  return (
    <>
      <Hero />

      <PlacementJourney />

      
      <HiringPartners />

      <PlacementSupport />

      <SuccessStories />

      <WhyCompaniesHire />

      <FAQ />

      <CTA />
      
    </>
  );
}