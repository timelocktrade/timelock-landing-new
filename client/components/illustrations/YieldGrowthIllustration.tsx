export const YieldGrowthIllustration = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 600 600"
    fill="none"
    className="w-full"
  >
    <defs>
      {/* Glassmorphic card background */}
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
      </linearGradient>

      {/* Premium mesh gradients for cards */}
      <radialGradient id="swapGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="timelockGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="perpsGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
      </radialGradient>

      {/* Card border gradients */}
      <linearGradient id="swapBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="timelockBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>

      <linearGradient id="perpsBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      {/* Central hub gradient */}
      <radialGradient id="hubCore" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
        <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </radialGradient>

      <linearGradient id="hubRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="33%" stopColor="#8b5cf6" />
        <stop offset="66%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      {/* Area chart gradient */}
      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
      </linearGradient>

      <linearGradient id="chartLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="25%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="75%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      {/* Flow line gradients */}
      <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
      </linearGradient>

      <linearGradient id="flow2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
      </linearGradient>

      <linearGradient id="flow3" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
      </linearGradient>

      {/* Filters */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Arrow marker */}
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="10"
        refX="9"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 10 3, 0 6" fill="#6366f1" opacity="0.6" />
      </marker>
    </defs>

    {/* Swap Fees Card - Left */}
    <g>
      {/* Card */}
      <rect
        x="30"
        y="50"
        width="140"
        height="100"
        rx="16"
        fill="url(#cardBg)"
        stroke="url(#swapBorder)"
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Icon - Refresh/Swap symbol */}
      <g transform="translate(100, 85)">
        <path
          d="M -15,-8 L -5,-8 L -5,-15 L 5,0 L -5,15 L -5,8 L -15,8"
          fill="#ec4899"
          opacity="0.8"
        />
        <path
          d="M 15,8 L 5,8 L 5,15 L -5,0 L 5,-15 L 5,-8 L 15,-8"
          fill="#8b5cf6"
          opacity="0.8"
        />
      </g>

      {/* Label */}
      <text
        x="100"
        y="130"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#ec4899"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        SWAP FEES
      </text>
    </g>

    {/* Trading Premium Card - Top Center */}
    <g>
      {/* Card */}
      <rect
        x="220"
        y="5"
        width="160"
        height="100"
        rx="16"
        fill="url(#cardBg)"
        stroke="url(#timelockBorder)"
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Icon - Diamond/Gem for premium */}
      <g transform="translate(300, 40)">
        <path
          d="M 0,-18 L 12,-6 L 12,6 L 0,18 L -12,6 L -12,-6 Z"
          fill="url(#timelockBorder)"
          opacity="0.3"
        />
        <path
          d="M 0,-15 L 10,-5 L 0,15 L -10,-5 Z"
          fill="url(#timelockBorder)"
          opacity="0.9"
        />
        <line
          x1="-10"
          y1="-5"
          x2="10"
          y2="-5"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.4"
        />
      </g>

      {/* Label */}
      <text
        x="300"
        y="85"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#3b82f6"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        TRADING PREMIUM
      </text>
    </g>

    {/* Perps Funding Rate Card - Right */}
    <g>
      {/* Card */}
      <rect
        x="430"
        y="50"
        width="140"
        height="100"
        rx="16"
        fill="url(#cardBg)"
        stroke="url(#perpsBorder)"
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Icon - Lightning bolt for fast funding */}
      <g transform="translate(500, 85)">
        <path
          d="M 5,-18 L -8,2 L 2,2 L -5,18 L 8,-2 L -2,-2 Z"
          fill="url(#perpsBorder)"
          opacity="0.9"
        />
      </g>

      {/* Label */}
      <text
        x="500"
        y="130"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#14b8a6"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        FUNDING RATE
      </text>
    </g>

    {/* Flow lines with particles */}
    <g opacity="0.8">
      {/* Left flow */}
      <path
        d="M 100 150 Q 150 180 220 200"
        stroke="url(#flow1)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        // markerEnd="url(#arrowhead)"
        filter="url(#glow)"
      />
      <circle cx="130" cy="165" r="3" fill="#ec4899" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Center flow */}
      <path
        d="M 300 100 L 300 140"
        stroke="url(#flow2)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        markerEnd="url(#arrowhead)"
        filter="url(#glow)"
      />
      <circle cx="300" cy="150" r="3" fill="#3b82f6" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </circle>

      {/* Right flow */}
      <path
        d="M 500 150 Q 450 180 380 200"
        stroke="url(#flow3)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        // markerEnd="url(#arrowhead)"
        filter="url(#glow)"
      />
      <circle cx="470" cy="165" r="3" fill="#14b8a6" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
    </g>

    {/* Central "Your Yield" Hub */}
    <g>
      {/* Outer orbital rings */}
      <circle
        cx="300"
        cy="240"
        r="75"
        fill="none"
        stroke="url(#hubRing)"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="8,4"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 300 240"
          to="360 300 240"
          dur="20s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="300"
        cy="240"
        r="85"
        fill="none"
        stroke="url(#hubRing)"
        strokeWidth="1.5"
        opacity="0.2"
        strokeDasharray="4,8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 300 240"
          to="0 300 240"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Main circle */}
      <circle
        cx="300"
        cy="240"
        r="55"
        fill="url(#cardBg)"
        stroke="url(#hubRing)"
        strokeWidth="3"
        opacity="0.95"
        filter="url(#glow)"
      />

      {/* Inner circle */}
      <circle cx="300" cy="240" r="50" fill="#0a0a0a" opacity="0.8" />

      {/* Text */}
      <text
        x="300"
        y="230"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#94a3b8"
        textAnchor="middle"
        letterSpacing="2"
      >
        YOUR
      </text>
      <text
        x="300"
        y="260"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="1"
      >
        YIELD
      </text>
    </g>

    {/* Growth Chart Section */}
    <g transform="translate(0, 280)">

      {/* Grid lines */}
      <line
        x1="80"
        y1="240"
        x2="520"
        y2="240"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.15"
      />
      <line
        x1="80"
        y1="180"
        x2="520"
        y2="180"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.08"
        strokeDasharray="4,4"
      />
      <line
        x1="80"
        y1="120"
        x2="520"
        y2="120"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.08"
        strokeDasharray="4,4"
      />

      {/* Area fill */}
      <path
        d="M 80,240 L 80,220 Q 140,200 190,180 T 300,130 Q 360,100 410,80 T 520,55 L 520,240 Z"
        fill="url(#chartGradient)"
        opacity="0.6"
      />

      {/* Main line */}
      <path
        d="M 80,220 Q 140,200 190,180 T 300,130 Q 360,100 410,80 T 520,55"
        stroke="url(#chartLine)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Data points with values */}
      <g>
        {/* Point 1 */}
        <circle cx="80" cy="220" r="6" fill="#ec4899" opacity="0.9" />
        <circle cx="80" cy="220" r="3" fill="#ffffff" />
        <text
          x="80"
          y="210"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#ec4899"
          textAnchor="middle"
        >
          15%
        </text>

        {/* Point 2 */}
        <circle cx="190" cy="180" r="6" fill="#8b5cf6" opacity="0.9" />
        <circle cx="190" cy="180" r="3" fill="#ffffff" />
        <text
          x="190"
          y="170"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#8b5cf6"
          textAnchor="middle"
        >
          32%
        </text>

        {/* Point 3 */}
        <circle cx="300" cy="130" r="6" fill="#3b82f6" opacity="0.9" />
        <circle cx="300" cy="130" r="3" fill="#ffffff" />
        <text
          x="300"
          y="120"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#3b82f6"
          textAnchor="middle"
        >
          54%
        </text>

        {/* Point 4 */}
        <circle cx="410" cy="80" r="6" fill="#06b6d4" opacity="0.9" />
        <circle cx="410" cy="80" r="3" fill="#ffffff" />
        <text
          x="410"
          y="70"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#06b6d4"
          textAnchor="middle"
        >
          78%
        </text>

        {/* Point 5 */}
        <circle cx="520" cy="55" r="7" fill="#10b981" opacity="0.9" />
        <circle cx="520" cy="55" r="3.5" fill="#ffffff" />
        <text
          x="520"
          y="45"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#10b981"
          textAnchor="middle"
        >
          95%
        </text>
      </g>

      {/* Time labels */}
      <g opacity="0.5">
        <text
          x="80"
          y="260"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#94a3b8"
          textAnchor="middle"
        >
          1M
        </text>
        <text
          x="190"
          y="260"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#94a3b8"
          textAnchor="middle"
        >
          3M
        </text>
        <text
          x="300"
          y="260"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#94a3b8"
          textAnchor="middle"
        >
          6M
        </text>
        <text
          x="410"
          y="260"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#94a3b8"
          textAnchor="middle"
        >
          9M
        </text>
        <text
          x="520"
          y="260"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#94a3b8"
          textAnchor="middle"
        >
          12M
        </text>
      </g>
    </g>
  </svg>
);
