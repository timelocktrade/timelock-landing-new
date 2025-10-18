// Vibrant multi-color illustrations with magenta color schemes
export const TradersIllustration = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    {/* Outer glow rings */}
    <circle
      cx="60"
      cy="60"
      r="50"
      stroke="url(#traders-grad1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.2"
    />
    <circle
      cx="60"
      cy="60"
      r="42"
      stroke="url(#traders-grad2)"
      strokeWidth="2"
      fill="none"
      opacity="0.3"
    />

    {/* Main geometric shape - hexagon */}
    <path
      d="M60 20 L85 35 L85 65 L60 80 L35 65 L35 35 Z"
      fill="url(#traders-grad3)"
      stroke="url(#traders-grad4)"
      strokeWidth="2"
      opacity="0.9"
    />

    {/* Inner triangular elements */}
    <path
      d="M60 35 L75 50 L60 65 L45 50 Z"
      fill="url(#traders-grad5)"
      stroke="url(#traders-grad6)"
      strokeWidth="1.5"
    />

    {/* Central orb with pulse effect */}
    <circle cx="60" cy="50" r="12" fill="url(#traders-grad7)" opacity="0.8" />
    <circle cx="60" cy="50" r="8" fill="url(#traders-grad8)" />

    {/* Accent dots */}
    <circle cx="60" cy="20" r="3" fill="#fbbf24" opacity="0.9" />
    <circle cx="85" cy="35" r="3" fill="#f87171" opacity="0.9" />
    <circle cx="85" cy="65" r="3" fill="#d946ef" opacity="0.9" />
    <circle cx="60" cy="80" r="3" fill="#fbbf24" opacity="0.9" />
    <circle cx="35" cy="65" r="3" fill="#f87171" opacity="0.9" />
    <circle cx="35" cy="35" r="3" fill="#d946ef" opacity="0.9" />

    <defs>
      <linearGradient id="traders-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
        <stop offset="50%" stopColor="#d946ef" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="traders-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="traders-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#f87171" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="traders-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="traders-grad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="traders-grad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <radialGradient id="traders-grad7" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="traders-grad8" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </radialGradient>
    </defs>
  </svg>
);

export const LPsIllustration = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    {/* Top layer nodes */}
    <rect
      x="20"
      y="25"
      width="28"
      height="28"
      rx="6"
      fill="url(#lp-grad1)"
      stroke="url(#lp-grad2)"
      strokeWidth="2"
    />
    <rect
      x="72"
      y="25"
      width="28"
      height="28"
      rx="6"
      fill="url(#lp-grad3)"
      stroke="url(#lp-grad4)"
      strokeWidth="2"
    />

    {/* Middle layer nodes */}
    <rect
      x="20"
      y="67"
      width="28"
      height="28"
      rx="6"
      fill="url(#lp-grad5)"
      stroke="url(#lp-grad6)"
      strokeWidth="2"
    />
    <rect
      x="72"
      y="67"
      width="28"
      height="28"
      rx="6"
      fill="url(#lp-grad7)"
      stroke="url(#lp-grad8)"
      strokeWidth="2"
    />

    {/* Central hub */}
    <circle
      cx="60"
      cy="60"
      r="16"
      fill="url(#lp-grad9)"
      stroke="url(#lp-grad10)"
      strokeWidth="2.5"
    />

    {/* Connection lines with gradient */}
    <path
      d="M34 53 L48 60"
      stroke="url(#lp-line-grad1)"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M86 53 L72 60"
      stroke="url(#lp-line-grad2)"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M34 67 L48 60"
      stroke="url(#lp-line-grad3)"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M86 67 L72 60"
      stroke="url(#lp-line-grad4)"
      strokeWidth="2"
      opacity="0.7"
    />

    {/* Inner dots for detail */}
    <circle cx="34" cy="39" r="4" fill="#fbbf24" />
    <circle cx="86" cy="39" r="4" fill="#f87171" />
    <circle cx="34" cy="81" r="4" fill="#d946ef" />
    <circle cx="86" cy="81" r="4" fill="#fbbf24" />
    <circle cx="60" cy="60" r="5" fill="#f87171" />

    <defs>
      <linearGradient id="lp-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="lp-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="lp-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="lp-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="lp-grad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="lp-grad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="lp-grad7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="lp-grad8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <radialGradient id="lp-grad9" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
      </radialGradient>
      <linearGradient id="lp-grad10" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="lp-line-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="lp-line-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="lp-line-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="lp-line-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
    </defs>
  </svg>
);

