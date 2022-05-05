import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin(() => {
  const options = JSON.parse('<%= JSON.stringify(options) %>');

  return {
    provide: {
      breakpointsOptions: options
    }
  }
})
