import { YieldGrowthIllustration, CheckmarkIcon } from "@/components/illustrations";

const EnhancedYieldsSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-background overflow-hidden"
    aria-labelledby="yields-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-fuchsia-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-1 lg:order-1">
          <h2
            id="yields-heading"
            className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          >
            Supercharge Your <span className="text-fuchsia-400">LP Yields</span>
          </h2>
          <p className="text-muted-foreground font-manrope text-lg leading-relaxed mb-8">
            Turn your Uniswap V3 liquidity into a{" "}
            <span className="text-foreground font-semibold">
              yield-generating powerhouse
            </span>
            . Earn additional premiums from traders without giving up control or
            taking on impermanent loss risk.
          </p>

          {/* Feature Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-foreground font-manrope mb-1">
                20-30%
              </div>
              <p className="text-fuchsia-400 font-manrope text-sm font-semibold">
                Yield Boost
              </p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-foreground font-manrope mb-1">
                100%
              </div>
              <p className="text-amber-400 font-manrope text-sm font-semibold">
                LP Control
              </p>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Full Position Ownership
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Maintain complete control over your Uniswap V3 liquidity at
                  all times
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Premium Income Stream
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Collect additional fees from traders leveraging your liquidity
                  positions
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Zero Added IL Risk
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Lending activities don't introduce any additional impermanent
                  loss exposure
                </span>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-fuchsia-500 text-foreground font-manrope font-semibold rounded-xl hover:bg-fuchsia-600 transition-colors duration-300">
              Boost Your Yields
            </button>
            <span className="text-muted-foreground font-manrope text-sm">
              For Uniswap V3 liquidity providers
            </span>
          </div>
        </div>

        <div className="relative order-2 lg:order-2">
          {/* Visual Element with Illustration */}
          <div className="relative">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8">
              <div className="flex items-center justify-center">
                <YieldGrowthIllustration />
              </div>
              <div className="text-center mt-6 space-y-2">
                <p className="text-muted-foreground font-manrope text-xs uppercase tracking-widest mb-2">
                  Enhanced LP Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnhancedYieldsSection;
