import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as mixins from '@theme/mixins'

export const ButtonStyled = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.brand};
  border-radius: ${mixins.pxToRem(26)};
  padding: ${mixins.pxToRem(12)} ${mixins.pxToRem(16)};
  background-color: transparent;
  border: ${mixins.pxToRem(1)} solid ${({ theme }) => theme.colors.brand};
  font-weight: 500;
  font-size: ${mixins.pxToRem(16)};
  line-height: 100%;
  letter-spacing: 0.01em;
  min-width: ${mixins.pxToRem(120)};

  transition: border 0.2s linear, background-color 0.2s linear,
    box-shadow 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brandBright};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.brandBright};
    box-shadow: 0 2px 10px rgba(15, 27, 116, 0.5),
      0 4px 30px rgba(15, 27, 116, 0.4), 2px 10px 120px rgba(14, 33, 171, 0.35);
  }

  &:disabled {
    cursor: unset;
    pointer-events: none;
    opacity: 50%;

    &:hover {
      color: ${({ theme }) => theme.colors.gray};
      background: none;
      box-shadow: none;
    }
  }
`

export default ButtonStyled
