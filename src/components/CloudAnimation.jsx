import React from "react";

// Simple animated cloud SVG component
export default function CloudAnimation({ className = "", color = "#fff", opacity = 0.15, style = {} }) {
  return (
    <svg
      className={className}
      style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", ...style }}
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g style={{ animation: "cloudMove 40s linear infinite" }}>
        <path
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill={color}
          opacity={opacity}
        >
          <animateTransform attributeName="transform" type="translate" from="0 0" to="100 0" dur="40s" repeatCount="indefinite" />
        </path>
      </g>
      <style>{`
        @keyframes cloudMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
      `}</style>
    </svg>
  );
}
