module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        md: "0.4rem",
        lg: "0.5rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },

    extend: {
      colors: {
        yellow: "#ffe88c",
        blue: "#00a0d2",
        white: "#FFFFFF",
        burple: "#be93c5",
        pink: "#7bc6cc",
        t_gray: "#111827",
        borderColor: "#f2f2f2",
      },
      fontFamily: {
        sans: ["Mada", "sans-serif"],
        Lalezar: ["Lalezar"],
        Poppins: ["Poppins"],
        IndieFlower: ["Indie Flower"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