export const BuildersIllustration = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    {/* Outer ring structure */}
    <circle
      cx="60"
      cy="60"
      r="45"
      stroke="url(#builder-ring1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.3"
    />

    {/* Satellite nodes - positioned around center */}
    <circle
      cx="60"
      cy="20"
      r="10"
      fill="url(#builder-node1)"
      stroke="url(#builder-stroke1)"
      strokeWidth="2"
    />
    <circle
      cx="95"
      cy="45"
      r="10"
      fill="url(#builder-node2)"
      stroke="url(#builder-stroke2)"
      strokeWidth="2"
    />
    <circle
      cx="95"
      cy="75"
      r="10"
      fill="url(#builder-node3)"
      stroke="url(#builder-stroke3)"
      strokeWidth="2"
    />
    <circle
      cx="60"
      cy="100"
      r="10"
      fill="url(#builder-node4)"
      stroke="url(#builder-stroke4)"
      strokeWidth="2"
    />
    <circle
      cx="25"
      cy="75"
      r="10"
      fill="url(#builder-node5)"
      stroke="url(#builder-stroke5)"
      strokeWidth="2"
    />
    <circle
      cx="25"
      cy="45"
      r="10"
      fill="url(#builder-node6)"
      stroke="url(#builder-stroke6)"
      strokeWidth="2"
    />

    {/* Central hub with multiple layers */}
    <circle cx="60" cy="60" r="18" fill="url(#builder-center1)" opacity="0.4" />
    <circle cx="60" cy="60" r="12" fill="url(#builder-center2)" />

    {/* Connection lines */}
    <line
      x1="60"
      y1="30"
      x2="60"
      y2="48"
      stroke="url(#builder-line-grad1)"
      strokeWidth="2"
      opacity="0.6"
    />
    <line
      x1="85"
      y1="50"
      x2="72"
      y2="56"
      stroke="url(#builder-line-grad2)"
      strokeWidth="2"
      opacity="0.6"
    />
    <line
      x1="85"
      y1="70"
      x2="72"
      y2="64"
      stroke="url(#builder-line-grad3)"
      strokeWidth="2"
      opacity="0.6"
    />
    <line
      x1="60"
      y1="90"
      x2="60"
      y2="72"
      stroke="url(#builder-line-grad4)"
      strokeWidth="2"
      opacity="0.6"
    />
    <line
      x1="35"
      y1="70"
      x2="48"
      y2="64"
      stroke="url(#builder-line-grad5)"
      strokeWidth="2"
      opacity="0.6"
    />
    <line
      x1="35"
      y1="50"
      x2="48"
      y2="56"
      stroke="url(#builder-line-grad6)"
      strokeWidth="2"
      opacity="0.6"
    />

    {/* Accent dots on nodes */}
    <circle cx="60" cy="20" r="3" fill="#fbbf24" />
    <circle cx="95" cy="45" r="3" fill="#f87171" />
    <circle cx="95" cy="75" r="3" fill="#d946ef" />
    <circle cx="60" cy="100" r="3" fill="#fbbf24" />
    <circle cx="25" cy="75" r="3" fill="#f87171" />
    <circle cx="25" cy="45" r="3" fill="#d946ef" />

    <defs>
      <linearGradient id="builder-ring1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <radialGradient id="builder-node1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="builder-node2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="builder-node3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="builder-node4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="builder-node5" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="builder-node6" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
      </radialGradient>
      <linearGradient id="builder-stroke1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="builder-stroke2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="builder-stroke3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="builder-stroke4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="builder-stroke5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="builder-stroke6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <radialGradient id="builder-center1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#d946ef" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
      </radialGradient>
      <radialGradient id="builder-center2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </radialGradient>
      <linearGradient id="builder-line-grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient
        id="builder-line-grad2"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient
        id="builder-line-grad3"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="builder-line-grad4" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient
        id="builder-line-grad5"
        x1="100%"
        y1="100%"
        x2="0%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient
        id="builder-line-grad6"
        x1="100%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
  </svg>
);

