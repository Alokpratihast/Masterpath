import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import EducationServices from "@/components/services/EducationServices";
import SoftwareServices from "@/components/services/SoftwareServices";
import EducationProcess from "@/components/services/EducationProcess";
import SoftwareProcess from "@/components/services/SoftwareProcess";
import SoftwareCompanies from "@/components/services/SoftwareCompanies";
import WhyMasterpath from "@/components/services/WhyMasterpath";
import ServicesStats from "@/components/services/ServicesStats";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServicesOverview />

      <EducationServices />

      <SoftwareServices />

      <EducationProcess />

      <SoftwareProcess />

      {/* Software Companies */}
      <SoftwareCompanies />

      <ServicesStats />

      <WhyMasterpath />

      <ServicesCTA />
    </>
  );
}