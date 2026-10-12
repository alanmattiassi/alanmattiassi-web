import React from "react";

export default function ItFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 40"
      className={className}
      aria-label="Bandiera Italiana (ITA)"
    >
      <clipPath id="it-flag-round">
        <rect width="60" height="40" rx="3" />
      </clipPath>
      <g clipPath="url(#it-flag-round)">
        {/* Verde */}
        <rect x="0" y="0" width="20" height="40" fill="#009246" />
        {/* Bianco */}
        <rect x="20" y="0" width="20" height="40" fill="#ffffff" />
        {/* Rosso */}
        <rect x="40" y="0" width="20" height="40" fill="#ce2b37" />
      </g>
    </svg>
  );
}
