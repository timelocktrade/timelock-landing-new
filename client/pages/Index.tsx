import {
  Header,
  HeroSection,
  StatsSection,
  EcosystemSection,
  TradersSection,
  EnhancedYieldsSection,
  TUSDSection,
  ZeroLossPerpsSection,
  CustomOptionsSection,
  BuildersSection,
  PartnershipsSection,
  DiscordCommunitySection,
  FAQSection,
  FinalCTASection,
  Footer,
} from "@/components/sections";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-manrope">
      <Header />
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <TUSDSection />
      <ZeroLossPerpsSection />
      <CustomOptionsSection />
      <EnhancedYieldsSection />
      <TradersSection />
      <BuildersSection />
      <PartnershipsSection />
      <FAQSection />
      <DiscordCommunitySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
