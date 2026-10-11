import React from "react";

export default function UkFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      className={className}
      aria-label="English (ENG) Flag"
    >
      <clipPath id="uk-flag-round">
        <rect width="60" height="30" rx="3" />
      </clipPath>
      <clipPath id="uk-diag-clip">
        <path d="M30 15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-flag-round)">
        {/* Navy Blue Base */}
        <path d="M0 0 v30 h60 v-30 z" fill="#012169" />
        {/* White Diagonal Saltire */}
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#ffffff" strokeWidth="6" />
        {/* Red Diagonal Saltire (St. Patrick) */}
        <path d="M0 0 L60 30 M60 0 L0 30" clipPath="url(#uk-diag-clip)" stroke="#C8102E" strokeWidth="4" />
        {/* White Cross of St. George */}
        <path d="M30 0 v30 M0 15 h60" stroke="#ffffff" strokeWidth="10" />
        {/* Red Cross of St. George */}
        <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
