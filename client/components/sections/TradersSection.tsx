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
          className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          How It Works
        </h2>
        <p className="text-muted-foreground font-manrope text-base sm:text-lg max-w-2xl mx-auto">
          A simple, three-step process to unlock leveraged trading without
          liquidation risk
        </p>
      </div>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="group relative">
          <div className="relative flex flex-col md:flex-row items-start gap-6 backdrop-blur-sm border border-border rounded-2xl p-8 group-hover:border-primary/30 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-manrope text-xl font-bold">
                  1
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
                Select Your Position
              </h3>
              <p className="text-muted-foreground font-manrope text-base leading-relaxed">
                Choose from a variety of trading pairs and leverage levels. Our
                intuitive interface makes it easy to customize your position
                parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group relative">
          <div className="relative flex flex-col md:flex-row items-start gap-6 backdrop-blur-sm border border-border rounded-2xl p-8 group-hover:border-fuchsia-500/30 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                <span className="text-fuchsia-400 font-manrope text-xl font-bold">
                  2
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
                Leverage Uniswap V3 Liquidity
              </h3>
              <p className="text-muted-foreground font-manrope text-base leading-relaxed">
                Your position is backed by deep Uniswap V3 liquidity pools,
                ensuring efficient execution and minimized slippage.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group relative">
          <div className="relative flex flex-col md:flex-row items-start gap-6 backdrop-blur-sm border border-border rounded-2xl p-8 group-hover:border-purple-500/30 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 font-manrope text-xl font-bold">
                  3
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
                Trade Without Liquidation Risk
              </h3>
              <p className="text-muted-foreground font-manrope text-base leading-relaxed">
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

export default TradersSection;
