export const CustomOptionsIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
    {/* Subtle radial background */}
    <circle
      cx="200"
      cy="200"
      r="180"
      fill="url(#options-radial-bg)"
      opacity="0.08"
    />

    {/* Central decision node */}
    <g>
      <circle
        cx="200"
        cy="200"
        r="50"
        fill="url(#options-center-fill)"
        stroke="url(#options-center-stroke)"
        strokeWidth="3"
      />
      <text
        x="200"
        y="195"
        fontFamily="Manrope, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Your
      </text>
      <text
        x="200"
        y="212"
        fontFamily="Manrope, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Options
      </text>
    </g>

    {/* Branching paths */}
    <g opacity="0.6">
      <path
        d="M200 150 L200 80"
        stroke="url(#options-path1)"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
      <path
        d="M235 175 L300 120"
        stroke="url(#options-path2)"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
      <path
        d="M235 225 L300 280"
        stroke="url(#options-path3)"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
      <path
        d="M165 225 L100 280"
        stroke="url(#options-path4)"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
      <path
        d="M165 175 L100 120"
        stroke="url(#options-path5)"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
    </g>

    {/* Option endpoints */}
    <g opacity="0.9">
      {/* Top - Duration */}
      <rect
        x="155"
        y="50"
        width="90"
        height="50"
        rx="8"
        fill="url(#options-box1)"
        stroke="url(#options-box1-stroke)"
        strokeWidth="2"
      />
      <text
        x="200"
        y="72"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Any
      </text>
      <text
        x="200"
        y="88"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fill="#fff"
        textAnchor="middle"
        opacity="0.8"
      >
        Duration
      </text>

      {/* Top Right - Strike */}
      <rect
        x="270"
        y="90"
        width="90"
        height="50"
        rx="8"
        fill="url(#options-box2)"
        stroke="url(#options-box2-stroke)"
        strokeWidth="2"
      />
      <text
        x="315"
        y="112"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Custom
      </text>
      <text
        x="315"
        y="128"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fill="#fff"
        textAnchor="middle"
        opacity="0.8"
      >
        Strike
      </text>

      {/* Bottom Right - Type */}
      <rect
        x="270"
        y="260"
        width="90"
        height="50"
        rx="8"
        fill="url(#options-box3)"
        stroke="url(#options-box3-stroke)"
        strokeWidth="2"
      />
      <text
        x="315"
        y="282"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Call/Put
      </text>
      <text
        x="315"
        y="298"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fill="#fff"
        textAnchor="middle"
        opacity="0.8"
      >
        Choice
      </text>

      {/* Bottom Left - Size */}
      <rect
        x="40"
        y="260"
        width="90"
        height="50"
        rx="8"
        fill="url(#options-box4)"
        stroke="url(#options-box4-stroke)"
        strokeWidth="2"
      />
      <text
        x="85"
        y="282"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Flexible
      </text>
      <text
        x="85"
        y="298"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fill="#fff"
        textAnchor="middle"
        opacity="0.8"
      >
        Size
      </text>

      {/* Top Left - Collateral */}
      <rect
        x="40"
        y="90"
        width="90"
        height="50"
        rx="8"
        fill="url(#options-box5)"
        stroke="url(#options-box5-stroke)"
        strokeWidth="2"
      />
      <text
        x="85"
        y="112"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        Any
      </text>
      <text
        x="85"
        y="128"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fill="#fff"
        textAnchor="middle"
        opacity="0.8"
      >
        Collateral
      </text>
    </g>

    {/* Feature badges */}
    <g opacity="0.95">
      <rect
        x="130"
        y="350"
        width="140"
        height="30"
        rx="15"
        fill="url(#options-badge)"
      />
      <text
        x="200"
        y="371"
        fontFamily="Manrope, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        First in DeFi
      </text>
    </g>

    {/* Sparkles */}
    <g opacity="0.7">
      <circle cx="150" cy="40" r="3" fill="#8b5cf6" />
      <circle cx="340" cy="75" r="3" fill="#ec4899" />
      <circle cx="350" cy="250" r="2" fill="#6366f1" />
      <circle cx="60" cy="245" r="2" fill="#8b5cf6" />
      <circle cx="240" cy="200" r="2" fill="#ec4899" />
    </g>

    <defs>
      <radialGradient id="options-radial-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#6366f1" />
      </radialGradient>

      <radialGradient id="options-center-fill" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
      </radialGradient>
      <linearGradient
        id="options-center-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>

      <linearGradient id="options-path1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="options-path2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="options-path3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="options-path4" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="options-path5" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
      </linearGradient>

      <linearGradient id="options-box1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="options-box1-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>

      <linearGradient id="options-box2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="options-box2-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>

      <linearGradient id="options-box3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="options-box3-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="options-box4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="options-box4-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>

      <linearGradient id="options-box5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient
        id="options-box5-stroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="options-badge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
      </linearGradient>
    </defs>
  </svg>
);
