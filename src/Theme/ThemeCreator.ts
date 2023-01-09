import { FlattenSimpleInterpolation, css } from 'styled-components'

import * as mixins from './mixins'
import themeConfig, { TColorTheme } from './themeConfig'
import { Breakpoint, ResponsiveProp, ThemeConfig } from './types'

class ThemeCreator implements ThemeConfig {
  pxToRem

  breakpoints

  fonts

  colors

  sizes

  spacing

  fontSizes

  constructor(config: { colorTheme: TColorTheme }) {
    this.breakpoints = themeConfig.default.breakpoints
    this.fonts = { ...themeConfig.default.fonts }
    this.colors = { ...themeConfig.default.colors }
    this.sizes = { ...themeConfig.default.sizes }
    this.spacing = { ...themeConfig.default.spacing }
    this.fontSizes = { ...themeConfig.default.fontSizes }
    this.pxToRem = mixins.pxToRem
    if (config?.colorTheme && config.colorTheme in themeConfig) {
      const selectedTheme = themeConfig[config.colorTheme]
      Object.keys(selectedTheme).forEach((key) => {
        Object.assign(
          this[key as keyof ThemeConfig],
          selectedTheme[key as keyof typeof selectedTheme]
        )
      })
    }
  }

  setPropResponsive(
    cssProp: string,
    valuesList: ResponsiveProp,
    convertToRem: boolean
  ) {
    let resultedStyles:
      | FlattenSimpleInterpolation
      | FlattenSimpleInterpolation[] = []

    if (cssProp && valuesList) {
      if (typeof valuesList === 'object') {
        const valuesListObj = valuesList as Exclude<
          ResponsiveProp,
          number | string
        >

        resultedStyles = Object.keys(valuesListObj).map((breakpoint) => {
          const propValue =
            valuesListObj[breakpoint as keyof typeof valuesListObj]

          const isZeroPoint = this.getBreakpoint(breakpoint as Breakpoint) === 0

          const breakpointStyle = css`
            ${cssProp}: ${convertToRem ? this.pxToRem(propValue) : propValue};
          `

          return isZeroPoint
            ? breakpointStyle
            : css`
                ${this.mediaBreakpointUp(breakpoint as Breakpoint)} {
                  ${breakpointStyle}
                }
              `
        })
      } else {
        resultedStyles = css`
          ${cssProp}: ${convertToRem ? this.pxToRem(valuesList) : valuesList};
        `
      }
    }

    return resultedStyles
  }

  getBreakpoint(screen: Breakpoint): number {
    return this.breakpoints[screen]
  }

  mediaBreakpointUp(screen: Breakpoint): string {
    const size = this.getBreakpoint(screen)
    return `@media screen and (min-width: ${this.pxToRem(size)})`
  }

  mediaBreakpointDown(screen: Breakpoint): string {
    const size = this.getBreakpoint(screen) - 0.1
    return `@media screen and (max-width: ${this.pxToRem(size)})`
  }
}

export default ThemeCreator
