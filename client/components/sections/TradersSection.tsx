import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const TradersSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-32 bg-card overflow-hidden"
    aria-labelledby="traders-heading"
  >
    {/* Enhanced background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
    </div>

    <div className="mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2
          id="traders-heading"
          className="text-foreground font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-fuchsia-400 bg-clip-text"
        >
          How It Works
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          A simple, three-step process to unlock leveraged trading without
          liquidation risk
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 relative">
        {/* Connecting lines */}
        <div className="hidden md:block absolute left-[70px] top-[120px] bottom-[120px] w-0.5 bg-gradient-to-b from-primary via-fuchsia-500 to-purple-500 opacity-20" />

        {/* Step 1 */}
        <Card className="group relative">
          <CardContent className="flex flex-col md:flex-row items-start gap-6 p-6 sm:p-8">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-300" />
              <Badge className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 border-0 flex items-center justify-center text-primary-foreground font-display text-2xl font-bold shadow-lg">
                1
              </Badge>
            </div>
            <div className="flex-1">
              <CardTitle className="text-foreground font-display text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                Select Your Position
              </CardTitle>
              <p className="text-muted-foreground text-base leading-relaxed">
                Choose from a variety of trading pairs and leverage levels. Our
                intuitive interface makes it easy to customize your position
                parameters.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="group relative">
          <CardContent className="flex flex-col md:flex-row items-start gap-6 p-6 sm:p-8">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-fuchsia-500/20 rounded-2xl blur-xl group-hover:bg-fuchsia-500/30 transition-all duration-300" />
              <Badge className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 border-0 flex items-center justify-center text-white font-display text-2xl font-bold">
                2
              </Badge>
            </div>
            <div className="flex-1">
              <CardTitle className="text-foreground font-display text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                Leverage Uniswap V3 Liquidity
              </CardTitle>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your position is backed by deep Uniswap V3 liquidity pools,
                ensuring efficient execution and minimized slippage.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="group relative">
          <CardContent className="flex flex-col md:flex-row items-start gap-6 p-6 sm:p-8">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:bg-purple-500/30 transition-all duration-300" />
              <Badge className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 border-0 flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg">
                3
              </Badge>
            </div>
            <div className="flex-1">
              <CardTitle className="text-foreground font-display text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                Trade Without Liquidation Risk
              </CardTitle>
              <p className="text-muted-foreground text-base leading-relaxed">
                Unlike traditional leverage protocols, TimeLock uses time-based
                options to eliminate forced liquidations, even during extreme
                market volatility.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default TradersSection;
