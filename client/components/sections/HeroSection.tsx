import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-background"
    aria-labelledby="hero-heading"
  >
    <BackgroundRippleEffect />
    <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl w-full text-center">
      {/* Testnet Live Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent/50 backdrop-blur-md"
        role="status"
        aria-label="Testnet status"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-foreground/80 font-medium text-[13px] font-manrope">
          Live on Monad Testnet
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-foreground font-manrope text-4xl sm:text-5xl md:text-6xl font-bold leading-[120%] tracking-[-0.01em] max-w-full px-2 sm:px-0">
        Unlocking Leverage without Liquidations
      </h1>

      {/* Subheading */}
      <p className="text-muted-foreground font-manrope text-base sm:text-lg font-normal leading-relaxed max-w-xl px-2 sm:px-0">
        Powered by Uniswap V3 liquidity. Designed for DeFi traders and LPs.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3 justify-center w-full mt-4">
        <a
          href="https://testnet.timelock.trade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary text-foreground font-manrope text-sm md:text-lg font-semibold px-5 py-2 md:px-7 md:py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Start Trading
          </button>
        </a>
        <button className="border border-border bg-accent/50 backdrop-blur-md text-foreground font-manrope text-sm md:text-lg font-semibold px-5 py-2 md:px-7 md:py-3 rounded-lg hover:bg-accent hover:border-border transition-colors duration-200">
          Explore Yields
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
