const CatSVG = ({ size = 200, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="catGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#ff9a56", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#ff6b35", stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="bellyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#fff4e6", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#ffe4b3", stopOpacity:1}} />
        </linearGradient>
      </defs>

      {/* Cat Body */}
      <ellipse cx="100" cy="130" rx="50" ry="45" fill="url(#catGradient)" />

      {/* Cat Head */}
      <ellipse cx="100" cy="80" rx="40" ry="35" fill="url(#catGradient)" />

      {/* Cat Ears */}
      <polygon points="75,55 85,35 95,55" fill="url(#catGradient)" />
      <polygon points="105,55 115,35 125,55" fill="url(#catGradient)" />

      {/* Inner Ears */}
      <polygon points="77,52 83,42 89,52" fill="#ff3366" />
      <polygon points="111,52 117,42 123,52" fill="#ff3366" />

      {/* Cat Belly */}
      <ellipse cx="100" cy="140" rx="25" ry="30" fill="url(#bellyGradient)" />

      {/* Cat Eyes */}
      <ellipse cx="90" cy="75" rx="8" ry="12" fill="#000" />
      <ellipse cx="110" cy="75" rx="8" ry="12" fill="#000" />

      {/* Eye Highlights */}
      <ellipse cx="88" cy="72" rx="3" ry="4" fill="#fff" />
      <ellipse cx="108" cy="72" rx="3" ry="4" fill="#fff" />

      {/* Cat Nose */}
      <polygon points="100,85 95,90 105,90" fill="#ff3366" />

      {/* Cat Mouth */}
      <path d="M 100 92 Q 95 95 90 92" stroke="#000" strokeWidth="2" fill="none" />
      <path d="M 100 92 Q 105 95 110 92" stroke="#000" strokeWidth="2" fill="none" />

      {/* Whiskers */}
      <line x1="65" y1="80" x2="85" y2="82" stroke="#000" strokeWidth="2" />
      <line x1="65" y1="85" x2="85" y2="85" stroke="#000" strokeWidth="2" />
      <line x1="115" y1="82" x2="135" y2="80" stroke="#000" strokeWidth="2" />
      <line x1="115" y1="85" x2="135" y2="85" stroke="#000" strokeWidth="2" />

      {/* Cat Tail */}
      <path d="M 140 120 Q 160 100 170 80 Q 175 70 165 65 Q 155 75 150 100 Q 145 115 140 120"
            fill="url(#catGradient)" />

      {/* Cat Paws */}
      <ellipse cx="80" cy="170" rx="12" ry="8" fill="url(#catGradient)" />
      <ellipse cx="120" cy="170" rx="12" ry="8" fill="url(#catGradient)" />

      {/* Paw Pads */}
      <ellipse cx="80" cy="172" rx="6" ry="4" fill="#ff3366" />
      <ellipse cx="120" cy="172" rx="6" ry="4" fill="#ff3366" />
    </svg>
  );
};

export default CatSVG;