import 'styled-components'
import { FlattenSimpleInterpolation } from 'styled-components'

import { Breakpoint, ResponsiveProp, ThemeConfig } from './types'

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
