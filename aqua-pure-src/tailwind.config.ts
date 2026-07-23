import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)", // Mapping for your custom bg-surface
        navy: "var(--navy)",       // Mapping for your custom text-navy
      },
    },
  },
  plugins: [],
};

export default config;