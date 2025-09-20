import { cn } from "@/lib/utils";

// Logo Component
const TimeLockLogo = () => (
  <div className="flex items-center">
    <svg
      width="189"
      height="30"
      viewBox="0 0 189 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="#F0F0F0"
        style={{ whiteSpace: "pre" }}
        className="font-basel font-normal text-[20.9px] tracking-[0.27em]"
      >
        <tspan x="36.4841" y="21.0057">
          TIME LOCK
        </tspan>
      </text>
      <path
        d="M13.0615 11.4797H6.34157V18.4919C6.63374 26.6435 14.7728 30.132 19.3067 29.9962V23.4589C14.3982 22.9037 13.0615 19.7009 13.0615 18.1566V11.4797Z"
        fill="white"
      />
      <path
        d="M0.250305 12.9944V5.83385C5.2578 5.51351 6.32607 1.81118 6.23426 6.10352e-05H13.0194C13.0194 8.5854 5.33973 12.9944 0.250305 12.9944Z"
        fill="white"
      />
    </svg>
  </div>
);

// Header Component
const Header = () => (
  <header className="w-full px-8 lg:px-[130px] py-4 flex items-center justify-between">
    <TimeLockLogo />

    <nav className="hidden lg:flex items-center gap-3">
      <a
        href="#"
        className="px-2 py-1.5 text-white font-manrope text-base font-normal hover:text-white/80 transition-colors"
      >
        Trade
      </a>
      <a
        href="#"
        className="px-2 py-1.5 text-[#A6B0C3] font-manrope text-base font-normal hover:text-white transition-colors"
      >
        Earn
      </a>
      <a
        href="#"
        className="px-2 py-1.5 text-[#A6B0C3] font-manrope text-base font-normal hover:text-white transition-colors"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="px-2 py-1.5 text-[#A6B0C3] font-manrope text-base font-normal hover:text-white transition-colors"
      >
        Docs
      </a>
    </nav>

    <a href="https://testnet.timelock.trade">
      <button className="bg-white text-black font-manrope text-[15px] font-bold px-[15px] py-[7.5px] rounded-[10px] hover:bg-white/90 transition-colors">
        Launch App
      </button>
    </a>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section
    className="relative min-h-screen flex flex-col items-center justify-center px-4 lg:px-0"
    style={{
      background: `radial-gradient(50% 50% at 50% 50%, rgba(123, 111, 111, 0.20) 0%, rgba(12, 12, 12, 0.20) 100%), #000`,
    }}
  >
    <div className="flex flex-col items-center gap-10 max-w-[909px] w-full text-center">
      {/* Testnet Live Badge */}
      <div className="inline-flex items-center px-[18px] py-2 rounded-[12px] border border-[#282324] bg-black/50 backdrop-blur-sm">
        <span className="text-white font-normal text-[13px] font-manrope leading-[158.7%] tracking-[-0.39px]">
          Testnet Live
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-white font-manrope text-4xl md:text-5xl lg:text-[66px] font-normal leading-[126.7%] tracking-[-1.98px] max-w-full">
        Unlocking Leverage without Liquidations
      </h1>

      {/* Subheading */}
      <p className="text-white/70 font-manrope text-lg font-normal leading-[20px] max-w-full">
        Powered by Uniswap V3 liquidity. Designed for DeFi traders and LPs.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <a href="https://testnet.timelock.trade">
          <button className="bg-white text-black font-manrope text-[15px] font-bold px-[15px] py-[7.5px] rounded-[10px] min-w-[140px] hover:bg-white/90 transition-colors">
            Trade
          </button>
        </a>
        <button className="border border-[#282324] bg-black/50 backdrop-blur-sm text-white font-manrope text-[15px] font-bold px-[15px] py-[7px] rounded-[12px] min-w-[140px] hover:bg-black/70 transition-colors">
          Earn
        </button>
      </div>

      {/* Stats Section */}
      <div className="relative w-full max-w-[768px] mt-16">
        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#444] to-transparent mb-16"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-white font-manrope text-2xl lg:text-[30px] font-bold leading-[36px] mb-2">
              $245M+
            </div>
            <div className="text-white/70 font-manrope text-sm font-normal leading-[20px]">
              TOTAL VOLUME
            </div>
          </div>
          <div>
            <div className="text-white font-manrope text-2xl lg:text-[30px] font-bold leading-[36px] mb-2">
              $42M+
            </div>
            <div className="text-white/70 font-manrope text-sm font-normal leading-[20px]">
              TVL
            </div>
          </div>
          <div>
            <div className="text-white font-manrope text-2xl lg:text-[30px] font-bold leading-[36px] mb-2">
              15K+
            </div>
            <div className="text-white/70 font-manrope text-sm font-normal leading-[20px]">
              TOTAL USERS
            </div>
          </div>
          <div>
            <div className="text-white font-manrope text-2xl lg:text-[30px] font-bold leading-[36px] mb-2">
              ZERO
            </div>
            <div className="text-white/70 font-manrope text-sm font-normal leading-[20px]">
              LIQUIDATIONS
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Ecosystem Grid Component
const EcosystemSection = () => {
  const ecosystemItems = [
    {
      id: "1",
      title: "Timelock Trade",
      description:
        "Revolutionary leverage trading without liquidation risk. Trade with up to 1000x leverage using tick liquidity borrowing.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/96a2dff35e1e482243e4644fd8d3e288a6f7ba16?width=1052",
    },
    {
      id: "2",
      title: "Timelock Perps",
      description:
        "Industry-first perpetual contracts without liquidations. Experience true DeFi trading with unlimited downside protection.",
    },
    {
      id: "3",
      title: "Timelock Options",
      description:
        "Custom-strike and expiry options on any ERC20 token. Advanced derivatives trading with full customization.",
    },
    {
      id: "4",
      title: "Timelock Swap",
      description:
        "UniV3-style AMM with enhanced LP vaults and premium collection. Maximize your liquidity provision returns.",
    },
    {
      id: "5",
      title: "Timelock Meme",
      description:
        "Long and short memecoins with sophisticated risk management and leverage capabilities.",
    },
    {
      id: "6",
      title: "Timelock USD",
      description:
        "UniV3-style AMM with enhanced LP vaults and premium collection. Maximize your liquidity provision returns.",
    },
  ];

  return (
    <section
      className="w-full py-32 px-4 lg:px-52"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.51%, rgba(255, 255, 255, 0.05) 100%), radial-gradient(84.65% 61.96% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.00) 100%), #000`,
      }}
    >
      <div className="text-center mb-20">
        <h2 className="text-white font-manrope text-3xl lg:text-[48px] font-normal leading-[48px] mb-6">
          Timelock Protocol Ecosystem
        </h2>
        <p className="text-white/70 font-manrope text-lg font-normal leading-[20px] max-w-3xl mx-auto">
          Timelock Trade is one pillar of our DeFi suite. Explore the family of
          Timelock products
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1216px] mx-auto">
        {ecosystemItems.map((item, index) => (
          <div
            key={item.id}
            className="relative h-[447px] rounded border border-[#191919] bg-black/30 backdrop-blur-sm overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div
              className={cn(
                "absolute top-0 w-full h-[252px] opacity-60",
                index % 2 === 0
                  ? "bg-gradient-radial from-white/10 via-transparent to-transparent"
                  : "bg-gradient-radial from-white/10 via-transparent to-transparent",
              )}
            ></div>

            {/* Number Badge */}
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white font-k2d text-base font-medium">
                {item.id}
              </span>
            </div>

            {/* Content */}
            <div className="absolute top-6 left-[68px] right-6">
              <h3 className="text-white font-manrope text-xl font-medium leading-[28px] mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 font-manrope text-sm font-normal leading-normal max-w-[440px]">
                {item.description}
              </p>
            </div>

            {/* Image for first card */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="absolute bottom-6 left-7 w-[526px] h-[393px] object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Enhanced Yields Section
const EnhancedYieldsSection = () => (
  <section
    className="w-full py-32 px-4 lg:px-52"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.51%, rgba(255, 255, 255, 0.05) 100%), radial-gradient(84.65% 61.96% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.00) 100%), #000`,
    }}
  >
    <div className="text-center mb-20">
      <h2 className="text-white font-manrope text-3xl lg:text-[48px] font-normal leading-[48px] mb-6">
        Enhanced Yields, Zero Additional Risk
      </h2>
      <p className="text-white/70 font-manrope text-lg font-normal leading-[20px]">
        Earn superior returns with no extra risk vs. standard UniV3.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1216px] mx-auto">
      {[
        {
          id: "5",
          title: "Timelock Meme",
          description:
            "Long and short memecoins with sophisticated risk management and leverage capabilities.",
        },
        {
          id: "6",
          title: "Timelock USD",
          description:
            "UniV3-style AMM with enhanced LP vaults and premium collection. Maximize your liquidity provision returns.",
        },
      ].map((item) => (
        <div
          key={item.id}
          className="relative h-[447px] rounded border border-[#191919] bg-black/30 backdrop-blur-sm"
        >
          {/* Gradient Overlay */}
          <div className="absolute top-0 w-full h-[252px] opacity-60 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>

          {/* Number Badge */}
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white font-k2d text-base font-medium">
              {item.id}
            </span>
          </div>

          {/* Content */}
          <div className="absolute top-6 left-[68px] right-6">
            <h3 className="text-white font-manrope text-xl font-medium leading-[28px] mb-4">
              {item.title}
            </h3>
            <p className="text-white/60 font-manrope text-sm font-normal leading-normal max-w-[440px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Future of Liquidity Section
const FutureSection = () => (
  <section
    className="w-full py-32 px-4 lg:px-52"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.51%, rgba(255, 255, 255, 0.05) 100%), radial-gradient(84.65% 61.96% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.00) 100%), #000`,
    }}
  >
    <div className="text-center mb-20">
      <h2 className="text-white font-manrope text-3xl lg:text-[48px] font-normal leading-[48px] mb-6">
        The Future of Liquidity Provision
      </h2>
      <p className="text-white/70 font-manrope text-lg font-normal leading-[20px]">
        Boost yield on your UniV3 positions by supplying into Timelock Vaults
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1216px] mx-auto">
      {[
        {
          id: "1",
          title: "Risk-Neutral Optionality",
          description:
            "LPs on Timelock are not coucnterparty to trader PnLs and maintain their UniV3 payoffs",
        },
        {
          id: "2",
          title: "1-Click Deposit",
          description:
            "1-click deposits, zero hassle—our strategy managers handle the heavy lifting for you. Deposit and forget",
        },
      ].map((item) => (
        <div
          key={item.id}
          className="relative h-[447px] rounded border border-[#191919] bg-black/30 backdrop-blur-sm"
        >
          {/* Gradient Overlay */}
          <div className="absolute top-0 w-full h-[252px] opacity-60 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>

          {/* Number Badge */}
          <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white font-k2d text-base font-medium">
              {item.id}
            </span>
          </div>

          {/* Content */}
          <div className="absolute top-6 left-[68px] right-6">
            <h3 className="text-white font-manrope text-xl font-medium leading-[28px] mb-4">
              {item.title}
            </h3>
            <p className="text-white/60 font-manrope text-sm font-normal leading-normal max-w-[440px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Partnerships Section
const PartnershipsSection = () => (
  <section
    className="w-full py-32 px-4 lg:px-52"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.51%, rgba(255, 255, 255, 0.05) 100%), radial-gradient(84.65% 61.96% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.00) 100%), #000`,
    }}
  >
    <div className="text-center mb-16">
      <h2 className="text-white font-manrope text-3xl lg:text-[48px] font-normal leading-[48px] mb-6">
        Partnerships
      </h2>
      <p className="text-white/70 font-manrope text-lg font-normal leading-[20px]">
        Creating win-win stories with every collaboration
      </p>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-6">
      {/* Partner logos would go here - using placeholder divs for the design */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="px-6 py-4 border border-[#282324] bg-black/50 backdrop-blur-sm rounded"
        >
          <div className="w-32 h-6 bg-white/20 rounded"></div>
        </div>
      ))}
    </div>
  </section>
);

