const FinalCTASection = () => (
  <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-[130px] bg-background">
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent/50 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-foreground/80 font-medium text-sm font-manrope">
          Start Trading Now
        </span>
      </div>

      <h2 className="text-foreground font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold">
        Ready to Trade Without Risk?
      </h2>

      <p className="text-muted-foreground font-manrope text-base sm:text-lg max-w-xl mx-auto">
        Join thousands of traders using TimeLock to access leverage without
        liquidation risk
      </p>

      <div className="flex items-center gap-3 justify-center">
        <a
          href="https://testnet.timelock.trade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary text-foreground font-manrope text-[15px] font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Launch App
          </button>
        </a>
        <a
          href="https://docs.timelock.trade/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-border bg-accent/50 text-foreground font-manrope text-[15px] font-semibold px-8 py-3 rounded-lg hover:bg-accent hover:border-border transition-colors duration-200">
            Read Docs
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
