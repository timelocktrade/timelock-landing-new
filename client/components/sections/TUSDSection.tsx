import { TUSDStablecoinIllustration, CheckmarkIcon } from "@/components/illustrations";

const TUSDSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-background overflow-hidden"
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
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8">
              <div className="flex items-center justify-center">
                <TUSDStablecoinIllustration />
              </div>
              <div className="text-center mt-6 space-y-2">
                <p className="text-muted-foreground font-manrope text-xs uppercase tracking-widest mb-2">
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
            className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          >
            Earn <span className="text-amber-400">15-18% APY</span> on
            Stablecoins
          </h2>
          <p className="text-muted-foreground font-manrope text-lg leading-relaxed mb-8">
            Meet <span className="text-foreground font-semibold">TUSD</span>—
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
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Sustainable Yield Generation
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
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
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Fully Collateralized & Audited
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  100% backed by real assets with transparent on-chain reserves
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Deep Protocol Integration
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
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

export default TUSDSection;
