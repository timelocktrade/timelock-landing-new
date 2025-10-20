import { ZeroLossPerpsIllustration, CheckmarkIcon } from "@/components/illustrations";

const ZeroLossPerpsSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-background overflow-hidden"
    aria-labelledby="perps-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          {/* Visual Element with Illustration */}
          <div className="relative">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8">
              <div className="flex items-center justify-center">
                <ZeroLossPerpsIllustration />
              </div>
              <div className="text-center mt-6">
                <p className="text-muted-foreground font-manrope text-xs uppercase tracking-widest mb-2">
                  Zero-Loss Perpetuals
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            id="perps-heading"
            className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          >
            Trade Perps with{" "}
            <span className="text-emerald-400">Zero Losses</span>
          </h2>
          <p className="text-muted-foreground font-manrope text-lg leading-relaxed mb-8">
            Revolutionary perpetual futures for retail traders. Pay a{" "}
            <span className="text-foreground font-semibold">
              fixed upfront premium
            </span>{" "}
            and capture unlimited upside—without ever facing losses or
            liquidations.
          </p>

          {/* Feature Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-foreground font-manrope mb-1">
                0
              </div>
              <p className="text-emerald-400 font-manrope text-sm font-semibold">
                Liquidations
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-foreground font-manrope mb-1">
                ∞
              </div>
              <p className="text-blue-400 font-manrope text-sm font-semibold">
                Upside Potential
              </p>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Fixed Premium, Unlimited Gains
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Pay once upfront and enjoy pure upside—your maximum loss is
                  always known
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  No Liquidation Risk
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Trade with confidence—market volatility can't force you out of
                  your position
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Retail-Friendly Design
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Simple mechanics designed for everyday traders, not just
                  institutions
                </span>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-emerald-500 text-foreground font-manrope font-semibold rounded-xl hover:bg-emerald-600 transition-colors duration-300">
              Start Trading
            </button>
            <span className="text-muted-foreground font-manrope text-sm">
              The first zero-loss perps in DeFi
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ZeroLossPerpsSection;
