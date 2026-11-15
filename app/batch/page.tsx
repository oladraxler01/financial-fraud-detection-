"use client";

import React, { useState } from "react";
import { ArrowUp, FileText, Download } from "lucide-react";

interface BatchTransaction {
  id: string;
  amount: string;
  date: string;
  merchant: string;
  riskBand: "High" | "Moderate" | "Low";
  decision: "Flag for review" | "Manual verification" | "Approved";
}

const batchTransactions: BatchTransaction[] = [
  {
    id: "TXN-905021",
    amount: "$12,890.00",
    date: "22 May 2025, 14:38",
    merchant: "Asteria Electronics",
    riskBand: "High",
    decision: "Flag for review",
  },
  {
    id: "TXN-905020",
    amount: "$286.40",
    date: "22 May 2025, 14:37",
    merchant: "Northline Market",
    riskBand: "Low",
    decision: "Approved",
  },
  {
    id: "TXN-905019",
    amount: "$4,275.50",
    date: "22 May 2025, 14:36",
    merchant: "Atlas Travel Group",
    riskBand: "Moderate",
    decision: "Manual verification",
  },
  {
    id: "TXN-905018",
    amount: "$8,240.50",
    date: "22 May 2025, 14:35",
    merchant: "Nordstar Digital",
    riskBand: "High",
    decision: "Flag for review",
  },
  {
    id: "TXN-905017",
    amount: "$94.20",
    date: "22 May 2025, 14:34",
    merchant: "Lumen Marketplace",
    riskBand: "Low",
    decision: "Approved",
  },
];

