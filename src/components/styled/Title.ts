import styled from 'styled-components'

import * as mixins from '@theme/mixins'

const TitleStyled = styled.div<{
  $size?: 'hero' | 'title' | 'title2' | 'subtitle'
}>`
  ${({ theme, $size = 'title' }) =>
    theme.setPropResponsive('font-size', theme.fontSizes[$size], true)}
  line-height: 1.2;
  padding-bottom: ${mixins.pxToRem(60)};
  max-width: ${mixins.pxToRem(500)};
  font-weight: 600;
`

export default TitleStyled
