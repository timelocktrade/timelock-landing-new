import {
  TUSDStablecoinIllustration,
  CheckmarkIcon,
} from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TUSDSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4ju sm:px-6 md:px-32 bg-background overflow-hidden"
    aria-labelledby="tusd-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-fuchsia-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl" />
    </div>

    <div className="mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Visual Element with Illustration */}
        <Card className="border-none bg-transparent order-2 lg:order-1">
          <div className="flex items-center justify-center">
            <TUSDStablecoinIllustration />
          </div>
          <div className="text-center mt-6 space-y-2">
            <Badge
              variant="outline"
              className="bg-amber-500/15 border-amber-500/30 text-amber-400 hover:bg-amber-500/15"
            >
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2" />
              <span className="text-sm font-bold">Coming Soon</span>
            </Badge>
          </div>
        </Card>

        <div className="order-1 lg:order-2">
          <h2
            id="tusd-heading"
            className="text-foreground font-display text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          >
            Earn <span className="text-amber-400">15-18% APY</span> on
            Stablecoins
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Meet <span className="text-foreground font-semibold">TUSD</span>—
            yield-bearing stablecoin with institutional-grade returns while
            maintaining complete stability and security.
          </p>

          {/* Yield Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card className="bg-amber-500/10 border-amber-500/30 py-4 px-6">
              <div className="text-3xl font-bold text-white font-display mb-1">
                15-18%
              </div>
              <p className="text-amber-400 text-sm font-semibold">
                Annual Yield
              </p>
            </Card>
            <Card className="bg-fuchsia-500/10 border-fuchsia-500/30 py-4 px-6">
              <div className="text-3xl font-bold text-white font-display mb-1">
                $1.00
              </div>
              <p className="text-fuchsia-400 text-sm font-semibold">
                Stable Peg
              </p>
            </Card>
          </div>
          {/* Feature List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6  bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground text-base font-semibold block mb-0.5">
                  Sustainable Yield Generation
                </span>
                <span className="text-muted-foreground text-sm">
                  Powered by real trading fees and protocol revenue—not
                  inflationary emissions
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6  bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground text-base font-semibold block mb-0.5">
                  Fully Collateralized & Audited
                </span>
                <span className="text-muted-foreground text-sm">
                  100% backed by real assets with transparent on-chain reserves
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-6 h-6  bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckmarkIcon />
              </div>
              <div>
                <span className="text-foreground text-base font-semibold block mb-0.5">
                  Deep Protocol Integration
                </span>
                <span className="text-muted-foreground text-sm">
                  Native support across all TimeLock products and partners
                </span>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              className="bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors"
              size="lg"
            >
              Get Notified
            </Button>
            <span className="text-white/50 text-sm">
              Join the waitlist for early access
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TUSDSection;
