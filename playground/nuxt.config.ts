import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    ['nuxt-breakpoints', {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      options: {
        throttle: 200,
      }
    }]
  ],
})
