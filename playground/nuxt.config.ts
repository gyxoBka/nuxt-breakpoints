import { defineNuxtConfig } from 'nuxt'
import MyModule from '..';

export default defineNuxtConfig({
  modules: [
    MyModule,
    // ['nuxt-breakpoints', {
    //   sm: 576,
    //   md: 768,
    //   lg: 992,
    //   xl: 1200,
    //   options: {
    //     throttle: 200,
    //   }
    // }]
  ],
  breakpoints: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      options: {
        throttle: 200,
      }
  }
})
