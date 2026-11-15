"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  ArrowLeftRight,
  FileSpreadsheet,
  Briefcase,
  ShieldCheck,
  Settings,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  X,
  Zap,
} from "lucide-react";
import SentinelLogo from "@/components/SentinelLogo";
import ThemeToggle from "@/components/ThemeToggle";

export type NavRoute = "dashboard" | "assess" | "batch" | "cases" | "audit";

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
  onCloseMobile?: () => void;
  activePage?: NavRoute | string;
}

interface NavItem {
  name: string;
  href: string;
  key: NavRoute;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/",
    key: "dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Assess Transaction",
    href: "/assess",
    key: "assess",
    icon: ArrowLeftRight,
  },
  {
    name: "Batch Screening",
    href: "/batch",
    key: "batch",
    icon: FileSpreadsheet,
  },
  {
    name: "Case Review",
    href: "/cases",
    key: "cases",
    icon: Briefcase,
  },
  {
    name: "Model Audit",
    href: "/audit",
    key: "audit",
    icon: ShieldCheck,
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed = false,
  onToggle,
  isMobile = false,
  onCloseMobile,
  activePage,
}) => {
  const pathname = usePathname() || "/";

  // Normalize active route
  const rawKey =
    activePage || (pathname === "/" ? "dashboard" : pathname.replace(/^\//, ""));
  const normalizedActive = rawKey.toLowerCase();

  const handleLinkClick = () => {
    if (isMobile && onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <aside
      className={`h-full bg-white/90 dark:bg-[#0E131F]/95 backdrop-blur-md border-r border-[#EFEBF6] dark:border-[#1C2436] flex flex-col justify-between select-none transition-all duration-300 shadow-[2px_0_20px_-4px_rgba(44,30,87,0.03)] dark:shadow-[2px_0_24px_-4px_rgba(0,0,0,0.5)] ${isMobile
          ? "w-72 p-6"
          : isCollapsed
            ? "w-20 p-3"
            : "w-72 p-6"
        }`}
    >
      {/* Top Group: Brand & Core Navigation */}
      <div className="space-y-6">
        {/* Brand Header & Toggle / Close Button */}
        <div
          className={`flex items-center ${!isMobile && isCollapsed
              ? "justify-center flex-col gap-3"
              : "justify-between px-1"
            }`}
        >
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 group ${!isMobile && isCollapsed ? "justify-center" : ""
              }`}
          >
            <SentinelLogo className="w-8 h-8 shrink-0 transition-transform group-hover:scale-105" />
            {(isMobile || !isCollapsed) && (
              <span className="font-extrabold text-xl tracking-tight text-[#171C26] dark:text-white">
                Sentinel
              </span>
            )}
          </Link>

          {/* Mobile close button ('X') */}
          {isMobile ? (
            <button
              type="button"
              onClick={onCloseMobile}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            /* Desktop toggle button */
            onToggle && (
              <button
                type="button"
                onClick={onToggle}
                title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                className="p-1.5 rounded-xl text-slate-400 hover:text-[#171C26] dark:hover:text-white hover:bg-[#F1EDFA] dark:hover:bg-[#1E2536] transition-colors shrink-0"
              >
                {isCollapsed ? (
                  <PanelLeftOpen className="w-4 h-4 text-[#7C5CFC]" />
                ) : (
                  <PanelLeftClose className="w-4 h-4" />
                )}
              </button>
            )
          )}
        </div>

        {/* Workspace Section Label */}
        {(isMobile || !isCollapsed) && (
          <div className="px-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
            Workspace
          </div>
        )}

        {/* 5 Core Navigation Items */}
        <nav className="flex flex-col gap-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              normalizedActive === item.key ||
              (item.key === "dashboard" &&
                (normalizedActive === "" || normalizedActive === "dashboard"));
            const Icon = item.icon;

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={handleLinkClick}
                title={!isMobile && isCollapsed ? item.name : undefined}
                className={`relative flex items-center rounded-2xl text-[13px] transition-all duration-150 ${!isMobile && isCollapsed
                    ? "justify-center p-3"
                    : "gap-3.5 px-3.5 py-3"
                  } ${isActive
                    ? "bg-[#F1EDFA] dark:bg-[#251E45] text-[#6345DB] dark:text-[#C4B5FD] font-semibold shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#151C2C] font-medium"
                  }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <span
                    className={`absolute left-0 bg-[#7C5CFC] rounded-r-full ${!isMobile && isCollapsed
                        ? "top-2 bottom-2 w-1"
                        : "top-2.5 bottom-2.5 w-1.5"
                      }`}
                    aria-hidden="true"
                  />
                )}
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${isActive
                      ? "text-[#7C5CFC] dark:text-[#A78BFA]"
                      : "text-slate-500 dark:text-slate-400"
                    }`}
                />
                {(isMobile || !isCollapsed) && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Group: Balanced widgets to remove awkward blank space */}
      <div className="flex flex-col gap-3 pt-4 border-t border-[#F0ECF7] dark:border-[#1F2739]">
        {/* Real-time ML Engine Status Tile */}
        {(isMobile || !isCollapsed) && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFF5F0]/80 via-white to-[#F1EDFA]/70 dark:from-[#1A2234] dark:via-[#151B2A] dark:to-[#1E1C38] border border-[#F0EDF7] dark:border-[#253047] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#171C26] dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                LightGBM v4.8
              </span>
              <span className="font-mono text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                12ms
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Risk Threshold</span>
              <span className="font-mono font-bold text-[#F06E4A] dark:text-[#F87171]">
                0.2939
              </span>
            </div>
          </div>
        )}

        {/* Theme Toggle row (in collapsed mode icon only, in expanded mode with text) */}
        <div
          className={`flex items-center ${!isMobile && isCollapsed ? "justify-center" : "justify-between px-1"
            }`}
        >
          {(isMobile || !isCollapsed) && (
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Appearance
            </span>
          )}
          <ThemeToggle />
        </div>

        {/* Settings Link */}
        <Link
          href="#settings"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick();
          }}
          title={!isMobile && isCollapsed ? "Settings" : undefined}
          className={`flex items-center rounded-2xl text-[13px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#151C2C] font-medium transition-colors ${!isMobile && isCollapsed
              ? "justify-center p-3"
              : "gap-3.5 px-3.5 py-2.5"
            }`}
        >
          <Settings className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
          {(isMobile || !isCollapsed) && <span>Settings</span>}
        </Link>

        {/* Analyst Profile Card: Alex Morgan */}
        <div
          title={!isMobile && isCollapsed ? "Alex Morgan (Senior Analyst)" : undefined}
          className={`flex items-center rounded-2xl hover:bg-slate-50/80 dark:hover:bg-[#151C2C] transition-colors cursor-pointer ${!isMobile && isCollapsed ? "justify-center p-1.5" : "justify-between p-2"
            }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#171C26] dark:bg-[#7C5CFC] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
              AM
            </div>
            {(isMobile || !isCollapsed) && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#171C26] dark:text-white truncate">
                  Alex Morgan
                </span>
                <span className="text-[11px] text-slate-400 truncate">
                  Senior Analyst
                </span>
              </div>
            )}
          </div>
          {(isMobile || !isCollapsed) && (
            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
