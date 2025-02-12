// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: [
    '@/assets/css/main.css'
  ],
  typescript: {
    typeCheck: true
  }
})