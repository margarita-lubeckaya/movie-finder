export type Breakpoint = 'xs' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Breakpoints = {
  [size in Breakpoint]: number
}

export type ResponsiveProp =
  | {
      [size in Breakpoint]?: number | string
    }
  | string
  | number

export type ConfigInline = { [key: string]: number | string }
export type ConfigResponsive = { [key: string]: ResponsiveProp }

export interface ThemeConfig {
  // pxToRem : (px:number) => string
  breakpoints: Breakpoints
  fonts: ConfigInline
  colors: ConfigInline
  sizes: ConfigResponsive
  spacing: ConfigResponsive
  fontSizes: ConfigResponsive
}
