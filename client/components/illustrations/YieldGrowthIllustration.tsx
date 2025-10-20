export const YieldGrowthIllustration = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 500 500"
    fill="none"
    className="w-full"
  >
    {/* Subtle gradient background */}
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#1a0a1a" stopOpacity="0.2" />
      </linearGradient>

      {/* Glow effects for icons */}
      <radialGradient id="glowPink" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FF007A" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FF007A" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glowPurple" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glowYellow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
      </radialGradient>

      {/* Bar gradients - more subtle */}
      <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="bar4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="bar5" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.35" />
      </linearGradient>

      {/* Trend line gradient */}
      <linearGradient id="trend" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#d946ef" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.8" />
      </linearGradient>

      {/* Blur filter for glow */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Gradient rings for icons */}
      <linearGradient id="swapRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF007A" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>

      <linearGradient id="premiumRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>

      <linearGradient id="fundingRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>

      {/* Gradient for Your Yield circle */}
      <linearGradient id="yieldRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>

      <radialGradient id="yieldBg" cx="50%" cy="50%">
        <stop offset="0%" stopColor="rgba(13, 13, 13, 0.95)" />
        <stop offset="100%" stopColor="rgba(10, 10, 10, 0.98)" />
      </radialGradient>
    </defs>

    <rect x="0" y="0" width="500" height="500" fill="url(#bgGradient)" />

    {/* Yield Source Icons - Top Section */}

    {/* Uniswap - Circle with waves */}
    <g>
      {/* Outer glow */}
      <circle cx="75" cy="70" r="38" fill="#FF007A" opacity="0.1" />

      {/* Gradient ring */}
      <circle
        cx="75"
        cy="70"
        r="35"
        fill="none"
        stroke="url(#swapRing)"
        strokeWidth="2.5"
        opacity="0.9"
      />

      {/* Inner dark background */}
      <circle cx="75" cy="70" r="31" fill="url(#yieldBg)" />

      {/* Icon elements */}
      <path
        d="M 55 70 Q 65 62 75 70 T 95 70"
        stroke="#FF007A"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="65" cy="65" r="3" fill="#FF007A" />
      <circle cx="85" cy="65" r="3" fill="#FF007A" />

      <text
        x="75"
        y="135"
        fontFamily="Manrope, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#FF007A"
        textAnchor="middle"
      >
        Swap Fees
      </text>
    </g>

    {/* Timelock - Hexagon with T */}
    <g>
      {/* Outer glow */}
      <circle cx="250" cy="68" r="38" fill="#d946ef" opacity="0.1" />

      {/* Gradient ring - hexagon */}
      <polygon
        points="250,30 283,48 283,88 250,106 217,88 217,48"
        fill="none"
        stroke="url(#premiumRing)"
        strokeWidth="2.5"
        opacity="0.9"
      />

      {/* Inner dark background - hexagon */}
      <polygon
        points="250,35 278,51 278,85 250,101 222,85 222,51"
        fill="url(#yieldBg)"
      />

      {/* Icon elements - T letter */}
      <line
        x1="250"
        y1="52"
        x2="250"
        y2="84"
        stroke="#d946ef"
        strokeWidth="2.5"
      />
      <line
        x1="237"
        y1="52"
        x2="263"
        y2="52"
        stroke="#d946ef"
        strokeWidth="2.5"
      />

      <text
        x="250"
        y="135"
        fontFamily="Manrope, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#d946ef"
        textAnchor="middle"
      >
        Trading Premium
      </text>
    </g>

    {/* Perps - Square with diagonal */}
    <g>
      {/* Outer glow */}
      <circle cx="425" cy="70" r="38" fill="#fbbf24" opacity="0.1" />

      {/* Gradient ring - rounded square */}
      <rect
        x="395"
        y="40"
        width="60"
        height="60"
        rx="6"
        fill="none"
        stroke="url(#fundingRing)"
        strokeWidth="2.5"
        opacity="0.9"
      />

      {/* Inner dark background - rounded square */}
      <rect x="400" y="45" width="50" height="50" rx="4" fill="url(#yieldBg)" />

      {/* Icon elements - X pattern */}
      <line
        x1="408"
        y1="87"
        x2="442"
        y2="53"
        stroke="#fbbf24"
        strokeWidth="2.5"
      />
      <line
        x1="408"
        y1="53"
        x2="442"
        y2="87"
        stroke="#fbbf24"
        strokeWidth="2.5"
      />

      <text
        x="425"
        y="135"
        fontFamily="Manrope, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#fbbf24"
        textAnchor="middle"
      >
        Perps Funding Rate
      </text>
    </g>

    {/* Flow lines - smoother curves */}
    <path
      d="M 75 135 L 75 160 Q 75 175 95 185 L 220 210"
      stroke="#FF007A"
      strokeWidth="2"
      fill="none"
      opacity="0.4"
      strokeDasharray="4,6"
    />
    <path
      d="M 250 135 L 250 210"
      stroke="#d946ef"
      strokeWidth="2"
      opacity="0.4"
      strokeDasharray="4,6"
    />
    <path
      d="M 425 135 L 425 160 Q 425 175 405 185 L 280 210"
      stroke="#fbbf24"
      strokeWidth="2"
      fill="none"
      opacity="0.4"
      strokeDasharray="4,6"
    />

    {/* Convergence point - Your Yield Circle */}
    <g>
      {/* Outer glow */}
      <circle cx="250" cy="220" r="52" fill="url(#yieldRing)" opacity="0.15" />

      {/* Gradient ring */}
      <circle
        cx="250"
        cy="220"
        r="48"
        fill="none"
        stroke="url(#yieldRing)"
        strokeWidth="3"
        opacity="0.9"
      />

      {/* Inner circle with dark background */}
      <circle cx="250" cy="220" r="42" fill="url(#yieldBg)" />

      {/* Text */}
      <text
        x="250"
        y="212"
        fontFamily="Manrope, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Your
      </text>
      <text
        x="250"
        y="238"
        fontFamily="Manrope, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Yield
      </text>
    </g>

    {/* Chart Section */}
    <g transform="translate(0, 20)">
      {/* Axis */}
      <line
        x1="60"
        y1="470"
        x2="440"
        y2="470"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <line
        x1="60"
        y1="270"
        x2="60"
        y2="470"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.2"
      />

      {/* Bars - cleaner design */}
      <path
        d="M 90 470 L 90 413 Q 90 405 98 405 L 142 405 Q 150 405 150 413 L 150 470"
        fill="url(#bar1)"
      />
      <path
        d="M 90 470 L 90 413 Q 90 405 98 405 L 142 405 Q 150 405 150 413 L 150 470"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        opacity="0.5"
      />

      <path
        d="M 165 470 L 165 388 Q 165 380 173 380 L 217 380 Q 225 380 225 388 L 225 470"
        fill="url(#bar2)"
      />
      <path
        d="M 165 470 L 165 388 Q 165 380 173 380 L 217 380 Q 225 380 225 388 L 225 470"
        fill="none"
        stroke="#f87171"
        strokeWidth="1.5"
        opacity="0.5"
      />

      <path
        d="M 240 470 L 240 353 Q 240 345 248 345 L 292 345 Q 300 345 300 353 L 300 470"
        fill="url(#bar3)"
      />
      <path
        d="M 240 470 L 240 353 Q 240 345 248 345 L 292 345 Q 300 345 300 353 L 300 470"
        fill="none"
        stroke="#d946ef"
        strokeWidth="1.5"
        opacity="0.5"
      />

      <path
        d="M 315 470 L 315 308 Q 315 300 323 300 L 367 300 Q 375 300 375 308 L 375 470"
        fill="url(#bar4)"
      />
      <path
        d="M 315 470 L 315 308 Q 315 300 323 300 L 367 300 Q 375 300 375 308 L 375 470"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        opacity="0.5"
      />

      <path
        d="M 390 470 L 390 268 Q 390 260 398 260 L 442 260 Q 450 260 450 268 L 450 470"
        fill="url(#bar5)"
      />
      <path
        d="M 390 470 L 390 268 Q 390 260 398 260 L 442 260 Q 450 260 450 268 L 450 470"
        fill="none"
        stroke="#f87171"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Percentage labels - cleaner positioning */}
      <text
        x="120"
        y="395"
        fontSize="16"
        fontWeight="600"
        fill="#fbbf24"
        textAnchor="middle"
      >
        +24%
      </text>
      <text
        x="195"
        y="370"
        fontSize="16"
        fontWeight="600"
        fill="#f87171"
        textAnchor="middle"
      >
        +38%
      </text>
      <text
        x="270"
        y="335"
        fontSize="16"
        fontWeight="600"
        fill="#d946ef"
        textAnchor="middle"
      >
        +52%
      </text>
      <text
        x="345"
        y="290"
        fontSize="17"
        fontWeight="600"
        fill="#fbbf24"
        textAnchor="middle"
      >
        +71%
      </text>
      <text
        x="420"
        y="250"
        fontSize="17"
        fontWeight="600"
        fill="#f87171"
        textAnchor="middle"
      >
        +95%
      </text>

      {/* Smooth trend line */}
      <path
        d="M 120 450 Q 158 435 195 415 T 270 385 Q 308 360 345 330 T 420 285"
        stroke="url(#trend)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {/* Data points on trend line */}
      <circle cx="120" cy="450" r="4" fill="#fbbf24" opacity="0.8" />
      <circle cx="195" cy="415" r="4" fill="#f87171" opacity="0.8" />
      <circle cx="270" cy="385" r="4" fill="#d946ef" opacity="0.8" />
      <circle cx="345" cy="330" r="4" fill="#fbbf24" opacity="0.8" />
      <circle cx="420" cy="285" r="4" fill="#f87171" opacity="0.8" />
    </g>
  </svg>
);
