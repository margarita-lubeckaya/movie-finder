import styled from 'styled-components'

import * as mixins from '@theme/mixins'

const DescriptionStyled = styled.div<{
  $size?: 'text' | 'description'
}>`
  ${({ theme, $size = 'text' }) =>
    theme.setPropResponsive('font-size', theme.fontSizes[$size], true)};

  max-width: ${mixins.pxToRem(560)};
  line-height: 1.4;
  padding-bottom: ${mixins.pxToRem(40)};

}
`

export default DescriptionStyled
