import * as React from 'react'

import * as S from './styled'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderCentered>
        <S.LogoLink to="/">movie finder</S.LogoLink>
        <S.Nav>
          <S.NavMenuList>
            <S.NavMenuItem>
              <S.MainNavLink to="/movies">Movies</S.MainNavLink>
            </S.NavMenuItem>
            <S.NavMenuItem>
              <S.MainNavLink to="/about">About</S.MainNavLink>
            </S.NavMenuItem>
          </S.NavMenuList>
          <S.ExtraList>
            <S.ExtraItem>lang</S.ExtraItem>
            <S.ExtraItem>theme</S.ExtraItem>
          </S.ExtraList>
        </S.Nav>
      </S.HeaderCentered>
    </S.Header>
  )
}

export default Header
