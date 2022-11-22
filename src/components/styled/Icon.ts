import styled, { css } from 'styled-components'

const setRatio = (ratioStr = '1/1') => {
  const [widthSize, heightSize] = ratioStr.split('/')
  return css`
    width: ${widthSize}em;
    height: ${heightSize}em;
  `
}

const IconStyled = styled.svg<{ $iconRatio: `${number}/${number}` }>`
  display: inline-block;
  aspect-ratio: ${({ $iconRatio }) => $iconRatio};
  ${({ $iconRatio = '1/1' }) => setRatio($iconRatio)}
  fill: currentColor;
`

IconStyled.defaultProps = {
  $iconRatio: '1/1',
}

export default IconStyled
