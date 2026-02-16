/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f2f5",
          100: "#e1e4eb",
          200: "#c2c9d6",
          300: "#a3aec2",
          400: "#657999",
          500: "#274370",
          600: "#233c65",
          700: "#1d3254",
          800: "#172843",
          900: "#111d31",
        },
        gold: {
          50: "#f9f3e3",
          100: "#f0dbb3",
          200: "#e7c483",
          300: "#dead53",
          400: "#d59523",
          500: "#C9A227",
          600: "#a17f1f",
          700: "#795f17",
          800: "#514010",
          900: "#282008",
        },
        green: {
          50: "#e7f5ed",
          100: "#b8e2ce",
          200: "#89cfaf",
          300: "#5abc90",
          400: "#2ba971",
          500: "#10b981",
          600: "#0d9467",
          700: "#0a6f4d",
          800: "#064a33",
          900: "#03251a",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
