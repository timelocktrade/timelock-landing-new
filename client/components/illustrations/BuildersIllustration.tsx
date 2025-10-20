export const BuildersIllustration = () => (
  <svg width="160" height="160" viewBox="0 0 120 120" fill="none">
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
