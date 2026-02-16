/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f3f8",
          100: "#d9e0ec",
          200: "#b3c1d9",
          300: "#8ca2c6",
          400: "#6683b3",
          500: "#0A1A3A",
          600: "#08142e",
          700: "#060f22",
          800: "#040a17",
          900: "#02050b",
        },
        gold: {
          50: "#fbf7e8",
          100: "#f7efd1",
          200: "#efdfa3",
          300: "#e7cf75",
          400: "#dfbf47",
          500: "#C9A227",
          600: "#a17f1f",
          700: "#795f17",
          800: "#514010",
          900: "#282008",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
