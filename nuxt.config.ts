import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Slick Slice",
      meta: [{ name: "description", content: "Everything about - Nuxt-3" }],
    },
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-vuefire"],

  vuefire: {
    config: {
      apiKey: "AIzaSyAuiV27rP4uw_rkvHGyH9RTOhPUIyKCFes",
      authDomain: "slick-slice.firebaseapp.com",
      projectId: "slick-slice",
      storageBucket: "slick-slice.appspot.com",
      messagingSenderId: "441472391542",
      appId: "1:441472391542:web:70df4b1a794bae97e40257",
      measurementId: "G-JG9XMM283X",
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-09-26",
});