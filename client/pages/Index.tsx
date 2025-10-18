import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {
  TradersIllustration,
  LPsIllustration,
  BuildersIllustration,
  YieldGrowthIllustration,
  CheckmarkIcon,
  ComposableIcon,
  DocumentationIcon,
  TUSDStablecoinIllustration,
} from "@/components/Illustrations";

// Logo Component
const TimeLockLogo = () => (
  <div className="flex items-center">
    <svg
      role="img"
      aria-label="TimeLock logo"
      width="189"
      height="30"
      viewBox="0 0 189 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TimeLock</title>
      <path
        d="M13.0615 11.4797H6.34157V18.4919C6.63374 26.6435 14.7728 30.132 19.3067 29.9962V23.4589C14.3982 22.9037 13.0615 19.7009 13.0615 18.1566V11.4797Z"
        fill="white"
      />
      <path
        d="M0.250305 12.9944V5.83385C5.2578 5.51351 6.32607 1.81118 6.23426 6.10352e-05H13.0194C13.0194 8.5854 5.33973 12.9944 0.250305 12.9944Z"
        fill="white"
      />
      <text
        fill="#F0F0F0"
        style={{ whiteSpace: "pre" }}
        className="font-basel font-normal text-[20.9px] tracking-[0.27em]"
      >
        <tspan x="36.4841" y="21.0057">
          TIME LOCK
        </tspan>
      </text>
    </svg>
  </div>
);

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-[130px] py-4 flex items-center justify-between backdrop-blur-xl bg-card/90 border-b border-white/5">
      <TimeLockLogo />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1">
        <a
          href="https://testnet.timelock.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white/90 font-manrope text-[14px] font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
        >
          Trade
        </a>
        <a
          href="https://docs.timelock.trade/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white/60 font-manrope text-[14px] font-medium hover:text-white/90 hover:bg-white/5 rounded-lg transition-colors duration-200"
        >
          Docs
        </a>
        <a
          href="https://discord.gg/timelock"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white/60 font-manrope text-[14px] font-medium hover:text-white/90 hover:bg-white/5 rounded-lg transition-colors duration-200"
        >
          Join Discord
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-b border-white/5 lg:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <a
              href="https://testnet.timelock.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-white/90 font-manrope text-[14px] font-medium hover:bg-white/5 rounded-lg transition-colors"
            >
              Trade
            </a>
            <a
              href="https://docs.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-white/60 font-manrope text-[14px] font-medium hover:bg-white/5 rounded-lg transition-colors"
            >
              Docs
            </a>
            <a
              href="https://discord.gg/timelock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-white/60 font-manrope text-[14px] font-medium hover:bg-white/5 rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-40 overflow-hidden bg-card"
    aria-labelledby="hero-heading"
  >
    <BackgroundRippleEffect />
    <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 max-w-4xl w-full text-center">
      {/* Testnet Live Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        role="status"
        aria-label="Testnet status"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-white/80 font-medium text-[13px] font-manrope">
          Live on Monad Testnet
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-white font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[120%] tracking-[-0.01em] max-w-full px-2 sm:px-0">
        Unlocking Leverage without Liquidations
      </h1>

      {/* Subheading */}
      <p className="text-white/50 font-manrope text-base sm:text-lg font-normal leading-relaxed max-w-xl px-2 sm:px-0">
        Powered by Uniswap V3 liquidity. Designed for DeFi traders and LPs.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full mt-4">
        <a
          href="https://testnet.timelock.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto bg-primary text-white font-manrope text-[15px] font-semibold px-7 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Start Trading
          </button>
        </a>
        <button className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-md text-white font-manrope text-[15px] font-semibold px-7 py-3 rounded-lg hover:bg-white/10 hover:border-white/30 transition-colors duration-200">
          Explore Yields
        </button>
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection = () => (
  <section
    className="relative px-4 sm:px-6 lg:px-8 py-10 bg-card"
    role="region"
    aria-label="Protocol statistics"
  >
    <div className="max-w-4xl mx-auto">
      {/* Horizontal Divider */}
      <div className="w-full h-px bg-white/10 mb-12"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
        <div role="img" aria-label="5 million plus total trading volume">
          <div className="text-white font-manrope text-2xl sm:text-3xl font-bold mb-2">
            $5M+
          </div>
          <div className="text-white/40 font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            Total Volume
          </div>
        </div>
        <div role="img" aria-label="2 million plus total value locked">
          <div className="text-white font-manrope text-2xl sm:text-3xl font-bold mb-2">
            $2M+
          </div>
          <div className="text-white/40 font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            TVL
          </div>
        </div>
        <div role="img" aria-label="15 thousand plus total users">
          <div className="text-white font-manrope text-2xl sm:text-3xl font-bold mb-2">
            15K+
          </div>
          <div className="text-white/40 font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            Total Users
          </div>
        </div>
        <div role="img" aria-label="Zero liquidations">
          <div className="text-primary font-manrope text-2xl sm:text-3xl font-bold mb-2">
            ZERO
          </div>
          <div className="text-white/40 font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            Liquidations
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Ecosystem Section with Abstract Illustration
const EcosystemSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-secondary"
    aria-labelledby="ecosystem-heading"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          id="ecosystem-heading"
          className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          A Complete Ecosystem
        </h2>
        <p className="text-white/50 font-manrope text-base sm:text-lg max-w-2xl mx-auto">
          Three interconnected layers working together to create a
          liquidation-free trading experience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {/* Traders Card */}
        <div className="group relative bg-card border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
          {/* Abstract Geometric Illustration */}
          <div className="mb-6 flex items-center justify-center">
            <TradersIllustration />
          </div>
          <h3 className="text-white font-manrope text-xl font-bold mb-3">
            For Traders
          </h3>
          <p className="text-white/50 font-manrope text-sm leading-relaxed">
            Access leveraged positions without the risk of sudden liquidations.
            Trade with confidence knowing your capital is protected.
          </p>
        </div>

        {/* LPs Card */}
        <div className="group relative bg-card border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
          {/* Abstract Flow Illustration */}
          <div className="mb-6 flex items-center justify-center">
            <LPsIllustration />
          </div>
          <h3 className="text-white font-manrope text-xl font-bold mb-3">
            For Liquidity Providers
          </h3>
          <p className="text-white/50 font-manrope text-sm leading-relaxed">
            Earn enhanced yields on your Uniswap V3 positions. Maximize returns
            while maintaining full control of your liquidity.
          </p>
        </div>

        {/* Builders Card */}
        <div className="group relative bg-card border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
          {/* Abstract Network Illustration */}
          <div className="mb-6 flex items-center justify-center">
            <BuildersIllustration />
          </div>
          <h3 className="text-white font-manrope text-xl font-bold mb-3">
            For Builders
          </h3>
          <p className="text-white/50 font-manrope text-sm leading-relaxed">
            Build on top of our protocol with composable primitives. Integrate
            TimeLock into your DeFi applications.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// How it Works Section
const TradersSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-card overflow-hidden"
    aria-labelledby="traders-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-fuchsia-500/3 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2
          id="traders-heading"
          className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          How It Works
        </h2>
        <p className="text-white/60 font-manrope text-base sm:text-lg max-w-2xl mx-auto">
          A simple, three-step process to unlock leveraged trading without
          liquidation risk
        </p>
      </div>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="group relative">
          <div className="relative flex flex-col md:flex-row items-start gap-6 bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-primary/30 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-manrope text-xl font-bold">
                  1
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-manrope text-xl font-bold mb-3">
                Select Your Position
              </h3>
              <p className="text-white/60 font-manrope text-base leading-relaxed">
                Choose from a variety of trading pairs and leverage levels. Our
                intuitive interface makes it easy to customize your position
                parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group relative">
          <div className="relative flex flex-col md:flex-row items-start gap-6 bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-fuchsia-500/30 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                <span className="text-fuchsia-400 font-manrope text-xl font-bold">
                  2
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-manrope text-xl font-bold mb-3">
                Leverage Uniswap V3 Liquidity
              </h3>
              <p className="text-white/60 font-manrope text-base leading-relaxed">
                Your position is backed by deep Uniswap V3 liquidity pools,
                ensuring efficient execution and minimized slippage.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group relative">
          <div className="relative flex flex-col md:flex-row items-start gap-6 bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/30 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 font-manrope text-xl font-bold">
                  3
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-manrope text-xl font-bold mb-3">
                Trade Without Liquidation Risk
              </h3>
              <p className="text-white/60 font-manrope text-base leading-relaxed">
                Unlike traditional leverage protocols, TimeLock uses time-based
                options to eliminate forced liquidations, even during extreme
                market volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Enhanced Yields Section
const EnhancedYieldsSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-secondary overflow-hidden"
    aria-labelledby="yields-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 w-72 h-72 bg-fuchsia-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full mb-4">
            <span className="text-fuchsia-400 font-manrope text-xs font-semibold uppercase tracking-wide">
              💰 For Liquidity Providers
            </span>
          </div>
          <h2
            id="yields-heading"
            className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-6"
          >
            Enhanced Yields for LPs
          </h2>
          <p className="text-white/60 font-manrope text-base leading-relaxed mb-8">
            TimeLock enables Uniswap V3 liquidity providers to earn additional
            yield by allowing traders to utilize their liquidity for leveraged
            positions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <span className="text-white/70 font-manrope text-base group-hover:text-white/90 transition-colors duration-200">
                Maintain full ownership of your liquidity positions
              </span>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <span className="text-white/70 font-manrope text-base group-hover:text-white/90 transition-colors duration-200">
                Earn premiums from traders using your liquidity
              </span>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <span className="text-white/70 font-manrope text-base group-hover:text-white/90 transition-colors duration-200">
                No impermanent loss from lending activities
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          {/* Abstract Yield Illustration */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <YieldGrowthIllustration />
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full">
                  <span className="text-fuchsia-400 font-manrope text-sm font-bold">
                    Optimized Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// TUSD Stablecoin Section
const TUSDSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-card overflow-hidden"
    aria-labelledby="tusd-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-fuchsia-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          {/* Visual Element with Illustration */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8">
              <div className="flex items-center justify-center">
                <TUSDStablecoinIllustration />
              </div>
              <div className="text-center mt-6 space-y-2">
                <p className="text-white/40 font-manrope text-xs uppercase tracking-widest mb-2">
                  TimeLock USD Stablecoin
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-500/30 rounded-full">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-amber-400 font-manrope text-sm font-bold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            id="tusd-heading"
            className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          >
            Earn <span className="text-amber-400">15-18% APY</span> on
            Stablecoins
          </h2>
          <p className="text-white/60 font-manrope text-lg leading-relaxed mb-8">
            Meet <span className="text-white font-semibold">TUSD</span>—
            yield-bearing stablecoin with institutional-grade returns while
            maintaining complete stability and security.
          </p>

          {/* Yield Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-white font-manrope mb-1">
                15-18%
              </div>
              <p className="text-amber-400 font-manrope text-sm font-semibold">
                Annual Yield
              </p>
            </div>
            <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-white font-manrope mb-1">
                $1.00
              </div>
              <p className="text-fuchsia-400 font-manrope text-sm font-semibold">
                Stable Peg
              </p>
            </div>
          </div>
          {/* Feature List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-white font-manrope text-base font-semibold block mb-0.5">
                  Sustainable Yield Generation
                </span>
                <span className="text-white/60 font-manrope text-sm">
                  Powered by real trading fees and protocol revenue—not
                  inflationary emissions
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-white font-manrope text-base font-semibold block mb-0.5">
                  Fully Collateralized & Audited
                </span>
                <span className="text-white/60 font-manrope text-sm">
                  100% backed by real assets with transparent on-chain reserves
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-white font-manrope text-base font-semibold block mb-0.5">
                  Deep Protocol Integration
                </span>
                <span className="text-white/60 font-manrope text-sm">
                  Native support across all TimeLock products and partners
                </span>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-amber-500 text-white font-manrope font-semibold rounded-xl hover:bg-amber-600 transition-colors duration-300">
              Get Notified
            </button>
            <span className="text-white/50 font-manrope text-sm">
              Join the waitlist for early access
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Builders Section
const BuildersSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-card overflow-hidden"
    aria-labelledby="builders-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2
          id="builders-heading"
          className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          Built for Integration
        </h2>
        <p className="text-white/60 font-manrope text-base sm:text-lg max-w-2xl mx-auto">
          Developer-friendly APIs and composable smart contracts for seamless
          integration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative">
          <div className="relative bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-fuchsia-500/30 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                <ComposableIcon />
              </div>
            </div>
            <h3 className="text-white font-manrope text-xl font-bold mb-3">
              Composable Primitives
            </h3>
            <p className="text-white/60 font-manrope text-base leading-relaxed">
              Build on top of our modular smart contracts. Create custom trading
              interfaces and strategies.
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="relative bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/30 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <DocumentationIcon />
              </div>
            </div>
            <h3 className="text-white font-manrope text-xl font-bold mb-3">
              Open Documentation
            </h3>
            <p className="text-white/60 font-manrope text-base leading-relaxed">
              Comprehensive guides and API references to help you integrate
              TimeLock into your protocol.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Partnerships Section
const PartnershipsSection = () => {
  const partners = [
    {
      name: "Monad",
      logo: "/gemoon.png",
      url: "https://monad.xyz/",
      description: "High-performance layer-1 blockchain",
    },
    {
      name: "STS Digital",
      logo: "/gemoon.png",
      url: "https://monad.xyz/",
      description: "Digital asset management platform",
    },
    {
      name: "Pinot DEX",
      logo: "/pinot.png",
      url: "https://pinot.finance/",
      description: "Decentralized exchange protocol",
    },
    {
      name: "Streamswap",
      logo: "/streamswap.png",
      url: "https://streamswap.io/",
      description: "Token streaming and vesting platform",
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-secondary overflow-hidden"
      aria-labelledby="partnerships-heading"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            id="partnerships-heading"
            className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-4"
          >
            Trusted Partners
          </h2>
          <p className="text-white/60 font-manrope text-base sm:text-lg max-w-2xl mx-auto">
            Building the future of DeFi together with industry-leading protocols
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-white font-manrope text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {partner.name}
                </h3>
                <p className="text-white/60 font-manrope text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                  {partner.description}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-200">
                  <span className="font-manrope text-xs font-semibold uppercase tracking-wide">
                    Learn More
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Discord Community Section
const DiscordCommunitySection = () => {
  // Placeholder values - will be replaced with Discord API integration
  const currentMembers = 347;

  // Sequential tiers - each person gets assigned based on join order
  const tiers = [
    {
      name: "GENESIS",
      range: "0-50",
      limit: 50,
      filled: 50,
      multiplier: "5x",
      icon: "👑",
      color: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "rgba(251, 191, 36, 0.2)",
    },
    {
      name: "PIONEER",
      range: "50-200",
      limit: 200,
      filled: 200,
      multiplier: "3x",
      icon: "🚀",
      color: "from-purple-400 via-pink-500 to-purple-600",
      glowColor: "rgba(168, 85, 247, 0.2)",
    },
    {
      name: "COMMUNITY",
      range: "200-500",
      limit: 500,
      filled: 147,
      multiplier: "2x",
      icon: "💎",
      color: "from-blue-400 via-cyan-500 to-teal-500",
      glowColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "COMMUNITY #2",
      range: "500-1000",
      limit: 1000,
      filled: 0,
      multiplier: "1.5x",
      icon: "✨",
      color: "from-green-400 via-emerald-500 to-green-600",
      glowColor: "rgba(34, 197, 94, 0.2)",
    },
  ];

  // Calculate which tier is currently active
  const getCurrentTierIndex = () => {
    let accumulated = 0;
    for (let i = 0; i < tiers.length; i++) {
      accumulated += tiers[i].limit;
      if (currentMembers <= accumulated) return i;
    }
    return tiers.length - 1;
  };

  const currentTierIndex = getCurrentTierIndex();

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-secondary overflow-hidden"
      aria-labelledby="discord-heading"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            id="discord-heading"
            className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-4"
          >
            Join the Community
          </h2>
          <p className="text-white/60 font-manrope text-base sm:text-lg max-w-2xl mx-auto">
            First 1,000 members get exclusive tiers and multiplied airdrops
          </p>
        </div>

        {/* Main Content: Tiers Left, CTA Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Reward Tiers Vertical List */}
          <div className="space-y-3">
            {tiers.map((tier, i) => {
              const isFilled = tier.filled >= tier.limit;
              const isCurrentTier = i === currentTierIndex;
              const fillPercentage = (tier.filled / tier.limit) * 100;

              return (
                <div
                  key={i}
                  className={`relative group ${
                    isCurrentTier ? "scale-105" : ""
                  } transition-all duration-500`}
                >
                  <div
                    className={`relative backdrop-blur-sm border ${
                      isFilled
                        ? "border-white/5"
                        : isCurrentTier
                          ? "border-white/20"
                          : "border-white/10"
                    } rounded-xl p-5 overflow-hidden transition-all duration-300 ${
                      isCurrentTier ? "shadow-lg" : "hover:border-white/15"
                    }`}
                    style={{
                      background: isFilled
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="relative flex items-start justify-between gap-4">
                      {/* Tier Info */}
                      <div className="flex items-start gap-3">
                        <div
                          className={`text-4xl ${isFilled ? "grayscale opacity-50" : ""}`}
                        >
                          {tier.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3
                              className={`font-manrope text-xl font-black tracking-tight ${
                                isFilled ? "text-white/30" : "text-white"
                              }`}
                            >
                              {tier.name}
                            </h3>
                            {isFilled && (
                              <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs font-bold">
                                FILLED
                              </span>
                            )}
                          </div>
                          <div className="text-white/60 font-semibold text-xs mb-2">
                            Members #{tier.range}
                          </div>
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span className="text-white/70 text-sm font-medium">
                              {tier.filled}/{tier.limit}
                            </span>
                            <span
                              className={`text-sm font-black ${
                                isFilled
                                  ? "text-red-400"
                                  : fillPercentage > 80
                                    ? "text-orange-400"
                                    : "text-green-400"
                              }`}
                            >
                              {fillPercentage.toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all duration-1000"
                              style={{ width: `${fillPercentage}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Multiplier Badge */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`relative px-4 py-3 bg-primary/20 rounded-lg ${
                            isFilled ? "opacity-50" : ""
                          }`}
                        >
                          <div className="text-white/90 text-xs font-bold uppercase tracking-wide">
                            Airdrop
                          </div>
                          <div className="text-white text-3xl font-black">
                            {tier.multiplier}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Join Section */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg">
                <h3 className="text-white font-manrope text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  <span className="text-primary">Join Early.</span>{" "}
                  <span className="text-white">Earn More.</span>
                </h3>

                <p className="text-white/70 font-manrope text-base mb-6 leading-relaxed">
                  First <span className="text-white font-bold">1,000</span>{" "}
                  members receive{" "}
                  <span className="text-primary font-semibold">
                    exclusive tiers
                  </span>{" "}
                  and{" "}
                  <span className="text-fuchsia-400 font-semibold">
                    multiplied airdrops
                  </span>
                </p>

                {/* Live Counter */}
                <div className="relative mb-6">
                  <div className="relative bg-secondary/60 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-5 text-center hover:border-white/20 transition-colors duration-300">
                    <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">
                      Members Joined
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                      {currentMembers}
                    </div>
                    <div className="text-white/50 text-sm font-medium mb-3">
                      / 1,000 Total Spots
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${(currentMembers / 1000) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://discord.gg/timelock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-manrope font-semibold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#5865F2]/30 hover:scale-[1.02] mb-4"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Join Discord</span>
                </a>

                <p className="text-white/50 text-xs text-center">
                  Instant tier assignment • Position locked forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-card"
    aria-labelledby="faq-heading"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2
          id="faq-heading"
          className="text-white font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-white/50 font-manrope text-base sm:text-lg">
          Common questions about trading without liquidations
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem
          value="item-1"
          className="border border-white/10 rounded-lg bg-card px-6"
        >
          <AccordionTrigger className="text-left text-white font-manrope text-base hover:no-underline py-5">
            How is liquidation impossible?
          </AccordionTrigger>
          <AccordionContent className="text-white/60 font-manrope text-sm leading-relaxed pb-5">
            TimeLock uses a time-based options mechanism where traders pay a
            fixed premium upfront. Your position stays open for the full
            duration regardless of price movements, making liquidation
            mathematically impossible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-white/10 rounded-lg bg-card px-6"
        >
          <AccordionTrigger className="text-left text-white font-manrope text-base hover:no-underline py-5">
            What tokens can I trade?
          </AccordionTrigger>
          <AccordionContent className="text-white/60 font-manrope text-sm leading-relaxed pb-5">
            You can trade any ERC20 token that has a Uniswap V3 pool. There are
            no allowlists or restrictions, giving you access to all major
            tokens, new launches, and even memecoins from day one.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border border-white/10 rounded-lg bg-card px-6"
        >
          <AccordionTrigger className="text-left text-white font-manrope text-base hover:no-underline py-5">
            How do LPs earn yield?
          </AccordionTrigger>
          <AccordionContent className="text-white/60 font-manrope text-sm leading-relaxed pb-5">
            Liquidity providers earn the fixed premiums that traders pay
            upfront, plus their share of Uniswap swap fees. LPs are never
            exposed to trader downside, only to premium collection and normal
            AMM rewards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border border-white/10 rounded-lg bg-card px-6"
        >
          <AccordionTrigger className="text-left text-white font-manrope text-base hover:no-underline py-5">
            Can I close positions early?
          </AccordionTrigger>
          <AccordionContent className="text-white/60 font-manrope text-sm leading-relaxed pb-5">
            Yes, you can close your position at any time before expiry. Your
            profit or remaining capital will be settled instantly, and any
            unaccrued premium is automatically returned.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

// Final CTA Section
const FinalCTASection = () => (
  <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-[130px] bg-secondary">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-white/80 font-medium text-sm font-manrope">
          Start Trading Now
        </span>
      </div>

      <h2 className="text-white font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Ready to Trade Without Risk?
      </h2>

      <p className="text-white/50 font-manrope text-base sm:text-lg mb-10 max-w-2xl mx-auto">
        Join thousands of traders using TimeLock to access leverage without
        liquidation risk
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
        <a
          href="https://testnet.timelock.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto bg-primary text-white font-manrope text-[15px] font-semibold px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Launch App
          </button>
        </a>
        <a
          href="https://docs.timelock.trade/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto border border-white/20 bg-white/5 text-white font-manrope text-[15px] font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/30 transition-colors duration-200">
            Read Docs
          </button>
        </a>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="w-full border-t border-white/5 px-4 sm:px-6 lg:px-[130px] py-16 bg-secondary">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Logo and Description */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <TimeLockLogo />
          </div>
          <p className="text-white/50 font-manrope text-sm leading-relaxed">
            Leverage without liquidations. Powered by Uniswap V3.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-white font-manrope text-sm font-semibold mb-4">
            Platform
          </h3>
          <div className="space-y-3">
            <a
              href="https://testnet.timelock.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/50 font-manrope text-sm hover:text-white/80 transition-colors"
            >
              Trade
            </a>
            <a
              href="https://testnet.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/50 font-manrope text-sm hover:text-white/80 transition-colors"
            >
              Earn
            </a>
            <a
              href="https://testnet.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/50 font-manrope text-sm hover:text-white/80 transition-colors"
            >
              Dashboard
            </a>
          </div>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-white font-manrope text-sm font-semibold mb-4">
            Resources
          </h3>
          <div className="space-y-3">
            <a
              href="https://docs.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/50 font-manrope text-sm hover:text-white/80 transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="text-white font-manrope text-sm font-semibold mb-4">
            Community
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/Timelock_Trade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
                <path
                  d="M18.3327 3.45819C18.3327 3.45819 17.7493 5.20819 16.666 6.29152C17.9993 14.6249 8.83268 20.7082 1.66602 15.9582C3.49935 16.0415 5.33268 15.4582 6.66602 14.2915C2.49935 13.0415 0.416016 8.12486 2.49935 4.29152C4.33268 6.45819 7.16602 7.70819 9.99935 7.62486C9.24935 4.12486 13.3327 2.12486 15.8327 4.45819C16.7493 4.45819 18.3327 3.45819 18.3327 3.45819Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://discord.gg/g2UDdpJg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
                <path
                  d="M8.12473 11.0628C8.12473 11.2482 8.06975 11.4294 7.96674 11.5836C7.86372 11.7378 7.71731 11.8579 7.546 11.9289C7.37469 11.9999 7.18619 12.0184 7.00434 11.9823C6.82248 11.9461 6.65543 11.8568 6.52432 11.7257C6.39321 11.5946 6.30392 11.4275 6.26775 11.2457C6.23157 11.0638 6.25014 10.8753 6.3211 10.704C6.39205 10.5327 6.51222 10.3863 6.66639 10.2833C6.82056 10.1803 7.00181 10.1253 7.18723 10.1253C7.43587 10.1253 7.67433 10.224 7.85015 10.3999C8.02596 10.5757 8.12473 10.8141 8.12473 11.0628ZM12.8122 10.1253C12.6268 10.1253 12.4456 10.1803 12.2914 10.2833C12.1372 10.3863 12.0171 10.5327 11.9461 10.704C11.8751 10.8753 11.8566 11.0638 11.8927 11.2457C11.9289 11.4275 12.0182 11.5946 12.1493 11.7257C12.2804 11.8568 12.4475 11.9461 12.6293 11.9823C12.8112 12.0184 12.9997 11.9999 13.171 11.9289C13.3423 11.8579 13.4887 11.7378 13.5917 11.5836C13.6948 11.4294 13.7497 11.2482 13.7497 11.0628C13.7497 10.8141 13.651 10.5757 13.4751 10.3999C13.2993 10.224 13.0609 10.1253 12.8122 10.1253Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://t.me/charandeep_kapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
                <path
                  d="M17.8818 2.17095C17.7849 2.08733 17.6671 2.03172 17.541 2.01011C17.4149 1.98849 17.2853 2.0017 17.1661 2.04829L1.33331 8.24439C1.10893 8.33164 0.918959 8.48943 0.792006 8.69399C0.665054 8.89855 0.60799 9.13882 0.629405 9.37862C0.65082 9.61842 0.749556 9.84477 0.910748 10.0236C1.07194 10.2024 1.28686 10.3241 1.52316 10.3702L5.6255 11.1756V15.7499C5.62469 15.999 5.69874 16.2427 5.83803 16.4492C5.97733 16.6558 6.17546 16.8158 6.40675 16.9085C6.63768 17.0028 6.89164 17.0254 7.13561 16.9734C7.37958 16.9214 7.60227 16.7973 7.77472 16.617L9.75285 14.5655L12.8911 17.3124C13.1175 17.5132 13.4096 17.6243 13.7122 17.6249C13.8448 17.6248 13.9766 17.6039 14.1028 17.5631C14.3091 17.4977 14.4945 17.3794 14.6408 17.22C14.787 17.0606 14.889 16.8656 14.9364 16.6545L18.1075 2.85923C18.1359 2.73482 18.1299 2.60503 18.0901 2.48378C18.0503 2.36253 17.9783 2.25439 17.8818 2.17095Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-manrope text-sm">
            © 2025 TimeLock. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white/60 font-manrope text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/60 font-manrope text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-card font-manrope">
      <Header />
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <TradersSection />
      <EnhancedYieldsSection />
      <BuildersSection />
      <PartnershipsSection />
      <TUSDSection />
      <DiscordCommunitySection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
