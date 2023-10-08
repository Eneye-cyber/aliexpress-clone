// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    typeCheck: true
  },
  supabase: {
    // Options
    redirect: false
  },
  // pinia: {
  //   autoImports: [
  //     // automatically imports `defineStore`
  //     'defineStore', // import { defineStore } from 'pinia'
  //     ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
  //   ],
  // },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      script: [
        {src: 'https://js.stripe.com/v3/', defer: true}
      ]
    }
  },
  // webpack: {
  //   loaders: {
  //     vue: {
  //       hotReload: true,
  //     }
  //   }
  // }
})
