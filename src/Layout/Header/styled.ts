import styled from 'styled-components'
import * as mixins from '@src/Theme/mixins'
import { NavLink } from 'react-router-dom'

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
`

export const HeaderCentered = styled.div`
  max-width: ${mixins.pxToRem(1920)};
  margin: 0 auto;
  position: relative;
  padding: 2rem var(--base-spacing-content-x);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  align-content: center;

  ${({ theme }) => theme.mediaBreakpointUp('sm')} {
    grid-template-columns: 2fr 5fr;
  }
`

export const LogoLink = styled(NavLink)`
  font-size: 1.6rem;
  font-weight: bold;
`

export const Nav = styled.nav`
  display: grid;
  align-items: center;
  align-content: center;

  ${({ theme }) => theme.mediaBreakpointUp('sm')} {
    grid-template-columns: 3fr 2fr;
  }
`

export const NavMenuList = styled.ul`
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  list-style: none;
  gap: ${mixins.pxToRem(50)};
  justify-content: center;
  justify-self: center;

  ${({ theme }) => theme.mediaBreakpointDown('sm')} {
    display: none;
  }
`

export const NavMenuItem = styled.li`
  position: relative;
`

export const MainNavLink = styled(NavLink)`
  white-space: nowrap;
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 0.25em;
  ${({ theme }) =>
    theme.setPropResponsive('font-size', theme.fontSizes.title3, true)}

  --link-underline: none;
  --link-underline-hover: none;
  --link-color-hover: ${({ theme }) => theme.colors.brand};

  &.active {
    --link-color: ${({ theme }) => theme.colors.brand};
    font-weight: 800;
  }
`

export const ExtraList = styled.ul`
  display: flex;
  gap: 1em;
  justify-self: end;
`

export const ExtraItem = styled.li``
