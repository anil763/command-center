import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        card: "#111111",
        border: "#222222",
        muted: "#9ca3af",
        revenue: "#f59e0b",
        spiritual: "#a855f7",
        ugc: "#3b82f6",
        presidio: "#10b981",
        ashram: "#f97316",
      },
    },
  },
  plugins: [],
};

export default config;
