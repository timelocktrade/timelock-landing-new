export const ZeroLossPerpsIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
    {/* Subtle radial background */}
    <circle
      cx="200"
      cy="200"
      r="180"
      fill="url(#perps-radial-bg)"
      opacity="0.08"
    />

    {/* Protective shield at top */}
    <g opacity="0.95">
      <path
        d="M200 50 L250 70 L250 110 C250 140 225 160 200 170 C175 160 150 140 150 110 L150 70 Z"
        fill="url(#perps-shield-fill)"
        stroke="url(#perps-shield-stroke)"
        strokeWidth="3"
      />
      <path
        d="M182 105 L195 118 L220 88"
        stroke="#10b981"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="200"
        y="190"
        fontFamily="Manrope, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="url(#perps-text1)"
        textAnchor="middle"
      >
        Zero Loss
      </text>
    </g>

    {/* Ascending bar chart representing gains */}
    <g opacity="0.9">
      <rect
        x="70"
        y="270"
        width="35"
        height="60"
        rx="4"
        fill="url(#perps-bar1)"
        stroke="url(#perps-bar1-stroke)"
        strokeWidth="2"
      />
      <text
        x="87.5"
        y="350"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#3b82f6"
        textAnchor="middle"
      >
        1D
      </text>

      <rect
        x="120"
        y="245"
        width="35"
        height="85"
        rx="4"
        fill="url(#perps-bar2)"
        stroke="url(#perps-bar2-stroke)"
        strokeWidth="2"
      />
      <text
        x="137.5"
        y="350"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#10b981"
        textAnchor="middle"
      >
        1W
      </text>

      <rect
        x="170"
        y="220"
        width="35"
        height="110"
        rx="4"
        fill="url(#perps-bar3)"
        stroke="url(#perps-bar3-stroke)"
        strokeWidth="2"
      />
      <text
        x="187.5"
        y="350"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#10b981"
        textAnchor="middle"
      >
        1M
      </text>

      <rect
        x="220"
        y="195"
        width="35"
        height="135"
        rx="4"
        fill="url(#perps-bar4)"
        stroke="url(#perps-bar4-stroke)"
        strokeWidth="2"
      />
      <text
        x="237.5"
        y="350"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#10b981"
        textAnchor="middle"
      >
        3M
      </text>

      <rect
        x="270"
        y="165"
        width="35"
        height="165"
        rx="4"
        fill="url(#perps-bar5)"
        stroke="url(#perps-bar5-stroke)"
        strokeWidth="2"
      />
      <rect
        x="270"
        y="165"
        width="35"
        height="165"
        rx="4"
        fill="url(#perps-bar5-glow)"
        opacity="0.4"
      />
      <text
        x="287.5"
        y="350"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#10b981"
        textAnchor="middle"
      >
        6M+
      </text>

      <path
        d="M315 155 L315 135 M307 143 L315 135 L323 143"
        stroke="url(#perps-arrow-up)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* Infinity symbol */}
    <g opacity="0.85">
      <path
        d="M 330 100 Q 345 85 360 100 Q 375 115 360 130 Q 345 145 330 130 Q 320 120 320 105 Q 320 90 330 100 Z M 330 100 Q 315 85 300 100 Q 285 115 300 130 Q 315 145 330 130 Q 340 120 340 105 Q 340 90 330 100 Z"
        fill="url(#perps-infinity)"
        opacity="0.6"
      />
      <text
        x="330"
        y="175"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="600"
        fill="url(#perps-text2)"
        textAnchor="middle"
      >
        Unlimited
      </text>
    </g>

    {/* Feature badges */}
    <g opacity="0.95">
      <rect
        x="40"
        y="90"
        width="95"
        height="28"
        rx="14"
        fill="url(#perps-badge1)"
      />
      <text
        x="87.5"
        y="109"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        No Liquidation
      </text>

      <rect
        x="45"
        y="210"
        width="75"
        height="26"
        rx="13"
        fill="url(#perps-badge2)"
      />
      <text
        x="82.5"
        y="227"
        fontFamily="Manrope, sans-serif"
        fontSize="10"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Fixed Cost
      </text>
    </g>

    {/* Sparkles */}
    <g opacity="0.7">
      <circle cx="120" cy="60" r="3" fill="#10b981" />
      <circle cx="280" cy="55" r="3" fill="#3b82f6" />
      <circle cx="50" cy="150" r="2" fill="#10b981" />
      <circle cx="325" cy="200" r="2" fill="#3b82f6" />
      <circle cx="310" cy="280" r="2" fill="#10b981" />
    </g>

    <defs>
      <radialGradient id="perps-radial-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </radialGradient>

      <linearGradient
        id="perps-shield-fill"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient
        id="perps-shield-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <linearGradient id="perps-text1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="perps-text2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <linearGradient id="perps-bar1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="perps-bar1-stroke" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="perps-bar2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="perps-bar2-stroke" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="perps-bar3" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="perps-bar3-stroke" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="perps-bar4" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="perps-bar4-stroke" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="perps-bar5" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="perps-bar5-stroke" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="perps-bar5-glow" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
      </linearGradient>

      <linearGradient id="perps-arrow-up" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>

      <linearGradient id="perps-infinity" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="perps-badge1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="perps-badge2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
      </linearGradient>
    </defs>
  </svg>
);
