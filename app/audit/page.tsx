"use client";

import React from "react";
import {
  ShieldCheck,
  TrendingUp,
  FileText,
  ArrowLeftRight,
  LayoutGrid,
} from "lucide-react";

interface AuditRecord {
  id: string;
  timestamp: string;
  modelVersion: string;
  featuresPresent: number;
  totalFeatures: number;
  fraudProbability: string;
  finalDecision: "Flag for review" | "Approved";
}

const auditRecords: AuditRecord[] = [
  {
    id: "rec-1",
    timestamp: "22 May 2025, 14:38:12",
    modelVersion: "v4.8.2",
    featuresPresent: 37,
    totalFeatures: 37,
    fraudProbability: "0.8241",
    finalDecision: "Flag for review",
  },
  {
    id: "rec-2",
    timestamp: "22 May 2025, 14:26:48",
    modelVersion: "v4.8.2",
    featuresPresent: 34,
    totalFeatures: 37,
    fraudProbability: "0.9473",
    finalDecision: "Flag for review",
  },
  {
    id: "rec-3",
    timestamp: "22 May 2025, 14:08:05",
    modelVersion: "v4.8.2",
    featuresPresent: 9,
    totalFeatures: 37,
    fraudProbability: "0.3136",
    finalDecision: "Flag for review",
  },
  {
    id: "rec-4",
    timestamp: "22 May 2025, 13:52:29",
    modelVersion: "v4.8.1",
    featuresPresent: 36,
    totalFeatures: 37,
    fraudProbability: "0.1894",
    finalDecision: "Approved",
  },
  {
    id: "rec-5",
    timestamp: "22 May 2025, 13:34:17",
    modelVersion: "v4.8.1",
    featuresPresent: 37,
    totalFeatures: 37,
    fraudProbability: "0.0842",
    finalDecision: "Approved",
  },
  {
    id: "rec-6",
    timestamp: "22 May 2025, 13:19:41",
    modelVersion: "v4.8.1",
    featuresPresent: 31,
    totalFeatures: 37,
    fraudProbability: "0.2951",
    finalDecision: "Flag for review",
  },
];

export default function ModelAuditPage() {
  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div>
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-1">
          Model Governance
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171C26] dark:text-white">
          Model Information and Audit
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Review production model specifications and historical scoring activity.
        </p>
      </div>

      {/* Top Card: Model Specifications */}
      <div className="bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] space-y-6">
        {/* Header with Title and Production Badge */}
        <div className="flex items-center justify-between pb-2">
          <div>
            <h2 className="text-base font-bold text-[#171C26] dark:text-white">
              Model Specifications
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              Current production model configuration and performance
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F06E4A]" />
            <span>Production</span>
          </span>
        </div>

        {/* 5 Horizontal Specification Metric Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-[#F0EDF7] dark:lg:divide-[#1F2739]">
          {/* Tile 1: Model Name */}
          <div className="flex items-center gap-3.5 lg:pr-5">
            <div className="w-10 h-10 rounded-2xl bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                Model Name
              </span>
              <span className="font-bold text-xs sm:text-[13px] text-[#171C26] dark:text-white mt-0.5 block truncate">
                LightGBM Fraud Classifier
              </span>
            </div>
          </div>

          {/* Tile 2: Risk Threshold */}
          <div className="flex items-center gap-3.5 lg:px-5">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                Risk Threshold
              </span>
              <span className="font-bold text-sm font-mono text-[#171C26] dark:text-white mt-0.5 block tabular-nums">
                0.2939
              </span>
            </div>
          </div>

          {/* Tile 3: Expected Features */}
          <div className="flex items-center gap-3.5 lg:px-5">
            <div className="w-10 h-10 rounded-2xl bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                Expected Features
              </span>
              <span className="font-bold text-sm font-mono text-[#171C26] dark:text-white mt-0.5 block tabular-nums">
                37
              </span>
            </div>
          </div>

          {/* Tile 4: Recall */}
          <div className="flex items-center gap-3.5 lg:px-5">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] flex items-center justify-center shrink-0">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                Recall
              </span>
              <span className="font-bold text-sm font-mono text-[#171C26] dark:text-white mt-0.5 block tabular-nums">
                99.96%
              </span>
            </div>
          </div>

          {/* Tile 5: ROC-AUC */}
          <div className="flex items-center gap-3.5 lg:pl-5">
            <div className="w-10 h-10 rounded-2xl bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                ROC-AUC
              </span>
              <span className="font-bold text-sm font-mono text-[#171C26] dark:text-white mt-0.5 block tabular-nums">
                0.5935
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Card: Audit Log */}
      <div className="bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] space-y-4">
        {/* Header with Title and Count Pill */}
        <div className="flex items-center justify-between pb-3 border-b border-[#F0EDF7] dark:border-[#1F2739]">
          <div>
            <h2 className="text-base font-bold text-[#171C26] dark:text-white">Audit Log</h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              Historical model scores and final decisions
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] text-[11px] font-semibold">
            6 records
          </span>
        </div>

        {/* Audit Log Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-[#F0EDF7] dark:border-[#1F2739]">
                <th className="py-3 px-4">TIMESTAMP</th>
                <th className="py-3 px-4 text-center">MODEL VERSION</th>
                <th className="py-3 px-4">INPUT COMPLETENESS</th>
                <th className="py-3 px-4 text-center">FRAUD PROBABILITY</th>
                <th className="py-3 px-4">FINAL DECISION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F8F6FD] dark:divide-[#1F2739] text-xs">
              {auditRecords.map((r) => {
                const percentage = Math.round(
                  (r.featuresPresent / r.totalFeatures) * 100
                );

                return (
                  <tr
                    key={r.id}
                    className="hover:bg-[#FDFCFE] dark:hover:bg-[#182030] transition-colors"
                  >
                    {/* Timestamp */}
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-300 font-medium">
                      {r.timestamp}
                    </td>

                    {/* Model Version Pill */}
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] font-mono text-[11px] font-semibold">
                        {r.modelVersion}
                      </span>
                    </td>

                    {/* Input Completeness with mini progress bar */}
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1.5 max-w-[140px]">
                        <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                          {r.featuresPresent} of {r.totalFeatures} features
                        </span>
                        {/* Mini progress bar track */}
                        <div className="w-full h-1 bg-[#F4F1FA] dark:bg-[#1E2738] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#F06E4A] rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Fraud Probability */}
                    <td className="py-4 px-4 text-center font-mono font-bold text-xs text-[#171C26] dark:text-white tabular-nums">
                      {r.fraudProbability}
                    </td>

                    {/* Final Decision Badge */}
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                          r.finalDecision === "Flag for review"
                            ? "bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171]"
                            : "bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            r.finalDecision === "Flag for review"
                              ? "bg-[#F06E4A] dark:bg-[#F87171]"
                              : "bg-[#8568E8] dark:bg-[#A78BFA]"
                          }`}
                        />
                        <span>{r.finalDecision}</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
