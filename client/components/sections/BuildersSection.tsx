import { Card, CardContent } from "@/components/ui/card";
import { ComposableIcon, DocumentationIcon } from "@/components/illustrations";

const BuildersSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-32 bg-background overflow-hidden"
    aria-labelledby="builders-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
    </div>

    <div className="mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2
          id="builders-heading"
          className="text-foreground font-display text-3xl sm:text-4xl font-bold mb-4"
        >
          Built for Integration
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Developer-friendly APIs and composable smart contracts for seamless
          integration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="group relative backdrop-blur-sm border-border hover:border-fuchsia-500/30 transition-all duration-300">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="w-12 h-12 bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                <ComposableIcon />
              </div>
            </div>
            <h3 className="text-foreground font-display text-xl font-bold mb-3">
              Composable Primitives
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Build on top of our modular smart contracts. Create custom trading
              interfaces and strategies.
            </p>
          </CardContent>
        </Card>

        <Card className="group relative backdrop-blur-sm border-border hover:border-purple-500/30 transition-all duration-300">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <DocumentationIcon />
              </div>
            </div>
            <h3 className="text-foreground font-display text-xl font-bold mb-3">
              Open Documentation
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Comprehensive guides and API references to help you integrate
              TimeLock into your protocol.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default BuildersSection;
