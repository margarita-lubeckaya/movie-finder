import ThemeWrapper from '@theme'
import * as React from 'react'
import { ReactNode, useEffect, useState } from 'react'

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
      </S.Page>
    </ThemeWrapper>
  )
}

export default BaseLayout
