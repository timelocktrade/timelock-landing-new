import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PartnershipsSection = () => {
  const partners = [
    {
      name: "Monad",
      logo: "/monad.png",
      url: "https://monad.xyz/",
      description: "High-performance layer-1 blockchain",
    },
    {
      name: "Memesteroid",
      logo: "/memesteroid.png",
      url: "https://monad.xyz/",
      description: "Digital asset management platform",
    },
    {
      name: "Pinot DEX",
      logo: "/pinot.png",
      url: "https://pinot.finance/",
      description: "Decentralized exchange protocol",
    },
    {
      name: "Streamswap",
      logo: "/streamswap.png",
      url: "https://streamswap.io/",
      description: "Token streaming and vesting platform",
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-32 lg:py-36 px-4 sm:px-6 md:px-32 bg-card overflow-hidden"
      aria-labelledby="partnerships-heading"
    >
      <div className="mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2
            id="partnerships-heading"
            className="text-foreground font-display text-3xl sm:text-4xl font-bold mb-4"
          >
            Trusted Partners
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Building the future of DeFi together with industry-leading protocols
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <Card
              key={i}
              className="relative bg-background/80 backdrop-blur-sm transition-all duration-300 h-full"
            >
              <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                <div className="w-full flex justify-center pb-6">
                  <div className="h-28 w-28 rounded-xl overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-foreground font-display text-xl font-bold mb-2 transition-colors duration-200">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-200">
                    {partner.description}
                  </p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex group justify-center gap-2"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Learn More
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
