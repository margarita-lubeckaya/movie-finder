import styled from 'styled-components'

const ImageStyled = styled.img<{
  $fit?: 'cover' | 'contain'
}>`
  object-fit: ${({ $fit = 'cover' }) => $fit};
  width: 100%;
  height: 100%;
  display: block;
}
`

export default ImageStyled
