import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import GlobalLeadPopup from "@/components/leads/GlobalLeadPopup";
import PlacementBanner from "@/components/common/PlacementBanner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <PlacementBanner />

      <GlobalLeadPopup />

      <main>{children}</main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}