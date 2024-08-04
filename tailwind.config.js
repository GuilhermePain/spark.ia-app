/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FA7807",
        "primary-focus": "#FDAD0B",
        "background-dark": "#011F3B",
        background: "#FFFFFF",
      },
    },
    fontWeight: {
      bold: 500,
    },
    fontFamily: {
      DEFAULT: "Nunito_Medium",
      medium: "Nunito_Medium",
      semibold: "Nunito_Semibold",
      bold: "Nunito_Bold",
    },
    extend: {},
  },
  plugins: [],
};
