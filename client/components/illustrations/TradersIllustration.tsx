// Vibrant multi-color illustrations with magenta color schemes
export const TradersIllustration = () => (
  <svg width="160" height="160" viewBox="0 0 120 120" fill="none">
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
