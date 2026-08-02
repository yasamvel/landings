import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        accent: "#ff0080",
        secondary: "#9c27ff",
        border: "rgba(255,255,255,0.12)",
        card: "rgba(255,255,255,0.05)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 0, 128, 0.35)",
        violet: "0 0 70px rgba(156, 39, 255, 0.28)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-1%, 1%)" },
          "50%": { transform: "translate(1%, -1%)" },
          "75%": { transform: "translate(-1%, -1%)" }
        }
      },
      animation: {
        shimmer: "shimmer 7s linear infinite",
        grain: "grain 7s steps(10) infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
