import styled, { keyframes } from 'styled-components'

import * as mixins from '@theme/mixins'

const liquidWidth = keyframes`
  0% {
    padding: 0 ${mixins.pxToRem(20)};
  }
  10% {
    padding: 0 ${mixins.pxToRem(25)};
  }
  50% {
    padding: 0 ${mixins.pxToRem(122)};
  }
  90% {
    padding: 0 ${mixins.pxToRem(25)};
  }
  100% {
    padding: 0 ${mixins.pxToRem(20)};
  }
}
`
const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;

  &:after {
    content: '';
    display: block;
    width: ${mixins.pxToRem(40)};
    height: ${mixins.pxToRem(40)};
    border: ${mixins.pxToRem(1)} solid ${(props) => props.theme.colors.brand};
    border-radius: ${mixins.pxToRem(26)};
    animation: ${liquidWidth} 1.5s linear infinite;
  }
`

export default LoaderStyled
