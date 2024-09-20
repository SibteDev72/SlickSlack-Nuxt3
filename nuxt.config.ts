import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Wish Eat",
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
  devtools: { enabled: false },
});
