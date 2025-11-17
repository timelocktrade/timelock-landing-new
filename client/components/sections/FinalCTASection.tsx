import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FinalCTASection = () => (
  <section className="relative py-24 sm:py-28 px-4 sm:px-6 md:px-32 bg-card">
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <Badge
        variant="secondary"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent/50 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-foreground/80 font-medium text-sm">
          Start Trading Now
        </span>
      </Badge>

      <h2 className="text-foreground font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
        Ready to Trade Without Risk?
      </h2>

      <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
        Join thousands of traders using TimeLock to access leverage without
        liquidation risk
      </p>

      <div className="flex items-center gap-3 justify-center">
        <Button
          size="lg"
          className="text-[15px] font-semibold px-8 py-3"
          asChild
        >
          <a
            href="https://testnet.timelock.trade"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="border border-border bg-accent/50 text-[15px] font-semibold px-8 py-3 hover:bg-accent hover:border-border"
          asChild
        >
          <a
            href="https://docs.timelock.trade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
