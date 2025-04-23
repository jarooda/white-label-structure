// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  vite: {
    resolve: {
      alias: {
        '@shared': resolve(__dirname, '../../shared'),
        '@modules': resolve(__dirname, '../../modules'),
      },
    },
  },
})