import React from "react";

export default function MouseScroll({ href = "#", className = "", style = {}, ariaLabel = "Scroll down" }) {
  return (
    <a href={href} aria-label={ariaLabel} className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${className}`} style={style}>
      <div className="mouse">
        <div className="scroll-wheel"></div>
      </div>
    </a>
  );
}
