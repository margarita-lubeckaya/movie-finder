import { css } from 'styled-components'

export const pxToRem = (px) => {
  return `${px / 16}rem`
}

export const getRGBStringFromHEXColor = (hexColor) => {
  const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)

  return `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`
}
export const getRGBA = (hexColor, alfa) => {
  const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)

  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(
    b,
    16
  )}, ${alfa})`
}

// eslint-disable-next-line consistent-return
export const creatorFontFamily = ({ name, woff, woff2, weight, style }) => {
  if (woff2 && name) {
    return css`
      @font-face {
        font-family: ${name};
        font-weight: ${weight || 'normal'};
        font-style: ${style || 'normal'};
        src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
        font-display: swap;
      }
    `
  }
  return null
}

export const visuallyHiddenCss = () => css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`

export const blurredBackground = () => css`
  background: rgba(19, 22, 41, 0.99);
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background: linear-gradient(
        0deg,
        rgba(74, 96, 253, 0.1),
        rgba(74, 96, 253, 0.1)
      ),
      linear-gradient(0deg, rgba(0, 1, 7, 0.8), rgba(0, 1, 7, 0.8)),
      rgba(36, 41, 52, 0.1);
    backdrop-filter: blur(30px);
  }
`
