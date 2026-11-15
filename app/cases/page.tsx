"use client";

import React, { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface CaseQueueItem {
  id: string;
  txId: string;
  amount: string;
  time: string;
  riskScore: string;
  riskBand: "High Risk" | "Moderate";
  merchant: string;
  location: string;
  notes: string;
}

const mockCases: CaseQueueItem[] = [
  {
    id: "case-1",
    txId: "TXN-904183",
    amount: "$12,890.00",
    time: "Today, 14:38",
    riskScore: "98.2%",
    riskBand: "High Risk",
    merchant: "Asteria Electronics",
    location: "Estonia",
    notes:
      "Customer purchase pattern differs significantly from the current transaction. Verify device ownership and merchant fulfillment before clearing.",
  },
  {
    id: "case-2",
    txId: "TXN-904177",
    amount: "$8,240.50",
    time: "Today, 14:26",
    riskScore: "94.7%",
    riskBand: "High Risk",
    merchant: "Nordstar Digital",
    location: "United States",
    notes:
      "High-velocity international charge attempt from unrecognized mobile client. Cardholder contacted via SMS push verification.",
  },
  {
    id: "case-3",
    txId: "TXN-904162",
    amount: "$6,710.25",
    time: "Today, 14:08",
    riskScore: "91.3%",
    riskBand: "High Risk",
    merchant: "Chrono Luxury Zurich",
    location: "Switzerland",
    notes:
      "Multiple card attempts within 10 minutes. Billing address mismatch with shipping courier destination.",
  },
  {
    id: "case-4",
    txId: "TXN-904128",
    amount: "$4,950.00",
    time: "Today, 13:52",
    riskScore: "68.9%",
    riskBand: "Moderate",
    merchant: "Atlas Travel Group",
    location: "United Kingdom",
    notes:
      "Cross-border airline booking flagged due to proximate flight departure time and new browser session token.",
  },
];

export default function CaseReviewPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("case-1");
  const [dateFilter, setDateFilter] = useState("Today");
  const [riskFilter, setRiskFilter] = useState("All risk levels");
  const [merchantFilter, setMerchantFilter] = useState("All merchants");
  const [locationFilter, setLocationFilter] = useState("All locations");
  const [statusFilter, setStatusFilter] = useState("Open cases");
  const [caseStatus, setCaseStatus] = useState("Under Review");
  const [analystNotes, setAnalystNotes] = useState(mockCases[0].notes);

  const selectedCase =
    mockCases.find((c) => c.id === selectedCaseId) || mockCases[0];

  const handleSelectCase = (c: CaseQueueItem) => {
    setSelectedCaseId(c.id);
    setAnalystNotes(c.notes);
  };

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div>
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-1">
          Investigation Workflow
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171C26] dark:text-white">
          Case Review
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Investigate flagged transactions and document case decisions.
        </p>
      </div>

      {/* Top Filter Card: Filter flagged cases */}
      <div className="bg-white dark:bg-[#131824] rounded-3xl p-6 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#171C26] dark:text-white">
              Filter flagged cases
            </h2>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Narrow the investigation queue
            </p>
          </div>
        </div>

        {/* 5 Dropdown Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs w-full lg:w-auto">
          {/* Date Filter */}
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-1">
              Date
            </span>
            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs font-semibold text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 pr-8"
              >
                <option>Today</option>
                <option>Past 24h</option>
                <option>Past 7 days</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Risk Level Filter */}
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-1">
              Risk Level
            </span>
            <div className="relative">
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs font-semibold text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 pr-8"
              >
                <option>All risk levels</option>
                <option>High Risk (≥ 80%)</option>
                <option>Moderate (50-79%)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Merchant Filter */}
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-1">
              Merchant
            </span>
            <div className="relative">
              <select
                value={merchantFilter}
                onChange={(e) => setMerchantFilter(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs font-semibold text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 pr-8"
              >
                <option>All merchants</option>
                <option>Asteria Electronics</option>
                <option>Nordstar Digital</option>
                <option>Chrono Luxury</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-1">
              Location
            </span>
            <div className="relative">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs font-semibold text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 pr-8"
              >
                <option>All locations</option>
                <option>Estonia</option>
                <option>United States</option>
                <option>Switzerland</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-1">
              Status
            </span>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs font-semibold text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 pr-8"
              >
                <option>Open cases</option>
                <option>Under Review</option>
                <option>Resolved / Closed</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN (approx 5 cols): Flagged Queue */}
        <div className="lg:col-span-5 bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-[#171C26] dark:text-white">
                Flagged Queue
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] text-[11px] font-semibold">
                4 cases
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
              Transactions awaiting investigation
            </p>

            {/* List Table Headers */}
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider pb-2 border-b border-[#F0EDF7] dark:border-[#1F2739]">
              <span>TRANSACTION</span>
              <span>RISK SCORE</span>
            </div>

            {/* Queue List Items */}
            <div className="space-y-3 pt-3">
              {mockCases.map((c) => {
                const isSelected = c.id === selectedCaseId;

                return (
                  <div
                    key={c.id}
                    onClick={() => handleSelectCase(c)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-[#FFF5F0] via-[#FAF5FC] to-[#FDFCFE] dark:from-[#251A18]/60 dark:via-[#1E192E]/60 dark:to-[#161D2B] border border-[#F0EDF7] dark:border-[#283248] border-l-4 border-l-[#F06E4A] shadow-sm"
                        : "bg-white dark:bg-[#151C2A] border border-[#F0EDF7] dark:border-[#222A3A] hover:bg-slate-50/70 dark:hover:bg-[#192336]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#171C26] dark:text-white tabular-nums">
                          {c.amount}
                        </div>
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                          {c.txId} • {c.time}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs font-bold text-[#171C26] dark:text-white tabular-nums">
                            {c.riskScore}
                          </div>
                          <span
                            className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5 ${
                              c.riskBand === "High Risk"
                                ? "bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171]"
                                : "bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA]"
                            }`}
                          >
                            {c.riskBand}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-colors ${
                            isSelected ? "text-[#F06E4A]" : "text-slate-300 dark:text-slate-600"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (approx 7 cols): Investigation Workflow */}
        <div className="lg:col-span-7 bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Header with Title, Selected Case, and Reviewer ID badge */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EDF7] dark:border-[#1F2739]">
              <div>
                <h2 className="text-base font-bold text-[#171C26] dark:text-white">
                  Investigation Workflow
                </h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-mono">
                  {selectedCase.txId} • Selected case
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] font-mono text-[11px] font-semibold">
                Reviewer ID: AM-204
              </span>
            </div>

            {/* 4-Tile Transaction Summary Bar */}
            <div className="bg-[#FDFCFE] dark:bg-[#101520] border border-[#F0EDF7] dark:border-[#253043] rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  Amount
                </span>
                <span className="font-bold text-xs text-[#171C26] dark:text-white tabular-nums mt-0.5 block">
                  {selectedCase.amount}
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  Merchant
                </span>
                <span className="font-semibold text-xs text-[#171C26] dark:text-white mt-0.5 block truncate">
                  {selectedCase.merchant}
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  Location
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 block truncate">
                  {selectedCase.location}
                </span>
              </div>

              <div>
                <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  Risk Score
                </span>
                <span className="font-bold text-xs text-[#F06E4A] dark:text-[#F87171] tabular-nums mt-0.5 block">
                  {selectedCase.riskScore}
                </span>
              </div>
            </div>

            {/* Case Status Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Case Status
              </label>
              <div className="relative">
                <select
                  value={caseStatus}
                  onChange={(e) => setCaseStatus(e.target.value)}
                  className="w-full appearance-none px-4 py-3 rounded-2xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs font-semibold text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                >
                  <option>Under Review</option>
                  <option>Escalated to Compliance</option>
                  <option>Cleared / Approved</option>
                  <option>Confirmed Fraud / Blocked</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Analyst Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Analyst Notes
              </label>
              <textarea
                rows={4}
                value={analystNotes}
                onChange={(e) => setAnalystNotes(e.target.value)}
                className="w-full p-4 rounded-2xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 resize-none font-normal"
              />
            </div>
          </div>

          {/* Bottom Right Save Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={() => {
                alert(`Case updates for ${selectedCase.txId} saved successfully.`);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#F06E4A] hover:bg-[#E05E3A] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>Save Case Updates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
