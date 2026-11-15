import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apricot: {
          50: "#FFF9F6",
          100: "#FDEEE7",
          200: "#FBDCD0",
          300: "#F8C7B4",
          400: "#F29F84",
          500: "#E76F51",
          DEFAULT: "#FDE8E0",
          accent: "#D95D39",
        },
        lavender: {
          50: "#FAF9FE",
          100: "#F3F0FC",
          200: "#EBE5FA",
          300: "#DDD4F6",
          400: "#BDB0EC",
          500: "#8F7CE0",
          DEFAULT: "#ECE8F8",
        },
        navy: {
          50: "#F3F5FA",
          100: "#E1E6F2",
          200: "#C2CCE3",
          300: "#96A6CD",
          400: "#6077A9",
          500: "#3D5385",
          600: "#2B3D66",
          700: "#1E2B4B",
          800: "#141D35",
          900: "#0B132B",
          950: "#060A18",
          DEFAULT: "#0B132B",
        },
        badge: {
          mint: {
            bg: "#E6F7F0",
            text: "#065F46",
            border: "#A7F3D0",
            dot: "#10B981",
          },
          yellow: {
            bg: "#FEF9C3",
            text: "#854D0E",
            border: "#FDE047",
            dot: "#EAB308",
          },
          terracotta: {
            bg: "#FDE8E4",
            text: "#9C2A1B",
            border: "#FCA5A5",
            dot: "#DC2626",
          },
          grey: {
            bg: "#F1F5F9",
            text: "#475569",
            border: "#CBD5E1",
            dot: "#94A3B8",
          },
        },
      },
      boxShadow: {
        diffuse: "0 10px 30px -4px rgba(11, 19, 43, 0.05), 0 4px 12px -2px rgba(11, 19, 43, 0.03)",
        "diffuse-sm": "0 4px 14px -2px rgba(11, 19, 43, 0.04)",
        "diffuse-lg": "0 20px 40px -6px rgba(11, 19, 43, 0.08), 0 8px 16px -3px rgba(11, 19, 43, 0.04)",
        pill: "0 2px 8px -1px rgba(11, 19, 43, 0.1)",
      },
      backgroundImage: {
        "apricot-lavender": "linear-gradient(135deg, #FDECE5 0%, #F5EFF9 50%, #ECE7F8 100%)",
        "apricot-lavender-subtle": "linear-gradient(135deg, #FFF6F2 0%, #FAF5FC 50%, #F3F0FA 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

