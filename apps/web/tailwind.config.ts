import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        tribe: {
          black: "#070707",
          panel: "#111111",
          soft: "#191919",
          chrome: "#F5F5F2",
          orange: "#FF7A1A",
          amber: "#FFB347",
          muted: "#A3A3A3",
          border: "#2A2A2A"
        }
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 122, 26, 0.25)",
        panel: "0 16px 40px rgba(0, 0, 0, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
