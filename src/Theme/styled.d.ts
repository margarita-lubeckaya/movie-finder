import 'styled-components'
import { Breakpoint, ResponsiveProp, ThemeConfig } from '@src/Theme/types'
import { FlattenSimpleInterpolation } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {
    pxToRem: (px: number | string) => string
    setPropResponsive: (
      cssProp: string,
      valuesList: ResponsiveProp,
      convertToRem: boolean
    ) => FlattenSimpleInterpolation | FlattenSimpleInterpolation[]
    mediaBreakpointUp: (screen: Breakpoint) => string
    mediaBreakpointDown: (screen: Breakpoint) => string
  }
}
