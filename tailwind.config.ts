/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#060919",
        secondary: "#94a3b8",
        tertiary: "#0f172a",
        "black-100": "#0b1120",
        "black-200": "#030712",
        "white-100": "#f8fafc",
        cyan: "#00f0ff",
        violet: "#a855f7",
        emerald: "#10b981",
      },
      boxShadow: {
        card: "0px 20px 70px -10px rgba(0, 240, 255, 0.15), 0 0 25px -5px rgba(168, 85, 247, 0.2)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
