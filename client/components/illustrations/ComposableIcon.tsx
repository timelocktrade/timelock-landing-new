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
