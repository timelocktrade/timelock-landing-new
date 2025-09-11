"use client";

import { BarChart3, Shield, Zap, TrendingUp, Coins, DollarSign, Wallet, Target, ShieldCheck, TrendingUp as Earn, Waves, Network } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";

export default function Home() {
	return (
		<main>
			<section className="font-sans relative min-h-[calc(100vh-6rem)] w-full flex items-center justify-center">
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

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md">
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

		{/* For Traders Section */}
		<section id="traders" className="relative py-16 sm:py-24 px-4">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-10 sm:mb-12">
					<h2 className="font-display text-white text-[2rem] font-bold">Trade Without Fear</h2>
				</div>
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
					<li className="list-none">
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4 h-full">
							<div className="mb-3 w-fit rounded-md border border-[#333333] p-2">
								<Shield className="h-5 w-5 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-1">No Liquidation Risk</h4>
							<p className="text-[#CCCCCC] text-sm">Your position can’t be liquidated — maximum loss is the premium paid.</p>
						</div>
					</li>
					<li className="list-none">
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4 h-full">
							<div className="mb-3 w-fit rounded-md border border-[#333333] p-2">
								<TrendingUp className="h-5 w-5 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-1">Unlimited Leverage</h4>
							<p className="text-[#CCCCCC] text-sm">Scale your exposure without margin calls or forced deleveraging.</p>
						</div>
					</li>
					<li className="list-none">
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4 h-full">
							<div className="mb-3 w-fit rounded-md border border-[#333333] p-2">
								<DollarSign className="h-5 w-5 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-1">Fixed Premiums</h4>
							<p className="text-[#CCCCCC] text-sm">Know your cost upfront with simple, transparent premium pricing.</p>
						</div>
					</li>
					<li className="list-none">
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4 h-full">
							<div className="mb-3 w-fit rounded-md border border-[#333333] p-2">
								<Coins className="h-5 w-5 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-1">Any ERC20 Token</h4>
							<p className="text-[#CCCCCC] text-sm">Access blue chips and the long tail across the ERC20 universe.</p>
						</div>
					</li>
					<li className="list-none">
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4 h-full">
							<div className="mb-3 w-fit rounded-md border border-[#333333] p-2">
								<BarChart3 className="h-5 w-5 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-1">Real Asset Exposure</h4>
							<p className="text-[#CCCCCC] text-sm">Positions are backed by escrowed on-chain liquidity, not IOUs.</p>
						</div>
					</li>
					<li className="list-none">
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4 h-full">
							<div className="mb-3 w-fit rounded-md border border-[#333333] p-2">
								<Zap className="h-5 w-5 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-1">Custom Duration</h4>
							<p className="text-[#CCCCCC] text-sm">Choose expiries that fit your strategy — minutes to months.</p>
						</div>
					</li>
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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
						<div className="text-center">
							<div className="mx-auto mb-4 w-16 h-16 rounded-full border border-[#333333] bg-[#1A1A1A] flex items-center justify-center">
								<Wallet className="h-6 w-6 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-2">Deposit</h4>
							<p className="text-[#CCCCCC] text-sm">Provide USDC to earn vault yields</p>
						</div>
						
						<div className="text-center">
							<div className="mx-auto mb-4 w-16 h-16 rounded-full border border-[#333333] bg-[#1A1A1A] flex items-center justify-center">
								<Target className="h-6 w-6 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-2">Deploy</h4>
							<p className="text-[#CCCCCC] text-sm">Capital deployed on UniV3 ranges</p>
						</div>
						
						<div className="text-center">
							<div className="mx-auto mb-4 w-16 h-16 rounded-full border border-[#333333] bg-[#1A1A1A] flex items-center justify-center">
								<ShieldCheck className="h-6 w-6 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-2">Hedge</h4>
							<p className="text-[#CCCCCC] text-sm">Positions hedged via perp DEX</p>
						</div>
						
						<div className="text-center">
							<div className="mx-auto mb-4 w-16 h-16 rounded-full border border-[#333333] bg-[#1A1A1A] flex items-center justify-center">
								<Earn className="h-6 w-6 text-white" />
							</div>
							<h4 className="text-white font-semibold mb-2">Earn</h4>
							<p className="text-[#CCCCCC] text-sm">Collect premiums & LP fees</p>
						</div>
					</div>
				</div>

				{/* Yield Strategy Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-6">
						<h4 className="text-white font-semibold text-lg mb-3">Conservative</h4>
						<p className="text-[#CCCCCC] text-base mb-2">15-25% APY</p>
						<p className="text-[#CCCCCC] text-sm italic">Low risk, stable returns</p>
					</div>
					
					<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-6">
						<h4 className="text-white font-semibold text-lg mb-3">Balanced</h4>
						<p className="text-[#CCCCCC] text-base mb-2">25-35% APY</p>
						<p className="text-[#CCCCCC] text-sm italic">Moderate risk, balanced growth</p>
					</div>
					
					<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-6">
						<h4 className="text-white font-semibold text-lg mb-3">Aggressive</h4>
						<p className="text-[#CCCCCC] text-base mb-2">35-50% APY</p>
						<p className="text-[#CCCCCC] text-sm italic">Higher risk, maximum returns</p>
					</div>
				</div>

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
				<div className="text-center mb-8">
					<h2 className="font-display text-white text-[2rem] font-bold">Real Trading Example</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left: Steps */}
					<div>
						<ul className="list-disc pl-5 space-y-3">
							<li className="text-[#CCCCCC]">Current ETH price: $3 000</li>
							<li className="text-[#CCCCCC]">Trader LONGs 1 ETH, pays $10</li>
							<li className="text-[#CCCCCC]">Downside: capped at $10 if price drops to $2 000</li>
							<li className="text-[#CCCCCC]">Upside: $1 500 profit if price rises to $4 500</li>
						</ul>
					</div>

					{/* Right: Simple price vs PnL chart */}
					<div>
						<div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
							<svg className="w-full h-64" viewBox="0 0 500 300" role="img" aria-label="Price vs PnL chart with capped loss and uncapped gain">
								<defs>
									<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
										<path d="M 0 0 L 10 5 L 0 10 z" fill="#888" />
									</marker>
									<linearGradient id="gain" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#16a34a" stopOpacity="0.25"/>
										<stop offset="100%" stopColor="#16a34a" stopOpacity="0.05"/>
									</linearGradient>
									<linearGradient id="loss" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#ef4444" stopOpacity="0.25"/>
										<stop offset="100%" stopColor="#ef4444" stopOpacity="0.05"/>
									</linearGradient>
								</defs>
								{/* axes */}
								<g transform="translate(50,20)">
									<line x1="0" y1="250" x2="420" y2="250" stroke="#888" strokeWidth="1.5" markerEnd="url(#arrow)" />
									<line x1="0" y1="250" x2="0" y2="10" stroke="#888" strokeWidth="1.5" markerEnd="url(#arrow)" />
									{/* labels */}
									<text x="420" y="270" fill="#aaa" fontSize="12">Price</text>
									<text x="-35" y="20" fill="#aaa" fontSize="12" transform="rotate(-90 -35 20)">PnL</text>

									{/* reference price ticks */}
									<g fill="#aaa" fontSize="11">
										<text x="80" y="268">$2k</text>
										<text x="200" y="268">$3k</text>
										<text x="360" y="268">$4.5k</text>
									</g>
									<g stroke="#555">
										<line x1="80" y1="250" x2="80" y2="40" strokeDasharray="4 4"/>
										<line x1="200" y1="250" x2="200" y2="40" strokeDasharray="4 4"/>
										<line x1="360" y1="250" x2="360" y2="40" strokeDasharray="4 4"/>
										<line x1="0" y1="200" x2="420" y2="200" strokeDasharray="4 4"/>
									</g>

									{/* capped loss band */}
									<rect x="0" y="200" width="200" height="50" fill="url(#loss)"/>
									<text x="10" y="220" fill="#fca5a5" fontSize="12">Loss capped at -$10</text>

									{/* gain area */}
									<polygon points="200,200 360,80 420,40 420,200" fill="url(#gain)"/>

									{/* payoff line: flat to 3k, then slope up */}
									<polyline points="0,200 200,200 360,80 420,40" fill="none" stroke="#34d399" strokeWidth="3" />

									{/* markers for outcomes */}
									<circle cx="80" cy="200" r="4" fill="#ef4444"/>
									<text x="85" y="195" fill="#fca5a5" fontSize="12">$2k</text>
									<circle cx="360" cy="80" r="4" fill="#22c55e"/>
									<text x="365" y="75" fill="#bbf7d0" fontSize="12">+$1,500</text>
								</g>
							</svg>
							<div className="mt-2 flex items-center justify-between text-xs">
								<span className="text-[#CCCCCC]">PnL vs price at expiry (LONG 1 ETH)</span>
								<div className="flex items-center gap-3">
									<div className="flex items-center gap-1">
										<span className="inline-block h-2 w-4 bg-[#ef4444]" />
										<span className="text-[#CCCCCC]">Capped loss</span>
									</div>
									<div className="flex items-center gap-1">
										<span className="inline-block h-2 w-4 bg-[#22c55e]" />
										<span className="text-[#CCCCCC]">Uncapped gain</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
        area=""
        icon={<BarChart3 className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Trade"
        description="Revolutionary leverage trading without liquidation risk. Trade with up to 1000x leverage using tick liquidity borrowing."
      />

      <GridItem
        area=""
        icon={<TrendingUp className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Perps"
        description="Industry-first perpetual contracts without liquidations. Experience true DeFi trading with unlimited downside protection."
      />

      <GridItem
        area=""
        icon={<Zap className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Options"
        description="Custom-strike and expiry options on any ERC20 token. Advanced derivatives trading with full customization."
      />

      <GridItem
        area=""
        icon={<Shield className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Swap"
        description="UniV3-style AMM with enhanced LP vaults and premium collection. Maximize your liquidity provision returns."
      />

      <GridItem
        area=""
        icon={<Coins className="h-4 w-4 text-white dark:text-neutral-400" />}
        title="Timelock Meme"
        description="Long and short memecoins with sophisticated risk management and leverage capabilities."
      />

      <GridItem
        area=""
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
              <h4 className="text-white font-semibold mb-2">✅ Vault Deposits</h4>
              <p className="text-white text-sm">LPs deposit stablecoins into secure vaults</p>
            </div>
            <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
              <h4 className="text-white font-semibold mb-2">✅ Yield Generation</h4>
              <p className="text-white text-sm">Earn consistent 20%+ APY from trading premiums</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
              <h4 className="text-white font-semibold mb-2">📊 Uniswap V3 Integration</h4>
              <p className="text-white text-sm">Strategic liquidity provision in custom price ranges</p>
            </div>
            <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
              <h4 className="text-white font-semibold mb-2">🛡️ Hedging Strategy</h4>
              <p className="text-white text-sm">Risk mitigation through perpetual DEX shorts</p>
            </div>
            <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
              <h4 className="text-white font-semibold mb-2">⚖️ Active Rebalancing</h4>
              <p className="text-white text-sm">Continuous optimization for maximum efficiency</p>
            </div>
            <div className="rounded-lg border border-[#333333] bg-[#1A1A1A] p-4">
              <h4 className="text-white font-semibold mb-2">🎯 Price Range Management</h4>
              <p className="text-white text-sm">Dynamic tick management for optimal capital utilization</p>
            </div>
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
            <p className="text-white text-sm">Unlike traditional leverage, there's no liquidation risk - your maximum loss is the premium paid.</p>
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
