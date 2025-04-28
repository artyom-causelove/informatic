// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  compatibilityDate: '2024-11-01',
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        path: 'hmr/'
      },
      allowedHosts: ['05ee-38-180-114-220.ngrok-free.app', 'localhost:3005']
    },
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    'v-gsap-nuxt',
    '@hypernym/nuxt-anime',
    'nuxt-lodash',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/scss/main.scss'
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3005',
      authRedirectUrl: 'https://05ee-38-180-114-220.ngrok-free.app'
    }
  }
})