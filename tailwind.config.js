module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      yellow: "#ffe88c",
      blue: "#00a0d2",
      white: "#FFFFFF",
      burple: "#be93c5",
      pink: "#7bc6cc",
      gray: "#111827",
    },
    extend: {
      fontFamily: {
        sans: ["Mada", "sans-serif"],
        Lalezar: ["Lalezar"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