export const YieldGrowthIllustration = () => (
  <svg
    width="100%"
    height="280"
    viewBox="0 0 500 280"
    fill="none"
    className="w-full"
  >
    {/* Background grid lines for professional look */}
    <line
      x1="0"
      y1="220"
      x2="500"
      y2="220"
      stroke="url(#yield-grid)"
      strokeWidth="0.5"
      opacity="0.2"
    />
    <line
      x1="0"
      y1="180"
      x2="500"
      y2="180"
      stroke="url(#yield-grid)"
      strokeWidth="0.5"
      opacity="0.2"
    />
    <line
      x1="0"
      y1="140"
      x2="500"
      y2="140"
      stroke="url(#yield-grid)"
      strokeWidth="0.5"
      opacity="0.2"
    />
    <line
      x1="0"
      y1="100"
      x2="500"
      y2="100"
      stroke="url(#yield-grid)"
      strokeWidth="0.5"
      opacity="0.2"
    />
    <line
      x1="0"
      y1="60"
      x2="500"
      y2="60"
      stroke="url(#yield-grid)"
      strokeWidth="0.5"
      opacity="0.2"
    />

    {/* Bars representing yield growth with gradient fills */}
    <rect
      x="50"
      y="170"
      width="60"
      height="70"
      rx="6"
      fill="url(#yield-bar1)"
      stroke="url(#yield-stroke1)"
      strokeWidth="2"
    />
    <rect
      x="140"
      y="135"
      width="60"
      height="105"
      rx="6"
      fill="url(#yield-bar2)"
      stroke="url(#yield-stroke2)"
      strokeWidth="2"
    />
    <rect
      x="230"
      y="95"
      width="60"
      height="145"
      rx="6"
      fill="url(#yield-bar3)"
      stroke="url(#yield-stroke3)"
      strokeWidth="2"
    />
    <rect
      x="320"
      y="50"
      width="60"
      height="190"
      rx="6"
      fill="url(#yield-bar4)"
      stroke="url(#yield-stroke4)"
      strokeWidth="2.5"
    />
    <rect
      x="410"
      y="25"
      width="60"
      height="215"
      rx="6"
      fill="url(#yield-bar5)"
      stroke="url(#yield-stroke5)"
      strokeWidth="2.5"
    />

    {/* Trend line with gradient - thicker and more prominent */}
    <path
      d="M 80 205 Q 260 130 440 60"
      stroke="url(#yield-trend-line)"
      strokeWidth="3.5"
      fill="none"
      strokeDasharray="8,6"
      opacity="0.8"
    />

    {/* Glow circles at trend line points with outer rings */}
    <circle cx="80" cy="205" r="8" fill="url(#yield-glow1)" opacity="0.3" />
    <circle cx="80" cy="205" r="5" fill="url(#yield-glow1)" opacity="0.9" />

    <circle cx="260" cy="130" r="10" fill="url(#yield-glow2)" opacity="0.3" />
    <circle cx="260" cy="130" r="6" fill="url(#yield-glow2)" opacity="0.9" />

    <circle cx="440" cy="60" r="12" fill="url(#yield-glow3)" opacity="0.3" />
    <circle cx="440" cy="60" r="7" fill="url(#yield-glow3)" opacity="0.9" />

    {/* Accent indicators on bars */}
    <circle cx="80" cy="170" r="4" fill="#fbbf24" opacity="0.9" />
    <circle cx="170" cy="135" r="4" fill="#f87171" opacity="0.9" />
    <circle cx="260" cy="95" r="4" fill="#d946ef" opacity="0.9" />
    <circle cx="350" cy="50" r="5" fill="#fbbf24" opacity="0.9" />
    <circle cx="440" cy="25" r="5" fill="#f87171" opacity="0.9" />

    <defs>
      {/* Grid gradient */}
      <linearGradient id="yield-grid" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>

      {/* Bar gradients - red, gold, magenta mix */}
      <linearGradient id="yield-bar1" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="yield-bar2" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="yield-bar3" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="yield-bar4" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#d946ef" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.35" />
      </linearGradient>
      <linearGradient id="yield-bar5" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.4" />
      </linearGradient>

      {/* Stroke gradients */}
      <linearGradient id="yield-stroke1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="yield-stroke2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="yield-stroke3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="yield-stroke4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="yield-stroke5" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>

      {/* Trend line gradient */}
      <linearGradient id="yield-trend-line" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>

      {/* Glow gradients */}
      <radialGradient id="yield-glow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </radialGradient>
      <radialGradient id="yield-glow2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </radialGradient>
      <radialGradient id="yield-glow3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </radialGradient>
    </defs>
  </svg>
);

