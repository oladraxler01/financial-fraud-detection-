import React from "react";

export const SentinelLogo: React.FC<{ className?: string }> = ({
  className = "w-8 h-8",
}) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 3 tilted rounded pills matching the Sentinel brand */}
      <rect
        x="6"
        y="16"
        width="6"
        height="15"
        rx="3"
        transform="rotate(-28 6 16)"
        fill="#F06E4A"
      />
      <rect
        x="15"
        y="11"
        width="6"
        height="19"
        rx="3"
        transform="rotate(-28 15 11)"
        fill="#8568E8"
      />
      <rect
        x="24"
        y="7"
        width="6"
        height="22"
        rx="3"
        transform="rotate(-28 24 7)"
        fill="#2A2150"
      />
    </svg>
  );
};

export default SentinelLogo;

