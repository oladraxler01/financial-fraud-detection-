import React from "react";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
  badge?: string;
  badgeType?: "mint" | "yellow" | "terracotta" | "grey";
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  change,
  trend = "neutral",
  changeType = "neutral",
  icon,
  badge,
  badgeType = "grey",
  className = "",
}) => {
  const getBadgeColors = (type: string) => {
    switch (type) {
      case "mint":
        return "bg-[#E6F7F0] dark:bg-[#064E3B]/40 text-[#065F46] dark:text-[#34D399] border-[#A7F3D0] dark:border-[#065F46]";
      case "yellow":
        return "bg-[#FEF9C3] dark:bg-[#78350F]/40 text-[#854D0E] dark:text-[#FBBF24] border-[#FDE047] dark:border-[#854D0E]";
      case "terracotta":
        return "bg-[#FDE8E4] dark:bg-[#7F1D1D]/40 text-[#9C2A1B] dark:text-[#F87171] border-[#FCA5A5] dark:border-[#991B1B]";
      default:
        return "bg-[#F1F5F9] dark:bg-[#1E293B] text-[#475569] dark:text-[#94A3B8] border-[#CBD5E1] dark:border-[#334155]";
    }
  };

  const getTrendColor = () => {
    if (trend === "neutral" || !change) return "text-slate-500 dark:text-slate-400";
    if (changeType === "positive") {
      return trend === "up"
        ? "text-emerald-700 dark:text-[#34D399] bg-emerald-50 dark:bg-emerald-950/40"
        : "text-rose-700 dark:text-[#F87171] bg-rose-50 dark:bg-rose-950/40";
    }
    if (changeType === "negative") {
      return trend === "up"
        ? "text-rose-700 dark:text-[#F87171] bg-rose-50 dark:bg-rose-950/40"
        : "text-emerald-700 dark:text-[#34D399] bg-emerald-50 dark:bg-emerald-950/40";
    }
    return "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800";
  };

  return (
    <div
      className={`bg-white/95 dark:bg-[#131824] backdrop-blur-sm rounded-2xl p-5 border border-slate-200/80 dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] hover:shadow-diffuse-lg transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
          {title}
        </span>
        {icon && (
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1A2234] text-navy-800 dark:text-slate-200 border border-slate-100 dark:border-[#263147] shrink-0">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-2">
        <div className="text-2xl lg:text-3xl font-bold font-mono tracking-tight text-[#171C26] dark:text-white tabular-nums">
          {value}
        </div>
        {badge && (
          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getBadgeColors(
              badgeType
            )}`}
          >
            {badge}
          </span>
        )}
      </div>

      {(change || subtitle) && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-[#1F2739] flex items-center justify-between text-xs">
          {change ? (
            <div className={`inline-flex items-center gap-1 font-medium px-1.5 py-0.5 rounded-md ${getTrendColor()}`}>
              {trend === "up" && <ArrowUpRight className="w-3.5 h-3.5" />}
              {trend === "down" && <ArrowDownRight className="w-3.5 h-3.5" />}
              {trend === "neutral" && <Minus className="w-3.5 h-3.5" />}
              <span>{change}</span>
            </div>
          ) : (
            <span />
          )}
          {subtitle && (
            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-normal truncate">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
