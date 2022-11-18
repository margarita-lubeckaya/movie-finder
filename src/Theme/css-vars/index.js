import { css } from 'styled-components'

export const globalVars = ({ theme }) => {
  return css`
      :root {
        --base-z-index: ${theme.zIndex.base};
        --base-cursor: default;
        --base-cursor-hover: pointer;
        --base-content-inner-width: ${theme.sizes.contentInnerWidth};
        --base-color-main-bg: ${theme.colors.mainBg};
        --base-color-gray: ${theme.colors.gray};
        --base-color-brand: ${theme.colors.brand};

        --base-font-accent: ${theme.fonts.accent};

        --app-height: 100vh;

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

        ${theme.setPropResponsive(
          '--fs-header-logo',
          theme.fontSizes.headerLogo,
          true
        )}

        ${theme.setPropResponsive('--fs-hero', theme.fontSizes.hero, true)}
        ${theme.setPropResponsive(
          '--fs-hero-marked',
          theme.fontSizes.heroMarked,
          true
        )}


        --cursor-z-index: ${theme.zIndex.cursor};


      }
    }
    `
}

export default globalVars
