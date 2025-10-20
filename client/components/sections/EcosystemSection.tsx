import { TradersIllustration, LPsIllustration, BuildersIllustration } from "@/components/illustrations";

const EcosystemSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-card"
    aria-labelledby="ecosystem-heading"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          id="ecosystem-heading"
          className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          A Complete Ecosystem
        </h2>
        <p className="text-muted-foreground font-manrope text-base sm:text-lg max-w-2xl mx-auto">
          Three interconnected layers working together to create a
          liquidation-free trading experience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {/* Traders Card */}
        <div className="group relative bg-background border border-border rounded-2xl p-8 hover:border-border transition-colors duration-300">
          {/* Abstract Geometric Illustration */}
          <div className="mb-6 flex items-center justify-center">
            <TradersIllustration />
          </div>
          <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
            For Traders
          </h3>
          <p className="text-muted-foreground font-manrope text-sm leading-relaxed">
            Access leveraged positions without the risk of sudden liquidations.
            Trade with confidence knowing your capital is protected.
          </p>
        </div>

        {/* LPs Card */}
        <div className="group relative bg-background border border-border rounded-2xl p-8 hover:border-border transition-colors duration-300">
          {/* Abstract Flow Illustration */}
          <div className="mb-6 flex items-center justify-center">
            <LPsIllustration />
          </div>
          <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
            For Liquidity Providers
          </h3>
          <p className="text-muted-foreground font-manrope text-sm leading-relaxed">
            Earn enhanced yields on your Uniswap V3 positions. Maximize returns
            while maintaining full control of your liquidity.
          </p>
        </div>

        {/* Builders Card */}
        <div className="group relative bg-background border border-border rounded-2xl p-8 hover:border-border transition-colors duration-300">
          {/* Abstract Network Illustration */}
          <div className="mb-6 flex items-center justify-center">
            <BuildersIllustration />
          </div>
          <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
            For Builders
          </h3>
          <p className="text-muted-foreground font-manrope text-sm leading-relaxed">
            Build on top of our protocol with composable primitives. Integrate
            TimeLock into your DeFi applications.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default EcosystemSection;
