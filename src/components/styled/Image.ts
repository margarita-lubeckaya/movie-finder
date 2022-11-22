import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageStyled = styled.img<{
  $fit?: 'cover' | 'contain'
}>`
  object-fit: ${({ $fit = 'cover' }) => $fit};
  width: 100%;
  height: 100%;
  display: block;
}
`

ImageStyled.propTypes = {
  $fit: PropTypes.oneOf(['cover', 'contain']),
}
ImageStyled.defaultProps = {
  $fit: 'cover',
}

export default ImageStyled