export const CheckmarkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 6L5 9L10 3"
      stroke="url(#check-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="check-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
    </defs>
  </svg>
);

export const ComposableIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect
      x="3"
      y="3"
      width="6"
      height="6"
      rx="1"
      stroke="url(#composable-grad1)"
      strokeWidth="1.5"
      fill="url(#composable-fill1)"
    />
    <rect
      x="11"
      y="3"
      width="6"
      height="6"
      rx="1"
      stroke="url(#composable-grad2)"
      strokeWidth="1.5"
      fill="url(#composable-fill2)"
    />
    <rect
      x="3"
      y="11"
      width="6"
      height="6"
      rx="1"
      stroke="url(#composable-grad3)"
      strokeWidth="1.5"
      fill="url(#composable-fill3)"
    />
    <rect
      x="11"
      y="11"
      width="6"
      height="6"
      rx="1"
      stroke="url(#composable-grad4)"
      strokeWidth="1.5"
      fill="url(#composable-fill4)"
    />
    <defs>
      <linearGradient id="composable-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="composable-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="composable-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="composable-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <radialGradient id="composable-fill1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.08" />
      </radialGradient>
      <radialGradient id="composable-fill2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f87171" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="composable-fill3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#f87171" stopOpacity="0.12" />
      </radialGradient>
      <radialGradient id="composable-fill4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.15" />
      </radialGradient>
    </defs>
  </svg>
);

