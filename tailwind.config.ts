// tailwind.config.js
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xs: "420px",
      // => @media (min-width: 420px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1800px",
      // => @media (min-width: 1536px) { ... }
      "4xl": "2100px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgPrimary: {
          DEFAULT: "#ffefd9",
        },
        buttonPrimary: {
          DEFAULT: "#FFAA33",
        },
        textPrimary: {
          DEFAULT: "black",
        },
        textSecondary: {
          DEFAULT: "#5c5d5d",
        },
        textColor3: {
          DEFAULT: "#FFAA33",
        },
        bgColorCard: {
          DEFAULT: "#e6e8e9",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
