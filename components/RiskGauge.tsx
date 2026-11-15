"use client";

import React from "react";

interface RiskGaugeProps {
  score: number; // 0.0 to 1.0
  threshold?: number; // Default 0.2939
  label?: string;
  showDetails?: boolean;
  compact?: boolean;
  className?: string;
}

export const RiskGauge: React.FC<RiskGaugeProps> = ({
  score,
  threshold = 0.2939,
  label = "LightGBM Fraud Risk Score",
  showDetails = true,
  compact = false,
  className = "",
}) => {
  // Clamp score between 0 and 1
  const clampedScore = Math.max(0, Math.min(1, score));
  const scorePercentage = (clampedScore * 100).toFixed(1);
  const thresholdPercentage = (threshold * 100).toFixed(2);
  const isAboveThreshold = clampedScore >= threshold;

  // Determine score color theme
  const getScoreColor = () => {
    if (clampedScore < threshold) return "text-[#065F46] dark:text-[#34D399]";
    if (clampedScore < 0.65) return "text-[#854D0E] dark:text-[#FBBF24]";
    return "text-[#9C2A1B] dark:text-[#F87171]";
  };

  const getScoreBg = () => {
    if (clampedScore < threshold) return "bg-[#10B981]";
    if (clampedScore < 0.65) return "bg-[#EAB308]";
    return "bg-[#DC2626]";
  };

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      {!compact && (
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-navy-900 dark:text-white">{label}</span>
            <span
              className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                isAboveThreshold
                  ? "bg-[#FDE8E4] dark:bg-[#7F1D1D]/40 text-[#9C2A1B] dark:text-[#F87171] border border-[#FCA5A5] dark:border-[#991B1B]"
                  : "bg-[#E6F7F0] dark:bg-[#064E3B]/40 text-[#065F46] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#065F46]"
              }`}
            >
              {isAboveThreshold ? "Above Threshold" : "Normal / Cleared"}
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-base font-bold font-mono ${getScoreColor()}`}>
              {clampedScore.toFixed(4)}
            </span>
            <span className="text-gray-400 dark:text-slate-500 text-[11px]">/ 1.0000</span>
          </div>
        </div>
      )}

      {/* Main Track Container */}
      <div className="relative pt-6 pb-5">
        {/* Threshold Callout Pin Above Track */}
        <div
          className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10 transition-all duration-300"
          style={{ left: `${thresholdPercentage}%` }}
        >
          <span className="bg-[#171C26] dark:bg-white text-white dark:text-[#171C26] text-[10px] font-mono font-medium px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
            Threshold: {threshold}
          </span>
          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[#171C26] dark:border-t-white" />
        </div>

        {/* Progress Bar Track */}
        <div className="relative h-3 w-full bg-slate-200/80 dark:bg-[#1E2738] rounded-full overflow-hidden p-0.5 shadow-inner">
          {/* Subtle colored background bands behind the fill */}
          <div
            className="absolute inset-0 flex rounded-full opacity-35"
            aria-hidden="true"
          >
            <div
              className="h-full bg-emerald-400"
              style={{ width: `${thresholdPercentage}%` }}
            />
            <div
              className="h-full bg-amber-400"
              style={{ width: `${(0.65 - threshold) * 100}%` }}
            />
            <div className="h-full bg-rose-500 flex-1" />
          </div>

          {/* Active Score Bar */}
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out shadow-sm ${getScoreBg()}`}
            style={{ width: `${scorePercentage}%` }}
          />
        </div>

        {/* Threshold Vertical Guideline Line Through Track */}
        <div
          className="absolute top-5 bottom-4 w-0.5 bg-[#171C26] dark:bg-white z-10 -translate-x-1/2 pointer-events-none opacity-80"
          style={{ left: `${thresholdPercentage}%` }}
        />

        {/* Min / Max & Zone Indicators Below Track */}
        {showDetails && (
          <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 pt-1 font-mono">
            <span>0.00 (Safe)</span>
            <span
              className="font-semibold text-navy-800 dark:text-slate-200 -translate-x-1/2"
              style={{
                position: "absolute",
                left: `${thresholdPercentage}%`,
              }}
            >
              ▲ Decision Cutoff (0.2939)
            </span>
            <span>1.00 (Critical)</span>
          </div>
        )}
      </div>

      {compact && (
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-600 dark:text-slate-400">
          <span>Score: {clampedScore.toFixed(4)}</span>
          <span
            className={
              isAboveThreshold
                ? "text-red-600 dark:text-red-400 font-semibold"
                : "text-emerald-700 dark:text-emerald-400 font-semibold"
            }
          >
            {isAboveThreshold ? "FLAGGED" : "CLEARED"}
          </span>
        </div>
      )}
    </div>
  );
};

export default RiskGauge;
