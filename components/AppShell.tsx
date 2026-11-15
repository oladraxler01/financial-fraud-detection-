"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import SentinelLogo from "@/components/SentinelLogo";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isAuthPage) {
    return <main className="min-h-screen w-full flex flex-col">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-transparent text-[#171C26] dark:text-[#E2E8F0]">
      {/* 1. MOBILE TOP HEADER (Sticky, only visible on < 1024px screens) */}
      <header className="lg:hidden sticky top-0 z-40 px-4 py-3 bg-white/90 dark:bg-[#0E131F]/90 backdrop-blur-md border-b border-[#EFEBF6] dark:border-[#1F2739] flex items-center justify-between shadow-sm">
        {/* Left: Hamburger Button + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <SentinelLogo className="w-7 h-7" />
            <span className="font-extrabold text-base tracking-tight text-[#171C26] dark:text-white">
              Sentinel
            </span>
          </div>
        </div>

        {/* Right: Theme Toggle & Notifications */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-white/90 dark:bg-[#161B26] border border-[#EFEBF6] dark:border-[#262F40] flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. MOBILE DRAWER (Slide-out menu for mobile with backdrop) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer Content */}
          <div className="relative z-10 w-72 h-full shadow-2xl animate-in slide-in-from-left duration-200">
            <Sidebar
              isMobile={true}
              onCloseMobile={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* 3. DESKTOP FIXED SIDEBAR (Hidden on mobile, visible on lg+) */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 z-30">
        <Sidebar
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {/* 4. MAIN WORKSPACE CONTENT AREA */}
      <div
        className={`flex-1 min-h-screen flex flex-col justify-between transition-all duration-300 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-72"
        } ml-0`}
      >
        {/* Desktop Floating Controls Bar (Hidden on Mobile) */}
        <header className="hidden lg:flex px-6 xl:px-8 pt-7 pb-2 items-center justify-end gap-3 z-10">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-9 pr-4 py-2 rounded-full text-xs bg-white/90 dark:bg-[#161B26]/90 border border-[#EFEBF6] dark:border-[#262F40] focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 w-56 shadow-sm transition-all"
            />
          </div>

          {/* Theme Toggle (Desktop) */}
          <ThemeToggle />

          {/* Bell Icon Notification */}
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-white/90 dark:bg-[#161B26] border border-[#EFEBF6] dark:border-[#262F40] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm transition-colors"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* Live Data Status Badge */}
          <button
            type="button"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 dark:bg-[#161B26] border border-[#EFEBF6] dark:border-[#262F40] text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-[#1F2737] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Live data</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </header>

        {/* Main Route Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-5 lg:py-4 max-w-[1550px] w-full mx-auto">
          {children}
        </main>

        {/* Bottom System Status Bar */}
        <footer className="px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500 border-t border-[#F0EDF7]/60 dark:border-[#1C2436]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>Risk engine updated 42 seconds ago</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              System status:{" "}
              <span className="text-[#10B981] font-semibold">Operational</span>
            </span>
            <div className="w-5 h-5 rounded-full bg-[#171C26] dark:bg-[#253047] text-white flex items-center justify-center text-[11px] font-bold shadow-sm cursor-pointer hover:bg-slate-800 dark:hover:bg-[#354360]">
              ?
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppShell;
