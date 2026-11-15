import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sentinel - Autonomous Financial Fraud Intelligence",
  description:
    "Next-generation real-time financial fraud detection and case review powered by calibrated LightGBM machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased text-[#171C26] dark:text-[#E2E8F0]">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
