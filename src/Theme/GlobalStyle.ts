import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import fonts from './fonts'
import cssVars from './css-vars'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${cssVars}
  html {
    font-size: 100%;
    height: 100%;
  }

  body {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.base};
    font-style: normal;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    min-height: 100%;
    flex-direction: column;
    background: var(--base-color-main-bg);

    height: 100%;
    overflow: hidden;
  }

  .grecaptcha-badge {
    opacity: 0;
    visibility: hidden;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  img {
    display: inline-block;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }


  button,
  a {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
    color: var(--link-color, inherit);
    text-decoration: var(--link-underline, underline);

    --link-underline-hover: underline;
    --link-color-hover: ${({ theme }) => theme.colors.accent};

    transition: color 0.3s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    tap-highlight-color: transparent;

    &:hover {
      color: var(--link-color-hover);
      text-decoration: var(--link-underline-hover);
      cursor: pointer;
    }

    &:focus-visible {
      outline: 1px solid ${({ theme }) => theme.colors.accent};
      outline-offset: 5px;
    }

    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    }
  }

  button,
  label {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    tap-highlight-color: transparent;

    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
      tap-highlight-color: transparent;
    }
  }

  #root {
    //all: inherit;
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export default GlobalStyle
