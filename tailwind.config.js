/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        githance: {
          bg: "#0b0d0f",
          dark: "#07080a",
          card: "#101216",
          cardElevated: "#15181f",
          cardHover: "#181d26",
          surface: "#0f1115",
          surfaceAlt: "#14171d",
          border: "rgba(255, 255, 255, 0.1)",
          borderSubtle: "rgba(255, 255, 255, 0.06)",
          borderStrong: "rgba(255, 255, 255, 0.18)",
          orange: "#ff7a1a",
          orangeLight: "#ffb37f",
          orangeHover: "#ff8c3a",
          orangeDark: "#fb460d",
          cyan: "#53d0ff",
          cyanLight: "#53eafd",
          yellow: "#ffdd00",
          green: "#10b981",
          purple: "#d946ef",
        },
      },
      fontFamily: {
        antonio: ['"Antonio"', '"Space Grotesk"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        sans: ['"Poppins"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(255, 122, 26, 0.45)',
        'orange-glow-sm': '0 0 16px rgba(255, 122, 26, 0.3)',
        'cyan-glow': '0 0 30px rgba(83, 208, 255, 0.35)',
        'cyan-glow-sm': '0 0 16px rgba(83, 208, 255, 0.25)',
        'githance-card': '0 40px 120px rgba(0, 0, 0, 0.5)',
        'githance-floating': '0 24px 60px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
