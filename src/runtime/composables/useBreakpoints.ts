import { useNuxtApp } from 'nuxt/app';
import {ref, onBeforeMount, onBeforeUnmount} from "#build/imports";

const defaultBreakpoints = {
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

const transformBreakpoints = (breakpoints, { width, height }, options) => {
  const { sm, md, lg, xl } = options

  const breakpointRoles = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 }

  let currentActive = 'xs'

  switch (true) {
    case width >= xl:
      currentActive = 'xl'
      break
    case width >= lg:
      currentActive = 'lg'
      break
    case width >= md:
      currentActive = 'md'
      break
    case width >= sm:
      currentActive = 'sm'
      break
    default:
      currentActive = 'xs'
      break
  }

  const decideLargeOrSmallThan = (point, large = false) =>
    large
      ? breakpointRoles[point] <= breakpointRoles[currentActive]
      : breakpointRoles[point] >= breakpointRoles[currentActive]

  const transformData = {
    sm: currentActive === 'sm',
    lSm: decideLargeOrSmallThan('sm', true),
    sSm: decideLargeOrSmallThan('sm'),

    md: currentActive === 'md',
    lMd: decideLargeOrSmallThan('md', true),
    sMd: decideLargeOrSmallThan('md'),

    lg: currentActive === 'lg',
    lLg: decideLargeOrSmallThan('lg', true),
    sLg: decideLargeOrSmallThan('lg')
  }

  Object.assign(breakpoints, transformData, {
    current: currentActive,
    xs: currentActive === 'xs',
    xl: currentActive === 'xl',
    width: ~~width,
    height: ~~height
  })
}

export function throttle(fn: Function, ms: number) {
  let isCoolDown = false, lastArgs, lastThis;

  function wrapper() {
    if (isCoolDown) {
      lastThis = this;
      lastArgs = arguments;

      return;
    }

    fn.apply(this, arguments);

    isCoolDown = true;

    setTimeout(() => {
      isCoolDown = false

      if (lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastThis = lastArgs = null;
      }
    }, ms);
  }

  return wrapper;
}

export const useBreakpoints = () => {
  const { $breakpointsOptions } = useNuxtApp()

  let resizeObserver, bodyElem
  const $breakpoints = ref(defaultBreakpoints)

  onBeforeMount(() => {
    bodyElem = document.querySelector('body')

    resizeObserver = new ResizeObserver(throttle((entries) => {
        const [{ contentRect }] = entries
        transformBreakpoints($breakpoints.value, contentRect, $breakpointsOptions)
      }, $breakpointsOptions.options.throttle)
    )

    resizeObserver.observe(bodyElem)
  })

  onBeforeUnmount(() => {
    resizeObserver.unobserve(bodyElem)
  })

  return $breakpoints
}
