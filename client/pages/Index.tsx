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
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 w-full h-[80vh]">
        <img
          src="/timelock-hero.png"
          alt="Timelock Trading Interface"
          className="p-36 absolute inset-0 blur-[2px] opacity-30"
        />
        {/*<div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />*/}
      </div>
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
      {/*<DiscordCommunitySection />*/}
      <FinalCTASection />
      <Footer />
    </div>
  );
}
