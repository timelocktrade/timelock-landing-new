"use client";

import { BarChart3, Shield, Zap, TrendingUp, Coins, DollarSign, Wallet, Target, ShieldCheck, TrendingUp as Earn, Waves, Network } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo";
import { Timeline } from "@/components/ui/timeline";
import { FeatureSteps } from "@/components/blocks/feature-section";
import Image from "next/image";
import type React from "react";

export default function Home() {
	return (
		<main>
			<section className="font-sans relative min-h-screen w-full flex items-center justify-center">
			{/* Background uses the whole image with no cropping or padding */}
			<div className="absolute inset-0 bg-black" />
			<div className="absolute inset-0 bg-[url('/bg.png')] bg-center bg-no-repeat bg-cover" />
			<div className="absolute inset-0 bg-black/50" />

			{/* Subtle chart visualization */}
			<svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
				<defs>
					<linearGradient id="gridFade" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
						<stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
					</linearGradient>
					<linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
						<stop offset="0%" stopColor="#fb923c" />
						<stop offset="100%" stopColor="#f97316" />
					</linearGradient>
				</defs>
				{/* grid */}
				<g stroke="url(#gridFade)" strokeWidth="1">
					{Array.from({ length: 20 }).map((_, i) => (
						<line key={`v-${i}`} x1={(i+1)*60} y1={0} x2={(i+1)*60} y2={800} />
					))}
					{Array.from({ length: 12 }).map((_, i) => (
						<line key={`h-${i}`} x1={0} y1={(i+1)*60} x2={1200} y2={(i+1)*60} />
					))}
				</g>
				{/* line */}
				<polyline
					points="0,650 150,600 220,580 300,610 400,520 520,540 640,460 760,500 880,420 1000,460 1200,380"
					fill="none"
					stroke="url(#lineGrad)"
					strokeWidth="3"
					strokeLinejoin="round"
					strokeLinecap="round"
					opacity="0.7"
				/>
			</svg>

			{/* Content */}
			<div className="relative z-10 w-full flex flex-col items-center justify-center text-center gap-8 px-4">
				<h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-6xl">
					UNLOCKING LEVERAGE WITHOUT LIQUIDATIONS
				</h1>
				<p className="text-white/85 text-base sm:text-xl md:text-2xl max-w-3xl">
					Revolutionary DeFi protocol enabling up to 1000x leverage with zero liquidation risk through innovative tick liquidity borrowing
				</p>

				{/* Key stats bar */}
				<div className="w-full max-w-3xl text-white/90">
					<div className="flex flex-wrap items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 divide-x divide-white/15">
						<span className="px-3 py-1 text-xs sm:text-sm">0% Liquidation Risk</span>
						<span className="px-3 py-1 text-xs sm:text-sm">Up to 1000x Leverage</span>
						<span className="px-3 py-1 text-xs sm:text-sm">&gt;20% LP Yields</span>
						<span className="px-3 py-1 text-xs sm:text-sm">Any ERC20 Token</span>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md">
					<a
						href="#start"
						className="inline-flex justify-center items-center h-12 rounded-full px-6 bg-orange-500 text-white text-sm sm:text-base font-semibold hover:bg-orange-400 transition-colors shadow-[0_10px_30px_-10px_rgba(234,88,12,0.7)]"
					>
						Start Trading
						</a>
					<a
						href="#lp"
						className="inline-flex justify-center items-center h-12 rounded-full px-6 border border-white/30 text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
					>
						Become an LP
						</a>
				</div>
			</div>
		</section>



		{/* Ecosystem / Family Section */}
		<section id="ecosystem" className="relative py-16 sm:py-24 px-4">
			<div className="mx-auto max-w-7xl text-center mb-12">
				<h2 className="font-display text-white text-[2rem] font-bold">Timelock Protocol Ecosystem</h2>
				<p className="mt-3 text-white max-w-3xl mx-auto">Timelock Trade is one pillar of our DeFi suite. Explore the family of Timelock products with interactive glowing effects:</p>
			</div>
			<div className="mx-auto max-w-7xl">
				<TimelockEcosystemGrid />
			</div>
		</section>

		{/* How It Works Section */}
		<section id="how-it-works" className="relative">
			<TimelockWorkflowTimeline />
		</section>

		{/* Collaborations / Logos Section */}
		<section id="collaborations" className="relative py-12 sm:py-20 px-4">
			<div className="mx-auto max-w-7xl">
				<LogoCarouselDemo />
			</div>
		</section>

		{/* For Traders Section */}
		<section id="traders" className="relative py-16 sm:py-24 px-4">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-10 sm:mb-12">
					<h2 className="font-display text-white text-[2rem] font-bold">Trade Without Fear</h2>
				</div>
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
					<GridItem
						icon={<Shield className="h-4 w-4 text-white" />}
						title="No Liquidation Risk"
						description="Your position can’t be liquidated — maximum loss is the premium paid."
					/>
					<GridItem
						icon={<TrendingUp className="h-4 w-4 text-white" />}
						title="Unlimited Leverage"
						description="Scale your exposure without margin calls or forced deleveraging."
					/>
					<GridItem
						icon={<DollarSign className="h-4 w-4 text-white" />}
						title="Fixed Premiums"
						description="Know your cost upfront with simple, transparent premium pricing."
					/>
					<GridItem
						icon={<Coins className="h-4 w-4 text-white" />}
						title="Any ERC20 Token"
						description="Access blue chips and the long tail across the ERC20 universe."
					/>
					<GridItem
						icon={<BarChart3 className="h-4 w-4 text-white" />}
						title="Real Asset Exposure"
						description="Positions are backed by escrowed on-chain liquidity, not IOUs."
					/>
					<GridItem
						icon={<Zap className="h-4 w-4 text-white" />}
						title="Custom Duration"
						description="Choose expiries that fit your strategy — minutes to months."
					/>
				</ul>

				<div className="mt-10 flex justify-center">
					<a
						href="#start"
						className="inline-flex justify-center items-center h-12 rounded-full px-6 bg-orange-500 text-white text-sm sm:text-base font-semibold hover:bg-orange-400 transition-colors shadow-[0_10px_30px_-10px_rgba(234,88,12,0.7)]"
					>
						Start Trading.
					</a>
				</div>
			</div>
		</section>

		{/* For Liquidity Providers Section */}
		<section id="lp" className="relative py-16 sm:py-24 px-4">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-12">
					<h2 className="font-display text-white text-[2rem] font-bold mb-4">Enhanced Yields, Zero Additional Risk</h2>
					<p className="text-[#CCCCCC] text-base sm:text-lg max-w-2xl mx-auto">
						Earn superior returns with no extra risk vs. standard UniV3.
					</p>
				</div>

				{/* Vault Process Flow */}
				<div className="mb-16">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
						<GridItem
							icon={<Wallet className="h-4 w-4 text-white" />}
							title="Deposit"
							description="Provide USDC to earn vault yields"
						/>
						<GridItem
							icon={<Target className="h-4 w-4 text-white" />}
							title="Deploy"
							description="Capital deployed on UniV3 ranges"
						/>
						<GridItem
							icon={<ShieldCheck className="h-4 w-4 text-white" />}
							title="Hedge"
							description="Positions hedged via perp DEX"
						/>
						<GridItem
							icon={<Earn className="h-4 w-4 text-white" />}
							title="Earn"
							description="Collect premiums & LP fees"
						/>
					</ul>
				</div>

				{/* Yield Strategy Cards */}
				<ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<GridItem
						icon={<Coins className="h-4 w-4 text-white" />}
						title="Conservative"
						description="15-25% APY – Low risk, stable returns"
					/>
					<GridItem
						icon={<TrendingUp className="h-4 w-4 text-white" />}
						title="Balanced"
						description="25-35% APY – Moderate risk, balanced growth"
					/>
					<GridItem
						icon={<Zap className="h-4 w-4 text-white" />}
						title="Aggressive"
						description="35-50% APY – Higher risk, maximum returns"
					/>
				</ul>

				{/* CTA Button */}
				<div className="flex justify-center">
					<a
						href="#start-earning"
						className="inline-flex justify-center items-center h-12 rounded-full px-6 bg-orange-500 text-white text-sm sm:text-base font-semibold hover:bg-orange-400 transition-colors shadow-[0_10px_30px_-10px_rgba(234,88,12,0.7)]"
					>
						Start Earning.
					</a>
				</div>
			</div>
		</section>

		{/* Real Trading Example Section */}
		<section id="example" className="relative py-16 sm:py-24 px-4">
			<div className="mx-auto max-w-7xl">
				<FeatureSteps
					title="Real Trading Example"
					className="px-0"
					imageHeight="h-[400px]"
					features={[
						{
							step: "Current ETH price: $3,000",
							content: "Reference spot price used for payoff calculation",
							image: "/example-eth-price.svg",
						},
						{
							step: "Trader LONGs 1 ETH, pays $10",
							content: "Enter long exposure by paying a fixed premium",
							image: "/example-long-premium.svg",
						},
						{
							step: "Downside capped at $10 if price drops to $2,000",
							content: "Maximum loss limited to paid premium",
							image: "/example-downside-capped.svg",
						},
						{
							step: "Upside: $1,500 profit if price rises to $4,500",
							content: "Payoff increases with price without liquidation risk",
							image: "/example-upside-profit.svg",
						},
					]}
				/>
			</div>
		</section>


		{/* End Component: Ecosystem & Security */}
		<EcosystemSecuritySection />

		</main>
	);
}

