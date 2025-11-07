import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DiscordCommunitySection = () => {
  const currentMembers = 347;

  const tiers = [
    {
      name: "Genesis",
      range: "0-50",
      limit: 50,
      filled: 50,
      multiplier: "5x",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Pioneer",
      range: "50-200",
      limit: 150,
      filled: 150,
      multiplier: "3x",
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Community",
      range: "200-500",
      limit: 300,
      filled: 147,
      multiplier: "2x",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Community #2",
      range: "500-1000",
      limit: 700,
      filled: 0,
      multiplier: "1.5x",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const getCurrentTierIndex = () => {
    let accumulated = 0;
    for (let i = 0; i < tiers.length; i++) {
      accumulated += tiers[i].limit;
      if (currentMembers <= accumulated) return i;
    }
    return tiers.length - 1;
  };

  const currentTierIndex = getCurrentTierIndex();

  return (
    <section
      className="relative py-24 px-4 sm:px-6 md:px-32 bg-background"
      aria-labelledby="discord-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="discord-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Join the Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Early members receive exclusive tier rewards and airdrop multipliers
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,450px] gap-24 items-start">
          {/* Tiers List */}
          <div className="space-y-3">
            {tiers.map((tier, i) => {
              const isFilled = tier.filled >= tier.limit;
              const isActive = i === currentTierIndex;
              const fillPercentage = (tier.filled / tier.limit) * 100;

              return (
                <Card
                  key={i}
                  className={`group transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 shadow-lg shadow-primary/5"
                      : "border-border/50 hover:border-border"
                  } ${isFilled ? "opacity-60" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-6">
                      {/* Left: Tier Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {tier.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            #{tier.range}
                          </Badge>
                          {isFilled && (
                            <Badge variant="outline" className="text-xs">
                              Full
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground font-medium min-w-[80px]">
                            {tier.filled} / {tier.limit}
                          </span>
                          <Progress
                            value={fillPercentage}
                            className="flex-1 h-2"
                          />
                        </div>
                      </div>

                      {/* Right: Multiplier */}
                      <div className="flex-shrink-0">
                        <div
                          className={`bg-gradient-to-br ${tier.color} px-5 py-3 rounded-lg text-center`}
                        >
                          <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                            Airdrop
                          </div>
                          <div className="text-white text-2xl font-bold">
                            {tier.multiplier}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className="lg:sticky lg:top-8">
            <Card className="border-primary/20 shadow-xl">
              <CardContent className="p-8 space-y-6">
                {/* Headline */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Secure Your Spot
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Join now to lock in your tier and maximize airdrop rewards
                  </p>
                </div>

                {/* Stats */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted-foreground font-medium">
                      Members
                    </span>
                    <span className="text-3xl font-bold text-foreground">
                      {currentMembers}
                    </span>
                  </div>
                  <Progress
                    value={(currentMembers / 1000) * 100}
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    {1000 - currentMembers} spots remaining
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://discord.gg/timelock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    Join Discord
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your tier position is locked permanently
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordCommunitySection;
