import { DefaultTheme, css } from 'styled-components'

export const globalVars = ({ theme }: { theme: DefaultTheme }) => {
  return css`
    :root {
      --base-content-inner-width: ${theme.sizes.contentInnerWidth};
      --base-color-main-bg: ${theme.colors.mainBg};
      --base-color-gray: ${theme.colors.gray};
      --base-color-brand: ${theme.colors.brand};

      --base-font-accent: ${theme.fonts.accent};

      --app-height: 100vh;

      ${theme.setPropResponsive(
        '--container-max-width',
        theme.sizes.contentInnerWidth,
        true
      )}

      ${theme.setPropResponsive(
        '--base-spacing-content-x',
        theme.spacing.contentX,
        true
      )}

      ${theme.setPropResponsive(
        '--header-static-height',
        theme.sizes.headerStaticHeight,
        true
      )}

      ${theme.setPropResponsive('--fs-hero', theme.fontSizes.hero, true)}

    }
  }
  `
}

export default globalVars
