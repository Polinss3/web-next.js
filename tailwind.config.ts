import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#005BE5', // Azul
        "primary-transparent": "#005BE5CC",
        secondary: '#0096E5', // Azul claro
        accent: '#05E6FF', // Cyan
        contrast: '#FF8C0A',
        info: '#3B82F6',
        success: '#22C55E',
        warning: '#FBBF24',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
};
export default config;
