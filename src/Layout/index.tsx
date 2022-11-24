import * as React from 'react'
import { ReactNode, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ThemeWrapper from '@src/Theme'
import Header from './Header'
import * as S from './styled'

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    const currentTheme = localStorage.getItem('current-theme') || ''
    if (currentTheme) {
      setTheme(JSON.parse(currentTheme))
    }
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('current-theme', JSON.stringify(newTheme))
  }

  return (
    <ThemeWrapper colorTheme={theme}>
      <S.Page>
        <Header onThemeChange={handleThemeChange} selectedTheme={theme} />
        <S.PageMain>{children}</S.PageMain>
        <S.PageFooter></S.PageFooter>
      </S.Page>
    </ThemeWrapper>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
