const DiscordCommunitySection = () => {
  // Placeholder values - will be replaced with Discord API integration
  const currentMembers = 347;

  // Sequential tiers - each person gets assigned based on join order
  const tiers = [
    {
      name: "GENESIS",
      range: "0-50",
      limit: 50,
      filled: 50,
      multiplier: "5x",
      icon: "👑",
      color: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "rgba(251, 191, 36, 0.2)",
    },
    {
      name: "PIONEER",
      range: "50-200",
      limit: 150,
      filled: 150,
      multiplier: "3x",
      icon: "🚀",
      color: "from-purple-400 via-pink-500 to-purple-600",
      glowColor: "rgba(168, 85, 247, 0.2)",
    },
    {
      name: "COMMUNITY",
      range: "200-500",
      limit: 300,
      filled: 147,
      multiplier: "2x",
      icon: "💎",
      color: "from-blue-400 via-cyan-500 to-teal-500",
      glowColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "COMMUNITY #2",
      range: "500-1000",
      limit: 700,
      filled: 0,
      multiplier: "1.5x",
      icon: "✨",
      color: "from-green-400 via-emerald-500 to-green-600",
      glowColor: "rgba(34, 197, 94, 0.2)",
    },
  ];

  // Calculate which tier is currently active
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
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-[130px] bg-card overflow-hidden"
      aria-labelledby="discord-heading"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            id="discord-heading"
            className="text-foreground font-manrope text-3xl sm:text-4xl font-bold mb-4"
          >
            Join the Community
          </h2>
          <p className="text-muted-foreground font-manrope text-base sm:text-lg max-w-2xl mx-auto">
            First 1,000 members get exclusive tiers and multiplied airdrops
          </p>
        </div>

        {/* Main Content: Tiers Left, CTA Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Reward Tiers Vertical List */}
          <div className="space-y-4">
            {tiers.map((tier, i) => {
              const isFilled = tier.filled >= tier.limit;
              const isCurrentTier = i === currentTierIndex;
              const fillPercentage = (tier.filled / tier.limit) * 100;

              return (
                <div
                  key={i}
                  className={`relative group ${
                    isCurrentTier ? "scale-105" : ""
                  } transition-all duration-500`}
                >
                  <div
                    className={`relative backdrop-blur-sm border ${
                      isFilled
                        ? "border-border/50"
                        : isCurrentTier
                          ? "border-border"
                          : "border-border"
                    } rounded-xl p-5 overflow-hidden transition-all duration-300 ${
                      isCurrentTier ? "shadow-lg" : "hover:border-border"
                    }`}
                    style={{
                      background: !isCurrentTier
                        ? "hsl(var(--card) / 0.5)"
                        : "hsl(var(--card) / 0.7)",
                    }}
                  >
                    <div className="relative flex items-start justify-between gap-4">
                      {/* Tier Info */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`text-4xl ${!isCurrentTier ? "grayscale opacity-50" : ""}`}
                        >
                          {tier.icon}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-1">
                            <h3
                              className={`font-manrope text-xl font-black tracking-tight ${
                                !isCurrentTier
                                  ? "text-muted-foreground/30"
                                  : "text-foreground"
                              }`}
                            >
                              {tier.name}
                            </h3>

                            <span className="px-2 py-0.5 border text-muted-foreground bg-card rounded text-xs font-bold">
                              Members #{tier.range}
                            </span>
                            {isFilled && (
                              <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs font-bold">
                                FILLED
                              </span>
                            )}
                          </div>
                          <div className="flex items-center  gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-foreground/70 text-sm font-medium">
                                {tier.filled}/{tier.limit}
                              </span>
                            </div>
                            <div className="w-48 h-2 bg-accent/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-1000"
                                style={{ width: `${fillPercentage}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Multiplier Badge */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`relative px-4 py-1 bg-primary/20 rounded-lg ${
                            !isCurrentTier ? "opacity-50" : ""
                          }`}
                        >
                          <div className="text-foreground/90 text-xs font-bold uppercase tracking-wide">
                            Airdrop
                          </div>
                          <div className="text-foreground text-3xl font-black">
                            {tier.multiplier}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Join Section */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="bg-background/80 backdrop-blur-sm px-8 shadow-lg">
                <h3 className="text-foreground font-manrope text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  <span className="text-primary">Join Early.</span>{" "}
                  <span className="text-foreground">Earn More.</span>
                </h3>

                <p className="text-foreground/70 font-manrope text-base mb-6 leading-relaxed">
                  First <span className="text-foreground font-bold">1,000</span>{" "}
                  members receive{" "}
                  <span className="text-primary font-semibold">
                    exclusive tiers
                  </span>{" "}
                  and{" "}
                  <span className="text-fuchsia-400 font-semibold">
                    multiplied airdrops
                  </span>
                </p>

                {/* Live Counter */}
                <div className="relative mb-6">
                  <div className="relative bg-card/60 backdrop-blur-sm border border-border rounded-xl px-6 py-5 text-center hover:border-border transition-colors duration-300">
                    <div className="text-muted-foreground text-xs uppercase tracking-wider mb-2 font-semibold">
                      Members Joined
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                      {currentMembers}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium mb-3">
                      / 1,000 Total Spots
                    </div>
                    <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${(currentMembers / 1000) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://discord.gg/timelock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-foreground font-manrope font-semibold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:scale-[1.02] mb-4"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Join Discord</span>
                </a>

                <p className="text-muted-foreground text-xs text-center">
                  Instant tier assignment • Position locked forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordCommunitySection;
