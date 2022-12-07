import * as React from 'react'
import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import ThemeCreator from './ThemeCreator'
import { TColorTheme } from './themeConfig'

const ThemeWrapper = ({
  children,
  colorTheme,
}: {
  children: ReactNode
  colorTheme: TColorTheme
}) => {
  const defaultTheme = new ThemeCreator({ colorTheme })

  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  useEffect(() => {
    appHeight()
    window.addEventListener('resize', appHeight)
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
