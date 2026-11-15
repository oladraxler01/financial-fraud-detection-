"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  KeyRound,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SentinelLogo from "@/components/SentinelLogo";
import ThemeToggle from "@/components/ThemeToggle";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("alex.morgan@sentinel.internal");
  const [password, setPassword] = useState<string>("••••••••••••");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Mock login: any input or clicking Sign In immediately succeeds
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("sentinel_auth", "true");
        localStorage.setItem("sentinel_user", email || "alex.morgan@sentinel.internal");
      }
      setIsLoading(false);
      router.push("/");
    }, 450);
  };

  const handleDemoFill = () => {
    setEmail("alex.morgan@sentinel.internal");
    setPassword("SentinelSecure2026!");
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      {/* Top Floating Controls */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-4 px-2">
        <Link href="/" className="flex items-center gap-2.5">
          <SentinelLogo className="w-7 h-7" />
          <span className="font-extrabold text-lg tracking-tight text-[#171C26] dark:text-white">
            Sentinel
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 hidden sm:inline">Theme</span>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-5xl bg-white dark:bg-[#131824] rounded-3xl border border-[#EFEBF6] dark:border-[#222A3A] shadow-diffuse-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
        {/* LEFT PANE: Standard Login Form (7 Cols) */}
        <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#F06E4A]/15 border border-[#FCDCD0] dark:border-[#F06E4A]/30 text-xs font-semibold text-[#F06E4A] dark:text-[#F87171] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F06E4A] dark:bg-[#F87171] animate-pulse" />
                <span>Analyst Portal Access</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171C26] dark:text-white tracking-tight">
                Welcome back
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                Enter your work credentials to access the Sentinel financial intelligence and fraud detection terminal.
              </p>
            </div>

            {/* Quick Demo Pill */}
            <div className="mb-6 p-3 rounded-2xl bg-[#FAF8FE] dark:bg-[#1A2234] border border-[#EFEBF6] dark:border-[#253047] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <Sparkles className="w-4 h-4 text-[#7C5CFC] shrink-0" />
                <span className="text-xs text-slate-600 dark:text-slate-300 truncate">
                  Testing environment: any email or password works
                </span>
              </div>
              <button
                type="button"
                onClick={handleDemoFill}
                className="text-[11px] font-semibold text-[#7C5CFC] dark:text-[#A78BFA] hover:underline shrink-0"
              >
                Auto-fill
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="analyst@sentinel.internal"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#E5E0F0] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("In this demo environment, any password is valid. Click 'Sign In' to proceed.");
                    }}
                    className="text-[11px] text-[#F06E4A] hover:underline font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#E5E0F0] dark:border-[#253043] bg-white dark:bg-[#101520] text-xs text-[#171C26] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/40 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#7C5CFC] focus:ring-[#7C5CFC] border-slate-300 dark:border-slate-600 dark:bg-slate-800"
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Keep me signed in on this device
                  </span>
                </label>
                <span className="text-[11px] text-slate-400">Session: 30 days</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-5 rounded-full bg-[#171C26] hover:bg-slate-800 dark:bg-[#7C5CFC] dark:hover:bg-[#6847F0] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authenticating credentials...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Terminal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Link */}
          <div className="pt-6 mt-6 border-t border-[#F0ECF7] dark:border-[#1F2739] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              Need new analyst authorization?
            </span>
            <Link
              href="/signup"
              className="font-semibold text-[#7C5CFC] dark:text-[#A78BFA] hover:underline"
            >
              Register Clearance →
            </Link>
          </div>
        </div>

        {/* RIGHT PANE: Standard High-Tech Security Visual & Assurance (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF5F0] via-[#FAF5FD] to-[#F1EEFA] dark:from-[#181E2E] dark:via-[#141A27] dark:to-[#1B172E] p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#EFEBF6] dark:border-[#222A3A] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 bg-[#F06E4A]/10 dark:bg-[#F06E4A]/15 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#8568E8]/15 dark:bg-[#8568E8]/20 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div>
            {/* Standard Security Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-[#101520]/80 border border-[#EFEBF6] dark:border-[#2A344A] text-xs font-semibold text-[#171C26] dark:text-slate-200 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Zero-Trust Enterprise Protection</span>
            </div>

            {/* High-Fidelity SVG Security Shield Graphic */}
            <div className="my-4 flex items-center justify-center">
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                {/* Outer orbital decorative ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#8568E8]/30 dark:border-[#8568E8]/40 animate-[spin_40s_linear_infinite]" />

                {/* Inner glowing circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#FFF1EB] to-[#ECE7F8] dark:from-[#242A3D] dark:to-[#1E1C38] border border-white/60 dark:border-[#354360] shadow-inner flex items-center justify-center">
                  {/* Central Security Shield SVG */}
                  <svg
                    viewBox="0 0 100 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 drop-shadow-md"
                  >
                    {/* Outer Shield Path */}
                    <path
                      d="M50 5L15 22.5V52.5C15 76.5 30 98.5 50 105C70 98.5 85 76.5 85 52.5V22.5L50 5Z"
                      fill="url(#shield_gradient)"
                      stroke="#8568E8"
                      strokeWidth="2"
                    />
                    {/* Inner Core Shield Path */}
                    <path
                      d="M50 18L26 30V52C26 68 36.5 83 50 88C63.5 83 74 68 74 52V30L50 18Z"
                      fill="#171C26"
                      opacity="0.9"
                    />
                    {/* Lock Keyhole / Checkmark Accent */}
                    <path
                      d="M50 38C46.6863 38 44 40.6863 44 44C44 46.2204 45.2106 48.1578 47 49.199V58C47 59.6569 48.3431 61 50 61C51.6569 61 53 59.6569 53 58V49.199C54.7894 48.1578 56 46.2204 56 44C56 40.6863 53.3137 38 50 38Z"
                      fill="#F06E4A"
                    />
                    <circle cx="50" cy="44" r="2.5" fill="#FFFFFF" />
                    {/* Radiating security nodes */}
                    <circle cx="50" cy="74" r="3" fill="#10B981" />
                    <line x1="50" y1="61" x2="50" y2="71" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />

                    <defs>
                      <linearGradient id="shield_gradient" x1="15" y1="5" x2="85" y2="105" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F06E4A" stopOpacity="0.8" />
                        <stop offset="0.5" stopColor="#8568E8" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#171C26" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating Micro-Badge: Bank-Grade */}
                <div className="absolute -bottom-1 bg-white/95 dark:bg-[#151C2C] px-3 py-1 rounded-full border border-[#E5E0F0] dark:border-[#2C384E] shadow-sm text-[10px] font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>256-Bit Keystore</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <h2 className="text-base sm:text-lg font-bold text-[#171C26] dark:text-white tracking-tight">
                Bank-Grade Fraud Protection
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Sentinel safeguards financial networks with calibrated ML models, encrypted audit trails, and instant decisioning.
              </p>
            </div>
          </div>

          {/* Standard Compliance Badges */}
          <div className="pt-6 mt-6 border-t border-[#E5DFEF] dark:border-[#222A3A] flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
            <span>SOC 2 Type II</span>
            <span>•</span>
            <span>PCI-DSS Level 1</span>
            <span>•</span>
            <span>FIPS 140-3</span>
            <span>•</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
