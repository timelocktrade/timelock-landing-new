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
