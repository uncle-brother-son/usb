import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        light: "#ECECEC",
        dark: "#2B2B2B",
        pop: "#DEEC1C",
      },
      
      // Custom fonts
      fontFamily: {
        aeonik: ['Aeonik', 'Arial', 'Helvetica', 'sans-serif'],
        sans: ['Aeonik', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      
      // Custom animations
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      // Custom font sizes
      fontSize: {
        '14': '14px',
      },
    },
  },
  plugins: [],
};

export default config;
