import { ChevronRight } from "lucide-react";

const PartnershipsSection = () => {
  const partners = [
    {
      name: "Monad",
      logo: "/gemoon.png",
      url: "https://monad.xyz/",
      description: "High-performance layer-1 blockchain",
    },
    {
      name: "STS Digital",
      logo: "/gemoon.png",
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
      className="relative py-20 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-[130px] bg-card overflow-hidden"
      aria-labelledby="partnerships-heading"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2
            id="partnerships-heading"
            className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-4"
          >
            Trusted Partners
          </h2>
          <p className="text-muted-foreground font-manrope text-base sm:text-lg max-w-2xl mx-auto">
            Building the future of DeFi together with industry-leading protocols
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-background/80 backdrop-blur-sm text-center rounded-lg overflow-hidden group-hover:border-primary/20 transition-all duration-300 h-full flex flex-col justify-between">
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
                  <h3 className="text-foreground font-manrope text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground font-manrope text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-200">
                    {partner.description}
                  </p>
                  <div className="w-full flex justify-center items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-200">
                    <span className=" font-manrope text-xs font-semibold uppercase tracking-wide">
                      Learn More
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
