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
        surface: "var(--surface)",        // Light aqua #E8F3FD
        navy: "var(--navy)",              // Dark navy #0f172a
        primary: "var(--color-primary)",  // Vibrant blue #007BFF
        heading: "var(--color-heading)",  // Solid dark #1A1A1A
        body: "var(--color-body)",        // Solid grey #4F4F4F
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 123, 255, 0.08), 0 2px 4px -2px rgba(0, 123, 255, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(0, 123, 255, 0.15), 0 8px 10px -6px rgba(0, 123, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
