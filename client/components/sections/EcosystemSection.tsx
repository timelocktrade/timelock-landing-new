import {
  TradersIllustration,
  LPsIllustration,
  BuildersIllustration,
} from "@/components/illustrations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EcosystemSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-32 bg-card"
    aria-labelledby="ecosystem-heading"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          id="ecosystem-heading"
          className="text-foreground font-display text-3xl sm:text-4xl font-bold mb-4"
        >
          A Complete Ecosystem
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Three interconnected layers working together to create a
          liquidation-free trading experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {/* Traders Card */}
        <Card className="group hover:border-border transition-colors duration-300">
          <CardHeader className="pb-4">
            {/* Abstract Geometric Illustration */}
            <div className="mb-2 flex items-center justify-center">
              <TradersIllustration />
            </div>
            <CardTitle className="text-foreground font-display text-xl font-bold">
              For Traders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-base leading-relaxed">
              Access leveraged positions without the risk of sudden
              liquidations.
            </p>
          </CardContent>
        </Card>

        {/* LPs Card */}
        <Card className="group hover:border-border transition-colors duration-300">
          <CardHeader className="pb-4">
            {/* Abstract Flow Illustration */}
            <div className="mb-2 flex items-center justify-center">
              <LPsIllustration />
            </div>
            <CardTitle className="text-foreground font-display text-xl font-bold">
              For Liquidity Providers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-base leading-relaxed">
              Earn enhanced yields on your Uniswap V3 positions.
            </p>
          </CardContent>
        </Card>

        {/* Builders Card */}
        <Card className="group hover:border-border transition-colors duration-300">
          <CardHeader className="pb-4">
            {/* Abstract Network Illustration */}
            <div className="mb-2 flex items-center justify-center">
              <BuildersIllustration />
            </div>
            <CardTitle className="text-foreground font-display text-xl font-bold">
              For Builders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-base leading-relaxed">
              Build on top of our protocol with composable primitives.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default EcosystemSection;
