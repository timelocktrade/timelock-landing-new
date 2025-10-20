export const TUSDStablecoinIllustration = () => (
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
    {/* Background glow rings */}
    <circle
      cx="200"
      cy="200"
      r="180"
      stroke="url(#tusd-glow1)"
      strokeWidth="2"
      fill="none"
      opacity="0.4"
    />
    <circle
      cx="200"
      cy="200"
      r="160"
      stroke="url(#tusd-glow2)"
      strokeWidth="2"
      fill="none"
      opacity="0.4"
    />

    {/* Orbiting nodes representing network */}
    <g opacity="0.8">
      {/* Top node */}
      <circle cx="200" cy="30" r="12" fill="url(#tusd-node1)" />
      <circle cx="200" cy="30" r="8" fill="#fbbf24" />

      {/* Top-right node */}
      <circle cx="330" cy="90" r="12" fill="url(#tusd-node2)" />
      <circle cx="330" cy="90" r="8" fill="#f87171" />

      {/* Right node */}
      <circle cx="370" cy="200" r="12" fill="url(#tusd-node3)" />
      <circle cx="370" cy="200" r="8" fill="#d946ef" />

      {/* Bottom-right node */}
      <circle cx="330" cy="310" r="12" fill="url(#tusd-node4)" />
      <circle cx="330" cy="310" r="8" fill="#fbbf24" />

      {/* Bottom node */}
      <circle cx="200" cy="370" r="12" fill="url(#tusd-node5)" />
      <circle cx="200" cy="370" r="8" fill="#f87171" />

      {/* Bottom-left node */}
      <circle cx="70" cy="310" r="12" fill="url(#tusd-node6)" />
      <circle cx="70" cy="310" r="8" fill="#d946ef" />

      {/* Left node */}
      <circle cx="30" cy="200" r="12" fill="url(#tusd-node7)" />
      <circle cx="30" cy="200" r="8" fill="#fbbf24" />

      {/* Top-left node */}
      <circle cx="70" cy="90" r="12" fill="url(#tusd-node8)" />
      <circle cx="70" cy="90" r="8" fill="#f87171" />
    </g>

    {/* Central shield */}
    <g>
      {/*<path
        d="M108.753 334.822L200 400L291.247 334.822C343.808 297.281 375 236.667 375 172.076V75L200 0L25 75V172.076C25 236.667 56.1932 297.281 108.753 334.822Z"
        stroke="#000000"
        stroke-width="37.5"
        stroke-linejoin="round"
      />*/}
      {/*<path
        d="M4.35009 13.3929L8 16L11.6499 13.3929C13.7523 11.8912 15 9.46667 15 6.88306V3L8 0L1 3V6.88306C1 9.46667 2.24773 11.8912 4.35009 13.3929Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linejoin="round"
      />*/}
      {/* Shield body with sharp edges */}
      <path
      d="M148.753 299.822L200 340L251.247 299.822C284.808 276.281 302 238.667 302 180.076V115L200 70L98 115V180.076C98 238.667 115.1932 276.281 148.753 299.822Z"
        fill="url(#tusd-coin-bg)"
        stroke="url(#tusd-coin-border)"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />

      {/* Inner shield border with sharp angles */}
      <path
      d="M168.753 280.822L200 305L231.247 280.822C258.808 265.281 273 242.667 273 202.076V135L200 100L127 135V202.076C127 242.667 141.1932 265.281 168.753 280.822Z"
        fill="none"
        stroke="url(#tusd-coin-inner)"
        strokeWidth="2"
        strokeLinejoin="miter"
      />

      {/* TUSD text */}
      <text
        x="200"
        y="195"
        fontFamily="Manrope, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="url(#tusd-text-grad)"
        textAnchor="middle"
      >
        TUSD
      </text>

      {/* Dollar sign */}
      <text
        x="200"
        y="218"
        fontFamily="Manrope, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="url(#tusd-dollar-grad)"
        textAnchor="middle"
        opacity="0.8"
      >
        $1.00
      </text>
    </g>

    {/* Percentage indicators */}
    <g opacity="0.95">
      <rect
        x="250"
        y="150"
        width="70"
        height="32"
        rx="16"
        fill="url(#tusd-badge1)"
      />
      <text
        x="285"
        y="172"
        fontFamily="Manrope, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        18% APY
      </text>

      <rect
        x="80"
        y="150"
        width="70"
        height="32"
        rx="16"
        fill="url(#tusd-badge2)"
      />
      <text
        x="115"
        y="172"
        fontFamily="Manrope, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        15% APY
      </text>
    </g>

    <defs>
      {/* Glow gradients */}
      <linearGradient id="tusd-glow1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="tusd-glow2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="tusd-glow3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>

      {/* Node gradients */}
      <radialGradient id="tusd-node1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node5" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node6" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node7" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="tusd-node8" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.1" />
      </radialGradient>

      {/* Line gradients */}
      <linearGradient id="tusd-line1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="tusd-line2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="tusd-line3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="tusd-line4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="tusd-line5" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="tusd-line6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="tusd-line7" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="tusd-line8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>

      {/* Arrow gradients */}
      <linearGradient id="tusd-arrow1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="tusd-arrow2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="tusd-arrow3" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="tusd-arrow4" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
      </linearGradient>

      {/* Coin gradients */}
      <radialGradient id="tusd-coin-bg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
        <stop offset="40%" stopColor="#f87171" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
      </radialGradient>
      <linearGradient id="tusd-coin-border" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
        <stop offset="33%" stopColor="#f87171" stopOpacity="1" />
        <stop offset="66%" stopColor="#d946ef" stopOpacity="1" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="tusd-coin-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="tusd-text-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="tusd-dollar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <radialGradient id="tusd-shine" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="tusd-shadow" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
      </linearGradient>

      {/* Badge gradients */}
      <linearGradient id="tusd-badge1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="tusd-badge2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.9" />
      </linearGradient>
    </defs>
  </svg>
);
