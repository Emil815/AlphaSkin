// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "nuxt-lodash",
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  routeRules: {
    "/api/auth/**": {
      cors: true,
    },
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    defaultLocale: "az",
    locales: [
      {
        code: "az",
        file: "az-AZ.json",
      },
      {
        code: "en",
        file: "en-US.json",
      },
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});