// DescriptionStyled

import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as mixins from '@src/Theme/mixins'

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

DescriptionStyled.propTypes = {
  $size: PropTypes.oneOf(['text', 'description']),
}
DescriptionStyled.defaultProps = {
  $size: 'text',
}

export default DescriptionStyled
