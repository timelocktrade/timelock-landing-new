const StatsSection = () => (
  <section
    className="relative px-4 sm:px-6 lg:px-8 py-10 bg-background"
    role="region"
    aria-label="Protocol statistics"
  >
    <div className="max-w-4xl mx-auto">
      {/* Horizontal Divider */}
      <div className="w-full h-px bg-accent mb-8"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
        <div role="img" aria-label="5 million plus total trading volume">
          <div className="text-foreground font-manrope text-2xl sm:text-3xl font-bold mb-2">
            $5M+
          </div>
          <div className="text-muted-foreground font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            Total Volume
          </div>
        </div>
        <div role="img" aria-label="2 million plus total value locked">
          <div className="text-foreground font-manrope text-2xl sm:text-3xl font-bold mb-2">
            $2M+
          </div>
          <div className="text-muted-foreground font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            TVL
          </div>
        </div>
        <div role="img" aria-label="15 thousand plus total users">
          <div className="text-foreground font-manrope text-2xl sm:text-3xl font-bold mb-2">
            15K+
          </div>
          <div className="text-muted-foreground font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            Total Users
          </div>
        </div>
        <div role="img" aria-label="Zero liquidations">
          <div className="text-primary font-manrope text-2xl sm:text-3xl font-bold mb-2">
            ZERO
          </div>
          <div className="text-muted-foreground font-manrope text-xs sm:text-sm font-medium tracking-wide uppercase">
            Liquidations
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
