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
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId:
        process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
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
      apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-09-26",
});
