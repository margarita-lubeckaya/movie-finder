import PropTypes from 'prop-types'
import * as React from 'react'
import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import ThemeCreator from './ThemeCreator'

const ThemeWrapper = ({
  children,
  colorTheme,
}: {
  children: ReactNode
  colorTheme: string
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

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  colorTheme: PropTypes.oneOf(['light', 'default', 'extra']),
}

ThemeWrapper.defaultProps = {
  colorTheme: 'default',
}

export default ThemeWrapper
