# nuxt-breakpoints

Module adds to your app easy way to control web page breakpoints

## 💿 Installation

First install

```sh
npm install nuxt3-breakpoints --save
```

After the installation in the previous section, you need to add `nuxt3-breakpoints` module to `modules` options of `nuxt.confg.[ts|js]`

```js
// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  modules: ['nuxt3-breakpoints'],
  /// OR
  modules: [
    ['nuxt3-breakpoints', {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      options: {
        throttle: 200,
      }
    }]
  ],
  // ...
  //also you configure it with module key
  'nuxt3-breakpoints': {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    options: {
      throttle: 200,
    }
  },
})
```
Please use one module configure way
### Module default options
```
Options represented before are default
```

### Module default options
```
Options represented before are default
```


### Usage
```js
const bp = useBreakpoints()

const isSmallThanMd = computed(() => bp.value.sMd)

```

```html
<template>
  <div v-if="isSmallThanMd">
    Block enabled on resolutions smaller than Md
  </div>
</template>
```

Composable return ref value with next params

```js
const bp = {
  current: 'xs',

  xs: true,

  sm: false,
  lSm: false,
  sSm: true,

  md: false,
  lMd: false,
  sMd: true,

  lg: false,
  lLg: false,
  sLg: true,

  xl: false,

  width: 0,
  height: 0
}
```

## ©️ LICENSE

MIT
