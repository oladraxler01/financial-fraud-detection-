"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  ShieldCheck,
  Clock,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<"7" | "30" | "90">("7");

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div>
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-1">
          Overview
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171C26] dark:text-white">
          Dashboard
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Monitor transaction risk and investigate suspicious activity.
        </p>
      </div>

      {/* 2-Column Main Layout: Left Main (8 cols) & Right Column Alerts (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols): Top Metrics + Fraud-Risk Distribution Chart */}
        <div className="lg:col-span-8 space-y-6">
          {/* Top 3 KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Card 1: Total Transactions Assessed */}
            <div className="relative bg-white dark:bg-[#131824] rounded-3xl p-6 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] overflow-hidden">
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FFF5F0] dark:from-[#F06E4A]/10 to-transparent rounded-bl-full pointer-events-none opacity-80"
                aria-hidden="true"
              />
              <div className="w-10 h-10 rounded-2xl bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] flex items-center justify-center mb-4">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1">
                Total Transactions Assessed
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#171C26] dark:text-white tracking-tight tabular-nums">
                2,847,913
              </div>
              <div className="mt-3 text-xs font-semibold text-[#10B981] flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+12.5% from last month</span>
              </div>
            </div>

            {/* Card 2: High Risk (%) */}
            <div className="relative bg-white dark:bg-[#131824] rounded-3xl p-6 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] overflow-hidden">
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F4F0FD] dark:from-[#8568E8]/10 to-transparent rounded-bl-full pointer-events-none opacity-80"
                aria-hidden="true"
              />
              <div className="w-10 h-10 rounded-2xl bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1">
                High Risk (%)
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#171C26] dark:text-white tracking-tight tabular-nums">
                3.42%
              </div>
              <div className="mt-3 text-xs text-slate-400 dark:text-slate-500">
                97,399 transactions
              </div>
            </div>

            {/* Card 3: Pending Review */}
            <div className="relative bg-white dark:bg-[#131824] rounded-3xl p-6 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] overflow-hidden">
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FFFBF0] dark:from-[#D99414]/10 to-transparent rounded-bl-full pointer-events-none opacity-80"
                aria-hidden="true"
              />
              <div className="w-10 h-10 rounded-2xl bg-[#FEF7E6] dark:bg-[#D99414]/20 text-[#D99414] dark:text-[#FBBF24] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1">
                Pending Review
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#171C26] dark:text-white tracking-tight tabular-nums">
                248
              </div>
              <div className="mt-3 text-xs text-slate-400 dark:text-slate-500">
                36 require priority review
              </div>
            </div>
          </div>

          {/* Fraud-Risk Distribution Chart Card */}
          <div className="bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)]">
            {/* Header with Title, Subtitle, and Time Range Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
              <div>
                <h2 className="text-lg font-bold text-[#171C26] dark:text-white">
                  Fraud-Risk Distribution
                </h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  Transaction volume categorized by risk level
                </p>
              </div>

              {/* Time Range Toggle: 7 days | 30 days | 90 days */}
              <div className="inline-flex items-center bg-[#F4F1FA] dark:bg-[#1C2436] p-1 rounded-2xl text-xs font-semibold text-slate-500 dark:text-slate-400">
                <button
                  type="button"
                  onClick={() => setTimeRange("7")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${timeRange === "7"
                      ? "bg-white dark:bg-[#2A344C] text-[#171C26] dark:text-white shadow-sm"
                      : "hover:text-[#171C26] dark:hover:text-white"
                    }`}
                >
                  7 days
                </button>
                <button
                  type="button"
                  onClick={() => setTimeRange("30")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${timeRange === "30"
                      ? "bg-white dark:bg-[#2A344C] text-[#171C26] dark:text-white shadow-sm"
                      : "hover:text-[#171C26] dark:hover:text-white"
                    }`}
                >
                  30 days
                </button>
                <button
                  type="button"
                  onClick={() => setTimeRange("90")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${timeRange === "90"
                      ? "bg-white dark:bg-[#2A344C] text-[#171C26] dark:text-white shadow-sm"
                      : "hover:text-[#171C26] dark:hover:text-white"
                    }`}
                >
                  90 days
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-5 text-xs text-slate-500 dark:text-slate-400 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F06E4A]" />
                <span className="font-medium text-[#171C26] dark:text-slate-200">High risk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8568E8]" />
                <span className="font-medium text-[#171C26] dark:text-slate-200">Medium risk</span>
              </div>
            </div>

            {/* Chart Area: High-Fidelity Smooth SVG Spline Chart */}
            <div className="relative w-full h-64 mt-2 overflow-x-auto">
              <svg
                viewBox="0 0 700 240"
                className="w-full h-full min-w-[500px] overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="highRiskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F06E4A" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#F06E4A" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="medRiskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8568E8" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#8568E8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Y-Axis dashed grid lines & labels */}
                {[
                  { label: "50%", y: 20 },
                  { label: "40%", y: 60 },
                  { label: "30%", y: 100 },
                  { label: "20%", y: 140 },
                  { label: "10%", y: 180 },
                  { label: "0%", y: 220 },
                ].map((item, idx) => (
                  <g key={idx}>
                    <text
                      x="5"
                      y={item.y + 4}
                      fill="#94A3B8"
                      fontSize="10"
                      fontFamily="sans-serif"
                    >
                      {item.label}
                    </text>
                    <line
                      x1="35"
                      y1={item.y}
                      x2="690"
                      y2={item.y}
                      stroke="currentColor"
                      className="text-slate-200 dark:text-[#253047]"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                  </g>
                ))}

                {/* X-Axis Days Labels */}
                {[
                  { day: "Mon", x: 45 },
                  { day: "Tue", x: 150 },
                  { day: "Wed", x: 255 },
                  { day: "Thu", x: 360 },
                  { day: "Fri", x: 465 },
                  { day: "Sat", x: 570 },
                  { day: "Sun", x: 675 },
                ].map((item, idx) => (
                  <text
                    key={idx}
                    x={item.x}
                    y="238"
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="11"
                    fontFamily="sans-serif"
                  >
                    {item.day}
                  </text>
                ))}

                {/* High Risk Area Fill */}
                <path
                  d="M 45 195 
                     C 100 175, 120 185, 150 175 
                     C 190 160, 220 190, 255 180 
                     C 300 165, 330 145, 360 140 
                     C 400 135, 430 165, 465 155 
                     C 510 140, 540 100, 570 105 
                     C 610 110, 640 120, 675 80 
                     L 675 220 L 45 220 Z"
                  fill="url(#highRiskGrad)"
                />

                {/* Medium Risk Area Fill */}
                <path
                  d="M 45 205 
                     C 100 195, 120 200, 150 190 
                     C 190 180, 220 205, 255 195 
                     C 300 185, 330 170, 360 165 
                     C 400 160, 430 185, 465 175 
                     C 510 165, 540 135, 570 140 
                     C 610 145, 640 155, 675 120 
                     L 675 220 L 45 220 Z"
                  fill="url(#medRiskGrad)"
                />

                {/* Medium Risk Spline Line (Purple) */}
                <path
                  d="M 45 205 
                     C 100 195, 120 200, 150 190 
                     C 190 180, 220 205, 255 195 
                     C 300 185, 330 170, 360 165 
                     C 400 160, 430 185, 465 175 
                     C 510 165, 540 135, 570 140 
                     C 610 145, 640 155, 675 120"
                  fill="none"
                  stroke="#8568E8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* High Risk Spline Line (Orange) */}
                <path
                  d="M 45 195 
                     C 100 175, 120 185, 150 175 
                     C 190 160, 220 190, 255 180 
                     C 300 165, 330 145, 360 140 
                     C 400 135, 430 165, 465 155 
                     C 510 140, 540 100, 570 105 
                     C 610 110, 640 120, 675 80"
                  fill="none"
                  stroke="#F06E4A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Saturday Peak Dot on High-Risk line */}
                <circle cx="570" cy="105" r="5" fill="#FFFFFF" stroke="#F06E4A" strokeWidth="3" />
              </svg>
            </div>

            {/* Bottom Indicators & Link */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 mt-4 border-t border-[#F0EDF7] dark:border-[#1F2739]">
              <div className="flex items-center gap-8">
                {/* Peak high risk */}
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-[#F06E4A] rounded-full shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500">Peak high risk</div>
                    <div className="text-base font-bold text-[#171C26] dark:text-white tabular-nums">
                      48.2%
                    </div>
                  </div>
                </div>

                {/* Average medium risk */}
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-[#8568E8] rounded-full shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500">Average medium risk</div>
                    <div className="text-base font-bold text-[#171C26] dark:text-white tabular-nums">
                      24.6%
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/audit"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6345DB] dark:text-[#A78BFA] hover:text-[#5034C0] transition-colors"
              >
                <span>View detailed report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Recent High-Risk Alerts Card */}
        <div className="lg:col-span-4 bg-white dark:bg-[#131824] rounded-3xl p-6 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div>
            {/* Header with Title and Count Pill 4 */}
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-[#171C26] dark:text-white">
                Recent High-Risk Alerts
              </h2>
              <span className="w-6 h-6 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-xs font-bold flex items-center justify-center">
                4
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
              Transactions requiring attention
            </p>

            {/* List of 4 High-Risk Alert Cards */}
            <div className="space-y-3">
              {/* Alert 1 */}
              <Link
                href="/assess"
                className="block p-3.5 rounded-2xl bg-white dark:bg-[#182030] border border-[#F0EDF7] dark:border-[#253047] border-l-4 border-l-[#F06E4A] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#171C26] dark:text-white tabular-nums">
                      $12,890.00
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                      TXN-904183
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-semibold">
                      88% risk
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      Card not present
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      New device
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>2 min ago</span>
                  </div>
                </div>
              </Link>

              {/* Alert 2 */}
              <Link
                href="/assess"
                className="block p-3.5 rounded-2xl bg-white dark:bg-[#182030] border border-[#F0EDF7] dark:border-[#253047] border-l-4 border-l-[#F06E4A] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#171C26] dark:text-white tabular-nums">
                      $8,240.50
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                      TXN-904177
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-semibold">
                      84% risk
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      Card not present
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      New device
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>14 min ago</span>
                  </div>
                </div>
              </Link>

              {/* Alert 3 */}
              <Link
                href="/assess"
                className="block p-3.5 rounded-2xl bg-white dark:bg-[#182030] border border-[#F0EDF7] dark:border-[#253047] border-l-4 border-l-[#F06E4A] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#171C26] dark:text-white tabular-nums">
                      $6,710.25
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                      TXN-904162
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-semibold">
                      91% risk
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      Card not present
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      New device
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>22 min ago</span>
                  </div>
                </div>
              </Link>

              {/* Alert 4 */}
              <Link
                href="/assess"
                className="block p-3.5 rounded-2xl bg-white dark:bg-[#182030] border border-[#F0EDF7] dark:border-[#253047] border-l-4 border-l-[#F06E4A] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#171C26] dark:text-white tabular-nums">
                      $4,950.00
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                      TXN-904128
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-semibold">
                      89% risk
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      Card not present
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F8F6FD] dark:bg-[#20293D] text-slate-600 dark:text-slate-300 font-medium">
                      New device
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>48 min ago</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* View all alerts link */}
            <div className="text-center mt-4">
              <Link
                href="/cases"
                className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#171C26] dark:hover:text-white transition-colors"
              >
                View all alerts →
              </Link>
            </div>
          </div>

          {/* Bottom Review Queue Mini-Card */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#FFF5F0] via-[#FAF5FC] to-[#F1EDFA] dark:from-[#211E30] dark:via-[#1B2030] dark:to-[#221D28] border border-[#F0EDF7] dark:border-[#2A344A] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#131824] flex items-center justify-center text-[#8568E8] dark:text-[#A78BFA] shadow-sm">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#171C26] dark:text-white">
                  Review queue
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  12 cases near SLA deadline
                </div>
              </div>
            </div>

            <Link
              href="/cases"
              className="px-4 py-1.5 rounded-xl bg-[#171C26] hover:bg-slate-800 dark:bg-[#7C5CFC] dark:hover:bg-[#6847F0] text-white text-xs font-semibold transition-colors shadow-sm"
            >
              Open
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
