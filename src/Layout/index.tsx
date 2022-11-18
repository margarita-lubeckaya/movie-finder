import * as React from 'react'
import { ReactNode } from 'react'
import PropTypes from 'prop-types'
import ThemeWrapper from '@src/Theme'
import Header from './Header'
import * as S from './styled'

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeWrapper colorTheme="extra">
      <S.Page>
        <Header />
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
