export interface ModuleOptions {
  sm: number,
  md: number,
  lg: number,
  xl: number,
  options: {
    throttle: number
  }
}

export const defaultOptions: ModuleOptions = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  options: {
    throttle: 200
  }
}
