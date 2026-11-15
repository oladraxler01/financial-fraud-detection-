import React from "react";

export type RiskStatus =
  | "low"
  | "normal"
  | "approved"
  | "medium"
  | "flagged"
  | "review"
  | "high"
  | "critical"
  | "blocked"
  | "neutral"
  | "pending";

interface StatusBadgeProps {
  status: RiskStatus | string;
  label?: string;
  size?: "sm" | "md" | "lg";
  showDot?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  size = "md",
  showDot = true,
  className = "",
}) => {
  const normalized = status.toLowerCase();

  let variantStyle = {
    bg: "bg-[#F1F5F9] dark:bg-[#1E293B]/60",
    text: "text-[#475569] dark:text-[#94A3B8]",
    border: "border-[#CBD5E1] dark:border-[#334155]",
    dot: "bg-[#94A3B8] dark:bg-[#64748B]",
    defaultText: label || "Neutral",
  };

  if (["low", "normal", "approved"].includes(normalized)) {
    variantStyle = {
      bg: "bg-[#E6F7F0] dark:bg-[#064E3B]/35",
      text: "text-[#065F46] dark:text-[#34D399]",
      border: "border-[#A7F3D0] dark:border-[#065F46]/70",
      dot: "bg-[#10B981] dark:bg-[#34D399]",
      defaultText: label || "Low Risk",
    };
  } else if (["medium", "flagged", "review", "warning"].includes(normalized)) {
    variantStyle = {
      bg: "bg-[#FEF9C3] dark:bg-[#78350F]/35",
      text: "text-[#854D0E] dark:text-[#FBBF24]",
      border: "border-[#FDE047] dark:border-[#854D0E]/70",
      dot: "bg-[#EAB308] dark:bg-[#FBBF24]",
      defaultText: label || "Medium Risk",
    };
  } else if (["high", "critical", "blocked", "fraud"].includes(normalized)) {
    variantStyle = {
      bg: "bg-[#FDE8E4] dark:bg-[#7F1D1D]/35",
      text: "text-[#9C2A1B] dark:text-[#F87171]",
      border: "border-[#FCA5A5] dark:border-[#991B1B]/70",
      dot: "bg-[#DC2626] dark:bg-[#F87171]",
      defaultText: label || "High Risk",
    };
  }

  const displayText = label || variantStyle.defaultText;

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-1.5 font-medium",
    lg: "text-sm px-3.5 py-1.5 gap-2 font-medium",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors ${variantStyle.bg} ${variantStyle.text} ${variantStyle.border} ${sizeClasses[size]} ${className}`}
    >
      {showDot && (
        <span
          className={`rounded-full shrink-0 ${variantStyle.dot} ${dotSizes[size]}`}
          aria-hidden="true"
        />
      )}
      <span className="tracking-wide">{displayText}</span>
    </span>
  );
};

export default StatusBadge;
