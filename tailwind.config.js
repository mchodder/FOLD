const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "snell-roundhand": ["SnellRoundhand"],
        geotica: ["Geotica"],
        "geotica-engraved": ["Geotica Engraved"],
      },
      colors: {
        blue: {
          ultramarine: "#2C2E81",
          "duke-blue": "#2B3188",
          cobalt: "#0047AB",
          sapphire: "#0F52BA",
          "lapis-lazuli": "#26619C",
          cerulean: "#007BA8",
        },
        green: {
          "camouflage-green": "#78866B",
          "moss-green": "#8A9A5B",
          "bud-green": "#7AB660",
          "light-moss-green": "#AFD9AD",
          sage: "#BCB88A",
        },
        orange: {
          orange: "#FFA500",
          "dark-orange": "#FF8C00",
        },
        red: {
          "ferrari-red": "#FF2800",
        },
        yellow: {
          "dark-khaki": "#BDB76B",
          khaki: "#F0E68C",
          "titanium-yellow": "#EEE600",
          "cadmium-yellow": "#FFF600",
          chartreuse: "#DFFF00",
          lemonLime: "#E3FF00",
          "canary-yellow": "#FFEF00",
        },
      },
      screens: {
        xs: "400px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      backgroundImage: {
        // hero: "url('/src/assets/images/image')",
      },
      textShadow: {
        sm: "1px 1px 2px var(--yellow-canary-yellow)",
        DEFAULT: "2px 2px 2px var(--yellow-canary-yellow)",
        lg: "5px 8px 16px var(--yellow-canary-yellow)",
      },
      boxShadow: {
        sm: "-1px -1px 2px 0 var(--yellow-canary-yellow)",
        DEFAULT:
          "-2px -2px 2px 0 var(--yellow-canary-yellow), 0 2px 4px -1px var(--yellow-canary-yellow)",
        lg: "-3px -3px 2px 0 var(--yellow-canary-yellow), 0 4px 6px -2px var(--yellow-canary-yellow)",
        xl: "0 -20px 25px 0 var(--yellow-canary-yellow), 0 10px 10px -5px var(--yellow-canary-yellow)",
        xxl: "0 -25px 50px 0 var(--yellow-canary-yellow)",
        "t-3xl": "0 -35px 60px 0 var(--yellow-canary-yellow)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
