// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  compatibilityDate: '2024-11-01',
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    'v-gsap-nuxt',
    '@hypernym/nuxt-anime',
    'nuxt-lodash',
  ],
  css: [
    '@/assets/scss/main.scss'
  ],
})