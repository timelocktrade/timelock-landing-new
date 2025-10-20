import { ComposableIcon, DocumentationIcon } from "@/components/illustrations";

const BuildersSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-background overflow-hidden"
    aria-labelledby="builders-heading"
  >
    {/* Subtle background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2
          id="builders-heading"
          className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-4"
        >
          Built for Integration
        </h2>
        <p className="text-muted-foreground font-manrope text-base sm:text-lg max-w-2xl mx-auto">
          Developer-friendly APIs and composable smart contracts for seamless
          integration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative">
          <div className="relative backdrop-blur-sm border border-border rounded-2xl p-8 group-hover:border-fuchsia-500/30 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                <ComposableIcon />
              </div>
            </div>
            <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
              Composable Primitives
            </h3>
            <p className="text-muted-foreground font-manrope text-base leading-relaxed">
              Build on top of our modular smart contracts. Create custom trading
              interfaces and strategies.
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="relative backdrop-blur-sm border border-border rounded-2xl p-8 group-hover:border-purple-500/30 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <DocumentationIcon />
              </div>
            </div>
            <h3 className="text-foreground font-manrope text-xl font-bold mb-3">
              Open Documentation
            </h3>
            <p className="text-muted-foreground font-manrope text-base leading-relaxed">
              Comprehensive guides and API references to help you integrate
              TimeLock into your protocol.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BuildersSection;
