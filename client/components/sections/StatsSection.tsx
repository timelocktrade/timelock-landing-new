import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const StatsSection = () => (
  <section
    className="relative px-4 sm:px-6 lg:px-8 py-10 bg-background"
    role="region"
    aria-label="Protocol statistics"
  >
    <div className="max-w-4xl mx-auto">
      {/* Horizontal Divider */}
      <Separator className="mb-8" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent
            className="p-4"
            role="img"
            aria-label="5 million plus total trading volume"
          >
            <div className="text-foreground font-display text-2xl sm:text-3xl font-bold mb-2">
              $5M+
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide uppercase">
              Total Volume
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent
            className="p-4"
            role="img"
            aria-label="2 million plus total value locked"
          >
            <div className="text-foreground font-display text-2xl sm:text-3xl font-bold mb-2">
              $2M+
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide uppercase">
              TVL
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent
            className="p-4"
            role="img"
            aria-label="15 thousand plus total users"
          >
            <div className="text-foreground font-display text-2xl sm:text-3xl font-bold mb-2">
              15K+
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide uppercase">
              Total Users
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent
            className="p-4"
            role="img"
            aria-label="Zero liquidations"
          >
            <div className="text-primary font-display text-2xl sm:text-3xl font-bold mb-2">
              ZERO
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide uppercase">
              Liquidations
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default StatsSection;
