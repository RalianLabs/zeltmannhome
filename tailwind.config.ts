import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F5F2",
        cream: "#FBF9F6",
        sand: {
          DEFAULT: "#DCC8A1",
          dark: "#c4a87a",
        },
        gold: "#B8965A",
        navy: {
          DEFAULT: "#0B2A44",
          light: "#0B2A44CC",
        },
        muted: "#6b6b6b",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
        wide: "1280px",
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
      },
      letterSpacing: {
        label: "0.15em",
      },
      lineHeight: {
        relaxed: "1.7",
        loose: "1.8",
      },
      transitionDuration: {
        "500": "500ms",
        "700": "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