// Final CTA Section
const FinalCTASection = () => (
  <section
    className="relative w-full py-32 px-4"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.51%, rgba(255, 255, 255, 0.06) 100%), #000`,
    }}
  >
    {/* Gradient overlay */}
    <div className="absolute top-0 left-0 w-full h-[340px] bg-gradient-radial from-white/10 via-transparent to-transparent"></div>

    <div className="relative text-center max-w-[658px] mx-auto">
      <h2 className="text-white font-manrope text-3xl lg:text-[48px] font-normal leading-[48px] mb-6">
        Trade Without Liquidation Risk
      </h2>
      <p className="text-white/70 font-manrope text-lg font-normal leading-[20px] mb-10">
        Join thousands of traders already using TimeLock to access leverage
      </p>

      <div className="flex items-center gap-3 justify-center flex-wrap">
        <button className="bg-white text-black font-manrope text-[15px] font-bold px-[15px] py-[7.5px] rounded-[10px] min-w-[140px] hover:bg-white/90 transition-colors">
          Trade
        </button>
        <button className="border border-[#282324] bg-black/50 backdrop-blur-sm text-white font-manrope text-[15px] font-bold px-[15px] py-[7px] rounded-[12px] min-w-[140px] hover:bg-black/70 transition-colors">
          Earn
        </button>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer
    className="w-full border-t border-white/10 px-4 lg:px-20 py-16"
    style={{ background: "#000" }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Logo and Description */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <svg
              width="165"
              height="27"
              viewBox="0 0 165 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                fill="#F0F0F0"
                style={{ whiteSpace: "pre" }}
                className="font-basel text-[18.26px] font-normal tracking-[0.27em]"
              >
                <tspan x="31.6396" y="18.5524">
                  TIME LOCK
                </tspan>
              </text>
              <path
                d="M11.1868 10.1494H5.31895V16.2725C5.57408 23.3905 12.6811 26.4367 16.6402 26.3181V20.6096C12.354 20.1249 11.1868 17.3282 11.1868 15.9797V10.1494Z"
                fill="white"
              />
              <path
                d="M0 11.4717V5.21909C4.37256 4.93937 5.30538 1.70648 5.22522 0.125H11.15C11.15 7.62176 4.44411 11.4717 0 11.4717Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-white/60 font-manrope text-sm leading-[20px] max-w-[227px]">
            Powered by Uniswap V3 liquidity. Designed for DeFi traders and LPs.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-white font-manrope text-base font-semibold leading-[24px] mb-4">
            Platform
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-white/60 font-manrope text-sm leading-[20px] hover:text-white transition-colors"
            >
              Trade
            </a>
            <a
              href="#"
              className="block text-white/60 font-manrope text-sm leading-[20px] hover:text-white transition-colors"
            >
              Earn
            </a>
            <a
              href="#"
              className="block text-white/60 font-manrope text-sm leading-[20px] hover:text-white transition-colors"
            >
              Dashboard
            </a>
          </div>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-white font-manrope text-base font-semibold leading-[24px] mb-4">
            Resources
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-white/60 font-manrope text-sm leading-[20px] hover:text-white transition-colors"
            >
              Docs
            </a>
          </div>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="text-white font-manrope text-base font-semibold leading-[24px] mb-4">
            Community
          </h3>
          <div className="flex items-center gap-4">
            {/* Twitter */}
            <a
              href="#"
              className="p-2 rounded-lg bg-gradient-to-br from-white/8 to-white/5 hover:from-white/12 hover:to-white/8 transition-all"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3327 3.45819C18.3327 3.45819 17.7493 5.20819 16.666 6.29152C17.9993 14.6249 8.83268 20.7082 1.66602 15.9582C3.49935 16.0415 5.33268 15.4582 6.66602 14.2915C2.49935 13.0415 0.416016 8.12486 2.49935 4.29152C4.33268 6.45819 7.16602 7.70819 9.99935 7.62486C9.24935 4.12486 13.3327 2.12486 15.8327 4.45819C16.7493 4.45819 18.3327 3.45819 18.3327 3.45819Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* Discord */}
            <a
              href="#"
              className="p-2 rounded-lg bg-gradient-to-br from-white/8 to-white/5 hover:from-white/12 hover:to-white/8 transition-all"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M18.375 14.624L13.1407 16.9443C13.0612 16.9804 12.9752 16.9997 12.888 17.0011C12.8008 17.0026 12.7142 16.9861 12.6337 16.9527C12.5531 16.9193 12.4802 16.8697 12.4196 16.807C12.359 16.7442 12.3119 16.6697 12.2813 16.588L11.4836 14.4263C10.9904 14.4755 10.495 14.5 9.99926 14.4998C9.50355 14.5 9.00814 14.4755 8.51488 14.4263L7.7141 16.588C7.68348 16.6697 7.6364 16.7442 7.57579 16.807C7.51517 16.8697 7.44232 16.9193 7.36174 16.9527C7.28116 16.9861 7.19458 17.0026 7.10736 17.0011C7.02014 16.9997 6.93416 16.9804 6.85473 16.9443L1.62035 14.624C1.48558 14.5648 1.37603 14.4599 1.311 14.3279C1.24597 14.1958 1.22964 14.045 1.26488 13.9021L3.57504 4.81227C3.60517 4.6928 3.6696 4.58475 3.76039 4.50146C3.85118 4.41816 3.96436 4.36326 4.08598 4.34352L6.90317 3.88102C7.06007 3.85435 7.22126 3.88779 7.35461 3.97466C7.48796 4.06154 7.58368 4.19547 7.6227 4.34977L8.01332 5.88336C9.33247 5.70732 10.6692 5.70732 11.9883 5.88336L12.3789 4.34977C12.418 4.19547 12.5137 4.06154 12.647 3.97466C12.7804 3.88779 12.9416 3.85435 13.0985 3.88102L15.9125 4.34352C16.0342 4.36326 16.1473 4.41816 16.2381 4.50146C16.3289 4.58475 16.3934 4.6928 16.4235 4.81227L18.7305 13.9037C18.7653 14.0464 18.7488 14.1968 18.6838 14.3285C18.6188 14.4602 18.5095 14.5648 18.375 14.624Z"
                  fill="white"
                />
                <path
                  d="M8.12473 11.0628C8.12473 11.2482 8.06975 11.4294 7.96674 11.5836C7.86372 11.7378 7.71731 11.8579 7.546 11.9289C7.37469 11.9999 7.18619 12.0184 7.00434 11.9823C6.82248 11.9461 6.65543 11.8568 6.52432 11.7257C6.39321 11.5946 6.30392 11.4275 6.26775 11.2457C6.23157 11.0638 6.25014 10.8753 6.3211 10.704C6.39205 10.5327 6.51222 10.3863 6.66639 10.2833C6.82056 10.1803 7.00181 10.1253 7.18723 10.1253C7.43587 10.1253 7.67433 10.224 7.85015 10.3999C8.02596 10.5757 8.12473 10.8141 8.12473 11.0628ZM12.8122 10.1253C12.6268 10.1253 12.4456 10.1803 12.2914 10.2833C12.1372 10.3863 12.0171 10.5327 11.9461 10.704C11.8751 10.8753 11.8566 11.0638 11.8927 11.2457C11.9289 11.4275 12.0182 11.5946 12.1493 11.7257C12.2804 11.8568 12.4475 11.9461 12.6293 11.9823C12.8112 12.0184 12.9997 11.9999 13.171 11.9289C13.3423 11.8579 13.4887 11.7378 13.5917 11.5836C13.6948 11.4294 13.7497 11.2482 13.7497 11.0628C13.7497 10.8141 13.651 10.5757 13.4751 10.3999C13.2993 10.224 13.0609 10.1253 12.8122 10.1253Z"
                  fill="white"
                />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="#"
              className="p-2 rounded-lg bg-gradient-to-br from-white/8 to-white/5 hover:from-white/12 hover:to-white/8 transition-all"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8818 2.17095C17.7849 2.08733 17.6671 2.03172 17.541 2.01011C17.4149 1.98849 17.2853 2.0017 17.1661 2.04829L1.33331 8.24439C1.10893 8.33164 0.918959 8.48943 0.792006 8.69399C0.665054 8.89855 0.60799 9.13882 0.629405 9.37862C0.65082 9.61842 0.749556 9.84477 0.910748 10.0236C1.07194 10.2024 1.28686 10.3241 1.52316 10.3702L5.6255 11.1756V15.7499C5.62469 15.999 5.69874 16.2427 5.83803 16.4492C5.97733 16.6558 6.17546 16.8158 6.40675 16.9085C6.63768 17.0028 6.89164 17.0254 7.13561 16.9734C7.37958 16.9214 7.60227 16.7973 7.77472 16.617L9.75285 14.5655L12.8911 17.3124C13.1175 17.5132 13.4096 17.6243 13.7122 17.6249C13.8448 17.6248 13.9766 17.6039 14.1028 17.5631C14.3091 17.4977 14.4945 17.3794 14.6408 17.22C14.787 17.0606 14.889 16.8656 14.9364 16.6545L18.1075 2.85923C18.1359 2.73482 18.1299 2.60503 18.0901 2.48378C18.0503 2.36253 17.9783 2.25439 17.8818 2.17095Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-white/10 text-center space-y-4">
        <p className="text-white/60 font-manrope text-sm leading-[20px]">
          Built on trustless, immutable smart contracts. Powered by Uniswap V3
          liquidity. Designed for DeFi traders and LPs.
        </p>
        <p className="text-white/60 font-manrope text-xs leading-[16px]">
          © 2025 TimeLock. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Main Index Component
export default function Index() {
  return (
    <div className="min-h-screen bg-black font-manrope">
      <Header />
      <HeroSection />
      <EcosystemSection />
      <EnhancedYieldsSection />
      <FutureSection />
      <PartnershipsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
