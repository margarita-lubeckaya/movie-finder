import * as React from 'react'
import { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import ThemeWrapper from '@src/Theme'
import Header from './Header'
import * as S from './styled'

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('default')

  return (
    <ThemeWrapper colorTheme={theme}>
      <S.Page>
        <Header
          onThemeChange={(newTheme) => {
            setTheme(newTheme)
          }}
        />
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
