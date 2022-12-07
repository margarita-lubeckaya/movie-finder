import { ThemeConfig } from './types'

const themeConfig: {
  default: ThemeConfig
  [alternate: string]: Partial<ThemeConfig>
} = {
  default: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: '#908F9F',
      text: '#E7E2F8',
      mainBg: '#050505',
      accent: '#908F9F',
      brand: '#4A60FD',
      brandBright: '#2942F7',
      error: '#f53c8c',
    },
    fonts: {
      base: "'Trap', Arial, Helvetica, sans-serif",
      accent: "'laviossa', Arial, Helvetica, sans-serif",
    },

    fontSizes: {
      hero: {
        xs: 42,
        sm: 60,
        md: 75,
      },
      title: {
        xs: 34,
        sm: 42,
      },
      title2: {
        xs: 24,
        md: 32,
      },
      title3: {
        xs: 20,
        md: 24,
      },
      text: {
        xs: 16,
        sm: 18,
      },
      description: {
        xs: 14,
        xsm: 16,
      },
      buttons: {
        xs: 16,
      },
    },

    sizes: {
      contentInnerWidth: 1560,
      headerStaticHeight: {
        xs: 62,
        sm: 100,
      },
    },

    spacing: {
      contentX: {
        xs: 16,
        xsm: 40,
        md: 90,
      },

      large: {
        xs: 60,
        sm: 150,
        md: 240,
      },
      normal: {
        xs: 60,
        md: 120,
      },
      low: {
        xs: 60,
        md: 90,
      },
      none: {
        xs: 0,
      },
    },

    breakpoints: {
      xs: 0,
      xsm: 576,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },

  light: {
    colors: {
      text: '#050505',
      mainBg: '#E7E2F8',
      accent: '#000000',
    },
  },

  extra: {
    colors: {
      mainBg: '#4f1191',
      text: '#b0f8d7',
      accent: '#f4cdff',
      error: '#ff5871',
    },
  },
}

export default themeConfig

export type TColorTheme = keyof typeof themeConfig