export const DocumentationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3V17M3 10H17"
      stroke="url(#doc-grad1)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="10"
      cy="10"
      r="7"
      stroke="url(#doc-grad2)"
      strokeWidth="1.5"
      fill="url(#doc-fill)"
    />
    <defs>
      <linearGradient id="doc-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="doc-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <radialGradient id="doc-fill" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.08" />
      </radialGradient>
    </defs>
  </svg>
);

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
      opacity="0.15"
    />
    <circle
      cx="200"
      cy="200"
      r="160"
      stroke="url(#tusd-glow2)"
      strokeWidth="2"
      fill="none"
      opacity="0.2"
    />
    <circle
      cx="200"
      cy="200"
      r="140"
      stroke="url(#tusd-glow3)"
      strokeWidth="2"
      fill="none"
      opacity="0.25"
    />

    {/* Orbiting nodes representing network */}
    <g opacity="0.8">
      {/* Top node */}
      <circle cx="200" cy="50" r="12" fill="url(#tusd-node1)" />
      <circle cx="200" cy="50" r="8" fill="#fbbf24" />
      <path
        d="M200 62 L200 150"
        stroke="url(#tusd-line1)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Top-right node */}
      <circle cx="320" cy="110" r="12" fill="url(#tusd-node2)" />
      <circle cx="320" cy="110" r="8" fill="#f87171" />
      <path
        d="M310 118 L220 180"
        stroke="url(#tusd-line2)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Right node */}
      <circle cx="350" cy="200" r="12" fill="url(#tusd-node3)" />
      <circle cx="350" cy="200" r="8" fill="#d946ef" />
      <path
        d="M338 200 L250 200"
        stroke="url(#tusd-line3)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Bottom-right node */}
      <circle cx="320" cy="290" r="12" fill="url(#tusd-node4)" />
      <circle cx="320" cy="290" r="8" fill="#fbbf24" />
      <path
        d="M310 282 L220 220"
        stroke="url(#tusd-line4)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Bottom node */}
      <circle cx="200" cy="350" r="12" fill="url(#tusd-node5)" />
      <circle cx="200" cy="350" r="8" fill="#f87171" />
      <path
        d="M200 338 L200 250"
        stroke="url(#tusd-line5)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Bottom-left node */}
      <circle cx="80" cy="290" r="12" fill="url(#tusd-node6)" />
      <circle cx="80" cy="290" r="8" fill="#d946ef" />
      <path
        d="M90 282 L180 220"
        stroke="url(#tusd-line6)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Left node */}
      <circle cx="50" cy="200" r="12" fill="url(#tusd-node7)" />
      <circle cx="50" cy="200" r="8" fill="#fbbf24" />
      <path
        d="M62 200 L150 200"
        stroke="url(#tusd-line7)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Top-left node */}
      <circle cx="80" cy="110" r="12" fill="url(#tusd-node8)" />
      <circle cx="80" cy="110" r="8" fill="#f87171" />
      <path
        d="M90 118 L180 180"
        stroke="url(#tusd-line8)"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />
    </g>

    {/* Upward yield arrows */}
    <g opacity="0.9">
      <path
        d="M140 240 L130 220 L135 222 L125 200 L140 210 L145 208 L150 230 Z"
        fill="url(#tusd-arrow1)"
      />
      <path
        d="M170 260 L160 235 L165 237 L155 210 L170 222 L175 220 L180 248 Z"
        fill="url(#tusd-arrow2)"
      />
      <path
        d="M230 260 L240 235 L235 237 L245 210 L230 222 L225 220 L220 248 Z"
        fill="url(#tusd-arrow3)"
      />
      <path
        d="M260 240 L270 220 L265 222 L275 200 L260 210 L255 208 L250 230 Z"
        fill="url(#tusd-arrow4)"
      />
    </g>

    {/* Central coin */}
    <g>
      {/* Coin body with 3D effect */}
      <ellipse
        cx="200"
        cy="210"
        rx="50"
        ry="8"
        fill="url(#tusd-shadow)"
        opacity="0.3"
      />
      <circle
        cx="200"
        cy="200"
        r="50"
        fill="url(#tusd-coin-bg)"
        stroke="url(#tusd-coin-border)"
        strokeWidth="3"
      />
      <circle
        cx="200"
        cy="200"
        r="42"
        fill="none"
        stroke="url(#tusd-coin-inner)"
        strokeWidth="2"
        opacity="0.4"
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

      {/* Shine effect */}
      <circle cx="175" cy="180" r="15" fill="url(#tusd-shine)" opacity="0.5" />
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

    {/* Sparkles */}
    <g opacity="0.8">
      <circle cx="130" cy="120" r="3" fill="#fbbf24" />
      <circle cx="270" cy="120" r="3" fill="#f87171" />
      <circle cx="280" cy="240" r="3" fill="#d946ef" />
      <circle cx="120" cy="240" r="3" fill="#fbbf24" />
      <circle cx="150" cy="170" r="2" fill="#f87171" />
      <circle cx="250" cy="230" r="2" fill="#d946ef" />
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
      <radialGradient id="tusd-coin-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#f87171" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.25" />
      </radialGradient>
      <linearGradient id="tusd-coin-border" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="33%" stopColor="#f87171" />
        <stop offset="66%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#fbbf24" />
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
