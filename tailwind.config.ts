import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F5F2",
        sand: {
          DEFAULT: "#DCC8A1",
          dark: "#c4a87a",
        },
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
      },
    },
  },
  plugins: [],
};

export default config;
