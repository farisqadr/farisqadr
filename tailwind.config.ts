import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0CC144",
          dark: "#039B4C",
          light: "#5EEAD4",
          accent: "#FF5C00",
          purple: "#9333EA",
          pink: "#EC4899",
          yellow: "#FDE047",
          surface: "#F9FAFB",
          deep: "#0F172A",
        },
        foreground: "#0F172A",
        background: "#F9FAFB",
        muted: "#6B7280",
        border: "rgba(15, 23, 42, 0.08)",
        slate: {
          950: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cal)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        floating: "0 40px 80px -40px rgba(12, 193, 68, 0.4)",
        card: "0 30px 60px -40px rgba(15, 23, 42, 0.3)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.12) 1px, transparent 0)",
        hero: "radial-gradient(circle at top left, rgba(12, 193, 68, 0.38), transparent 55%), radial-gradient(circle at top right, rgba(147, 51, 234, 0.28), transparent 50%), linear-gradient(180deg, #fefcff 0%, #f5fdf5 60%, #f9fafb 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: {
        xl: "1rem",
        "3xl": "1.75rem",
      },
      spacing: {
        15: "3.75rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [],
};

export default config;
