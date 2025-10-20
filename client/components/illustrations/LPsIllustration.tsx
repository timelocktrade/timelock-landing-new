export const LPsIllustration = () => (
  <svg width="160" height="160" viewBox="0 0 120 120" fill="none">
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