export default function BatchScreeningPage() {
  const [fileName, setFileName] = useState("transactions_may_22.csv");

  const handleDownload = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["TRANSACTION ID,AMOUNT,DATE,MERCHANT,RISK BAND,DECISION"]
        .concat(
          batchTransactions.map(
            (t) =>
              `${t.id},"${t.amount}","${t.date}","${t.merchant}","${t.riskBand}","${t.decision}"`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div>
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-1">
          Batch Operations
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171C26] dark:text-white">
          Batch Screening
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Upload and score multiple transactions in a single batch.
        </p>
      </div>

      {/* Top 2 Cards: CSV Upload (Left) & Processing Summary (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* TOP LEFT (6 cols): CSV Upload Card */}
        <div className="lg:col-span-6 bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-[#171C26] dark:text-white">CSV Upload</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] text-[11px] font-semibold">
                CSV only
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
              Upload transaction records for batch scoring.
            </p>

            {/* Drag & Drop Upload Zone */}
            <div className="border-2 border-dashed border-[#EFEBF6] dark:border-[#263148] rounded-2xl p-6 sm:p-8 text-center bg-[#FDFCFE] dark:bg-[#101520] flex flex-col items-center justify-center">
              {/* White rounded square with arrow icon */}
              <div className="w-11 h-11 rounded-2xl bg-white dark:bg-[#182030] shadow-sm border border-[#F0EDF7] dark:border-[#2A344A] flex items-center justify-center text-slate-700 dark:text-slate-300 mb-3">
                <ArrowUp className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </div>

              <div className="text-xs font-bold text-[#171C26] dark:text-white">
                Drag and drop transaction CSV here
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                or <span className="font-semibold text-slate-700 dark:text-slate-300 cursor-pointer hover:underline">browse your computer</span> • Maximum file size 25 MB
              </div>

              {/* Uploaded File Pill */}
              <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#182030] border border-[#EFEBF6] dark:border-[#263148] shadow-sm text-xs font-medium text-slate-700 dark:text-slate-200">
                <FileText className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span className="font-mono text-[11px]">{fileName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* TOP RIGHT (6 cols): Processing Summary Card */}
        <div className="lg:col-span-6 bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-[#171C26] dark:text-white">
                Processing Summary
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F06E4A] dark:bg-[#F87171]" />
                <span>Complete</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">
              Latest batch scoring results
            </p>

            {/* 3-Part Layout: Total Rows, High-Risk Count, and Donut Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Stat 1: Total Rows Processed (3 cols) */}
              <div className="sm:col-span-3">
                <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  Total Rows Processed
                </div>
                <div className="text-3xl font-extrabold text-[#171C26] dark:text-white tabular-nums mt-1">
                  2,480
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                  100% successfully scored
                </div>
              </div>

              {/* Stat 2: High-Risk Count (3 cols) */}
              <div className="sm:col-span-3">
                <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  High-Risk Count
                </div>
                <div className="text-3xl font-extrabold text-[#171C26] dark:text-white tabular-nums mt-1">
                  184
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                  7.42% of total rows
                </div>
              </div>

              {/* Stat 3: Donut Chart & Legend (6 cols) */}
              <div className="sm:col-span-6 flex items-center gap-4 justify-start sm:justify-end">
                {/* SVG Donut Ring */}
                <div className="relative w-28 h-28 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* Background Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#F4F1FA] dark:text-[#1E273A]"
                      strokeWidth="12"
                    />
                    {/* Low Risk Segment (Purple ~70%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#8568E8"
                      strokeWidth="12"
                      strokeDasharray="167 238"
                      strokeDashoffset="0"
                    />
                    {/* Moderate Risk Segment (Yellow/Peach ~22.6%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#F5BF75"
                      strokeWidth="12"
                      strokeDasharray="54 238"
                      strokeDashoffset="-167"
                    />
                    {/* High Risk Segment (Coral/Orange ~7.4%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#F06E4A"
                      strokeWidth="12"
                      strokeDasharray="17 238"
                      strokeDashoffset="-221"
                    />
                  </svg>

                  {/* Centered Total inside Donut */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xs font-extrabold text-[#171C26] dark:text-white tabular-nums">
                      2,480
                    </span>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500">Total</span>
                  </div>
                </div>

                {/* Donut Legend */}
                <div className="text-xs space-y-1">
                  <div className="font-bold text-[#171C26] dark:text-white text-[11px] mb-1">
                    Risk Breakdown
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[#8568E8]" />
                    <span className="text-[11px]">Low</span>
                    <span className="font-bold text-[#171C26] dark:text-white tabular-nums ml-auto pl-2">
                      1,734
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[#F5BF75]" />
                    <span className="text-[11px]">Moderate</span>
                    <span className="font-bold text-[#171C26] dark:text-white tabular-nums ml-auto pl-2">
                      562
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[#F06E4A]" />
                    <span className="text-[11px]">High</span>
                    <span className="font-bold text-[#171C26] dark:text-white tabular-nums ml-auto pl-2">
                      184
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CARD: Data Preview Full-width Table */}
      <div className="bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)]">
        {/* Header with Title and Download Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-[#F0EDF7] dark:border-[#1F2739]">
          <div>
            <h2 className="text-base font-bold text-[#171C26] dark:text-white">Data Preview</h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              Scored transactions from {fileName}
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#171C26] hover:bg-slate-800 dark:bg-[#7C5CFC] dark:hover:bg-[#6847F0] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CSV Results</span>
          </button>
        </div>

        {/* Full-width Table */}
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-[#F0EDF7] dark:border-[#1F2739]">
                <th className="py-3.5 px-4">TRANSACTION ID</th>
                <th className="py-3.5 px-4">AMOUNT</th>
                <th className="py-3.5 px-4">DATE</th>
                <th className="py-3.5 px-4">MERCHANT</th>
                <th className="py-3.5 px-4 text-center">RISK BAND</th>
                <th className="py-3.5 px-4">DECISION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F8F6FD] dark:divide-[#1F2739] text-xs">
              {batchTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-[#FDFCFE] dark:hover:bg-[#182030] transition-colors"
                >
                  <td className="py-4 px-4 font-bold text-[#171C26] dark:text-white font-mono">
                    {tx.id}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#171C26] dark:text-white tabular-nums">
                    {tx.amount}
                  </td>
                  <td className="py-4 px-4 text-slate-500 dark:text-slate-400 text-[11px]">
                    {tx.date}
                  </td>
                  <td className="py-4 px-4 text-[#171C26] dark:text-slate-200 font-medium">
                    {tx.merchant}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                        tx.riskBand === "High"
                          ? "bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171]"
                          : tx.riskBand === "Moderate"
                          ? "bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA]"
                          : "bg-[#F1F5F9] dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {tx.riskBand}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300 font-medium text-xs">
                    {tx.decision}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
