import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Add your custom colors here
        // primary: "#your-color",
        // secondary: "#your-color",
      },
      
      // Custom fonts
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      
      // Custom animations
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      // Custom spacing, breakpoints, etc. can be added here
      // spacing: {},
      // screens: {},
      // borderRadius: {},
    },
  },
  plugins: [
    // Add Tailwind plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

export default config;