function TimelockEcosystemGrid() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-4 lg:gap-6">
      <GridItem
        icon={<BarChart3 className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Trade"
        description="Revolutionary leverage trading without liquidation risk. Trade with up to 1000x leverage using tick liquidity borrowing."
      />

      <GridItem
        icon={<TrendingUp className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Perps"
        description="Industry-first perpetual contracts without liquidations. Experience true DeFi trading with unlimited downside protection."
      />

      <GridItem
        icon={<Zap className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Options"
        description="Custom-strike and expiry options on any ERC20 token. Advanced derivatives trading with full customization."
      />

      <GridItem
        icon={<Shield className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Swap"
        description="UniV3-style AMM with enhanced LP vaults and premium collection. Maximize your liquidity provision returns."
      />

      <GridItem
        icon={<Coins className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Meme"
        description="Long and short memecoins with sophisticated risk management and leverage capabilities."
      />

      <GridItem
        icon={<DollarSign className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock USD"
        description="Tokenized delta-neutral hedged UniV3 vaults delivering consistent 20% APY with minimal risk exposure."
      />
    </ul>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-2xl border border-[#333333] p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-[#1A1A1A] dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

function TimelockWorkflowTimeline() {
  const data = [
    {
      title: "Step 1: LP Deposits",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            Liquidity Providers (LPs) deposit USDC into Timelock vaults to earn yield and provide the foundation for leverage trading.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
              <Image
                src="/DepositUSDC.e5c78a9a.png"
                alt="LPs deposit USDC into secure vaults"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Vault Deployment",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            Vault managers deploy capital on Uniswap V3 in strategic price ranges, hedge positions with perpetual DEX shorts, and actively rebalance for optimal performance.
          </p>
          <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
            <Image
              src="/vault.png"
              alt="Vault deployment and management"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3: Trader Entry",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm">
            Trader initiates a leveraged position by choosing direction, asset, duration, and leverage amount.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Choose LONG 1 ETH position
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Set 1 hour expiry time
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Pay $10 premium fee
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Timelock escrows 1 ETH from next out-of-range tick
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Position is now active with zero liquidation risk
            </div>
          </div>
          <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
            <h4 className="text-orange-400 font-semibold mb-2">🚀 Revolutionary Feature</h4>
            <p className="text-white text-sm">Unlike traditional leverage, there&apos;s no liquidation risk - your maximum loss is the premium paid.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Settlement",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            At expiry, the position settles automatically based on price movement. Two possible outcomes demonstrate the power of zero-liquidation leverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="text-red-400 font-semibold mb-2">📉 Price Drops to $2,000</h4>
              <p className="text-white text-sm mb-2">Trader loses only the $10 premium</p>
              <p className="text-white text-xs">Timelock returns escrowed ETH to LP vault</p>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <h4 className="text-green-400 font-semibold mb-2">📈 Price Rises to $4,500</h4>
              <p className="text-white text-sm mb-2">Trader profits $1,500 after LP repayment</p>
              <p className="text-white text-xs">Massive gains with limited downside risk</p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
            <h4 className="text-blue-400 font-semibold mb-2">💡 Key Innovation</h4>
            <p className="text-white text-sm">Traditional leverage can liquidate your entire position. With Timelock, your maximum loss is always just the premium paid upfront.</p>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

function EcosystemSecuritySection() {
	return (
		<section id="ecosystem-security" className="relative py-16 sm:py-24 px-4">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-10 sm:mb-12">
					<h2 className="font-display text-white text-[2rem] font-bold">Built on Proven Infrastructure</h2>
				</div>
				<div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
					<div className="rounded-full border border-[#333333] bg-[#1A1A1A] px-4 py-3 flex items-center justify-center gap-2">
						<Waves className="h-5 w-5 text-white" />
						<span className="text-white text-sm font-medium">Uniswap V3</span>
					</div>
					<div className="rounded-full border border-[#333333] bg-[#1A1A1A] px-4 py-3 flex items-center justify-center gap-2">
						<Network className="h-5 w-5 text-white" />
						<span className="text-white text-sm font-medium">Ethereum</span>
					</div>
					<div className="rounded-full border border-[#333333] bg-[#1A1A1A] px-4 py-3 flex items-center justify-center gap-2">
						<ShieldCheck className="h-5 w-5 text-white" />
						<span className="text-white text-sm font-medium">Security Audits</span>
					</div>
				</div>
				<div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
					<div className="text-center">
						<div className="text-white text-4xl sm:text-5xl font-extrabold leading-none">—</div>
						<div className="text-[#CCCCCC] text-xs mt-2 tracking-wide uppercase">TVL</div>
					</div>
					<div className="text-center">
						<div className="text-white text-4xl sm:text-5xl font-extrabold leading-none">—</div>
						<div className="text-[#CCCCCC] text-xs mt-2 tracking-wide uppercase">Active Traders</div>
					</div>
					<div className="text-center">
						<div className="text-white text-4xl sm:text-5xl font-extrabold leading-none">—</div>
						<div className="text-[#CCCCCC] text-xs mt-2 tracking-wide uppercase">Supported Tokens</div>
					</div>
				</div>
				<p className="text-[#CCCCCC] text-center text-sm">Multiple audits, formal verification, and gradual rollout.</p>
			</div>
		</section>
	);
}
