"use client";

import React, { useState } from "react";
import {
  ArrowLeftRight,
  ShieldCheck,
  Calendar,
  ChevronDown,
  FileText,
} from "lucide-react";

export default function AssessTransactionPage() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("12,890.00");
  const [dateTime, setDateTime] = useState("22/05/2025 14:38");
  const [channel, setChannel] = useState("Online checkout");
  const [merchant, setMerchant] = useState("Asteria Electronics");
  const [category, setCategory] = useState("Electronics");
  const [customerRef, setCustomerRef] = useState("CUS-4829017");
  const [deviceAge, setDeviceAge] = useState("New");
  const [deviceLink, setDeviceLink] = useState("Unlinked");
  const [location, setLocation] = useState("Tallinn, Estonia");
  const [injectProfile, setInjectProfile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Values matching the Figma mockup
  const fraudProbability = 82.4;
  const riskScore = 0.8240;
  const threshold = 0.2939;

  const handleAssess = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div>
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-1">
          Transaction Screening
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171C26] dark:text-white">
          Assess Transaction
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Enter transaction details to generate an explainable fraud-risk score.
        </p>
      </div>

      {/* Two-Pane Main Layout: Left Form (6 cols) & Right Assessment Result (6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT PANE: Transaction details Form */}
        <div className="lg:col-span-6 bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] flex items-center justify-center shrink-0">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#171C26] dark:text-white">
                Transaction details
              </h2>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Provide the details available for this payment.
              </p>
            </div>
          </div>

          <form onSubmit={handleAssess} className="space-y-5 text-xs">
            {/* Row 1: Amount & Date/Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Transaction Amount
                </label>
                <div className="flex items-center rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] overflow-hidden focus-within:ring-2 focus-within:ring-[#7C5CFC]/30">
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F8F6FD] dark:bg-[#182030] border-r border-[#EFEBF6] dark:border-[#253043] text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <span>{currency}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs text-[#171C26] dark:text-white font-semibold focus:outline-none tabular-nums bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Date & Time
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Channel & Merchant Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Transaction Channel
                </label>
                <div className="relative">
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                  >
                    <option>Online checkout</option>
                    <option>In-store POS</option>
                    <option>Mobile App</option>
                    <option>Recurring Billing</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Merchant Name
                </label>
                <input
                  type="text"
                  value={merchant}
                  onChange={(e) => setMerchant(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                />
              </div>
            </div>

            {/* Row 3: Category & Customer Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Merchant Category
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                  >
                    <option>Electronics</option>
                    <option>Luxury Goods</option>
                    <option>Travel & Airlines</option>
                    <option>Digital Services</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Customer Reference
                </label>
                <input
                  type="text"
                  value={customerRef}
                  onChange={(e) => setCustomerRef(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 font-mono"
                />
              </div>
            </div>

            {/* Row 4: Device Status (Dual Dropdown) & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Device Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <select
                      value={deviceAge}
                      onChange={(e) => setDeviceAge(e.target.value)}
                      className="w-full appearance-none px-3 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                    >
                      <option>New</option>
                      <option>Known</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={deviceLink}
                      onChange={(e) => setDeviceLink(e.target.value)}
                      className="w-full appearance-none px-3 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                    >
                      <option>Unlinked</option>
                      <option>Linked</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEBF6] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#171C26] hover:bg-slate-800 dark:bg-[#7C5CFC] dark:hover:bg-[#6847F0] text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 dark:text-emerald-200" />
                <span>
                  {isSubmitting ? "Assessing..." : "Assess transaction →"}
                </span>
              </button>
            </div>
          </form>

          {/* Inject Background Profile Toggle */}
          <div className="pt-5 border-t border-[#F0EDF7] dark:border-[#1F2739] flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#171C26] dark:text-white">
                Inject Background Profile
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500">
                Include customer behavior and historical patterns
              </div>
            </div>

            {/* Toggle Switch */}
            <button
              type="button"
              role="switch"
              aria-checked={injectProfile}
              onClick={() => setInjectProfile(!injectProfile)}
              className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${injectProfile
                  ? "bg-[#8568E8]"
                  : "bg-slate-200 dark:bg-slate-700"
                }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${injectProfile ? "translate-x-5" : "translate-x-0"
                  }`}
              />
            </button>
          </div>
        </div>

        {/* RIGHT PANE: Assessment result */}
        <div className="lg:col-span-6 bg-white dark:bg-[#131824] rounded-3xl p-6 sm:p-7 border border-[#F0EDF7] dark:border-[#222A3A] shadow-diffuse dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.5)] space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-[#F0EDF7] dark:border-[#1F2739]">
            <div className="w-10 h-10 rounded-2xl bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#171C26] dark:text-white">
                Assessment result
              </h2>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Model v4.8 • Assessed just now
              </p>
            </div>
          </div>

          {/* Fraud Probability Number & Risk Band */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Fraud Probability
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#171C26] dark:text-white tracking-tight tabular-nums mt-1">
                  {fraudProbability}%
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F06E4A] dark:bg-[#F87171]" />
                  <span>Risk Band: High</span>
                </span>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 font-medium">
                  Decision: <span className="font-semibold text-[#171C26] dark:text-white">Flag for review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Probability Slider Gauge with Threshold 0.2939 Marker */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#171C26] dark:text-white">
                  Risk Probability
                </span>
                <div className="text-[11px] text-slate-400 dark:text-slate-500">
                  Calibrated model confidence
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] font-mono text-xs font-bold">
                {riskScore.toFixed(4)}
              </span>
            </div>

            {/* Gauge Component Container */}
            <div className="pt-4 pb-2">
              {/* Level Zone Labels: LOW, MEDIUM, HIGH */}
              <div className="flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-1 mb-1.5">
                <span>LOW</span>
                <span>MEDIUM</span>
                <span>HIGH</span>
              </div>

              {/* Progress Gradient Track */}
              <div className="relative h-2.5 w-full rounded-full bg-slate-100 dark:bg-[#1E2738] overflow-visible">
                {/* Gradient Fill Bar */}
                <div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #9B86EE 0%, #F5BF75 50%, #F06E4A 100%)",
                  }}
                />

                {/* Score Thumb Pin at 82.4% */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ left: `${fraudProbability}%` }}
                >
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-[#171C26] border-[3.5px] border-[#F06E4A] shadow-md" />
                </div>

                {/* Threshold 0.2939 Pin Marker */}
                <div
                  className="absolute top-0 bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                  style={{ left: `${threshold * 100}%` }}
                >
                  <div className="w-0.5 h-4 -top-0.5 relative bg-slate-700/80 dark:bg-slate-300" />
                  <span className="absolute top-4 text-[9px] font-mono font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    Threshold 0.2939
                  </span>
                </div>
              </div>

              {/* Scale Ticks below track */}
              <div className="flex justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500 pt-5 px-0.5">
                <span>0.0</span>
                <span>0.25</span>
                <span>0.50</span>
                <span>0.75</span>
                <span>1.0</span>
              </div>
            </div>
          </div>

          {/* Key Contributing Factors */}
          <div className="space-y-3 pt-2">
            <div>
              <h3 className="text-xs font-bold text-[#171C26] dark:text-white">
                Key Contributing Factors
              </h3>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                Signals with the greatest impact on this result.
              </p>
            </div>

            {/* Factor 1 */}
            <div className="p-3 rounded-2xl bg-white dark:bg-[#161D2B] border border-[#F0EDF7] dark:border-[#232D40] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-[#F8F6FD] dark:bg-[#20293D] text-[#8568E8] dark:text-[#A78BFA] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                  01
                </span>
                <div>
                  <div className="text-xs font-bold text-[#171C26] dark:text-white">
                    Device is new and unlinked to account
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">
                    No prior trusted activity was found for this device fingerprint.
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-bold whitespace-nowrap shrink-0">
                High impact
              </span>
            </div>

            {/* Factor 2 */}
            <div className="p-3 rounded-2xl bg-white dark:bg-[#161D2B] border border-[#F0EDF7] dark:border-[#232D40] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-[#F8F6FD] dark:bg-[#20293D] text-[#8568E8] dark:text-[#A78BFA] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                  02
                </span>
                <div>
                  <div className="text-xs font-bold text-[#171C26] dark:text-white">
                    Amount is unusually high for this customer
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">
                    This transaction is 4.8× higher than the customer&apos;s typical purchase.
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/20 text-[#F06E4A] dark:text-[#F87171] text-[11px] font-bold whitespace-nowrap shrink-0">
                High impact
              </span>
            </div>

            {/* Factor 3 */}
            <div className="p-3 rounded-2xl bg-white dark:bg-[#161D2B] border border-[#F0EDF7] dark:border-[#232D40] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-[#F8F6FD] dark:bg-[#20293D] text-[#8568E8] dark:text-[#A78BFA] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                  03
                </span>
                <div>
                  <div className="text-xs font-bold text-[#171C26] dark:text-white">
                    Location differs from recent activity
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">
                    The customer has not previously transacted from this region.
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#F1EEFA] dark:bg-[#8568E8]/20 text-[#8568E8] dark:text-[#A78BFA] text-[11px] font-bold whitespace-nowrap shrink-0">
                Medium impact
              </span>
            </div>
          </div>

          {/* Explainable Assessment Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FFF5F0] to-[#F3F0FA] dark:from-[#211E30] dark:to-[#1A2234] border border-[#F0EDF7] dark:border-[#283248] flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white dark:bg-[#131824] text-[#8568E8] dark:text-[#A78BFA] flex items-center justify-center shadow-sm shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#171C26] dark:text-white">
                Explainable assessment
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                This decision is based on 22 behavioral and transactional signals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
