import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TrendingUp, Droplets, Shield } from "lucide-react";

const TradersSection = () => (
  <section
    className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-32 bg-card"
    aria-labelledby="traders-heading"
  >
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2
          id="traders-heading"
          className="text-foreground font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          How It Works
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          A simple, three-step process to unlock leveraged trading without
          liquidation risk
        </p>
      </div>

      <div className="grid gap-8 md:gap-4">
        {/* Step 1 */}
        <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col md:flex-row items-start gap-4 p-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12  bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-3 text-sm font-semibold text-primary uppercase">
                <span>STEP 1</span>
                <CardTitle className="text-foreground font-display text-base">
                  Select Your Position
                </CardTitle>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Choose from a variety of trading pairs and leverage levels. Our
                intuitive interface makes it easy to customize your position
                parameters.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col md:flex-row items-start gap-4 p-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12  bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-3 text-sm font-semibold text-primary uppercase">
                <span className="text-primary">STEP 2</span>
                <CardTitle className="text-foreground font-display text-base">
                  Leverage Uniswap V3 Liquidity
                </CardTitle>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your position is backed by deep Uniswap V3 liquidity pools,
                ensuring efficient execution and minimized slippage.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col md:flex-row items-start gap-4 p-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12  bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-3 text-sm font-semibold text-primary uppercase">
                <span className="text-primary">STEP 3</span>
                <CardTitle className="text-foreground font-display text-base">
                  Trade Without Liquidation Risk
                </CardTitle>
              </div>
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
