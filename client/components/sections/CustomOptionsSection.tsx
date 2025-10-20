import { CustomOptionsIllustration, CheckmarkIcon } from "@/components/illustrations";

const CustomOptionsSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-background overflow-hidden"
    aria-labelledby="options-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-500/4 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-1 lg:order-1">
          <h2
            id="options-heading"
            className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          >
            Fully <span className="text-purple-400">Customizable</span> Options
          </h2>
          <p className="text-muted-foreground font-manrope text-lg leading-relaxed mb-8">
            Institutional-grade options with{" "}
            <span className="text-foreground font-semibold">
              arbitrary durations
            </span>{" "}
            and{" "}
            <span className="text-foreground font-semibold">
              custom strike prices
            </span>
            . The first truly flexible options platform in DeFi.
          </p>

          {/* Feature Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-foreground font-manrope mb-1">
                Any
              </div>
              <p className="text-purple-400 font-manrope text-sm font-semibold">
                Duration
              </p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-5">
              <div className="text-3xl font-bold text-foreground font-manrope mb-1">
                Custom
              </div>
              <p className="text-pink-400 font-manrope text-sm font-semibold">
                Strike Price
              </p>
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Arbitrary Duration Control
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Set any expiration date—from hours to years—tailored to your
                  strategy
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Precision Strike Pricing
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Define exact strike prices for sophisticated hedging and
                  speculation
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground font-manrope text-base font-semibold block mb-0.5">
                  Built for Institutions
                </span>
                <span className="text-muted-foreground font-manrope text-sm">
                  Professional-grade tools designed for complex trading
                  strategies
                </span>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-purple-500 text-foreground font-manrope font-semibold rounded-xl hover:bg-purple-600 transition-colors duration-300">
              Explore Options
            </button>
            <span className="text-muted-foreground font-manrope text-sm">
              First in DeFi with full customization
            </span>
          </div>
        </div>

        <div className="relative order-2 lg:order-2">
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-6 lg:p-8">
            <div className="flex items-center justify-center">
              <CustomOptionsIllustration />
            </div>
            <div className="text-center mt-6 space-y-2">
              <p className="text-muted-foreground font-manrope text-xs uppercase tracking-widest mb-2">
                Custom Options Trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CustomOptionsSection;
