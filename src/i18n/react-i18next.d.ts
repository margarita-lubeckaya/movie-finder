import 'react-i18next'

import about from '../../public/locales/en/about.json'
import allMovies from '../../public/locales/en/allMovies.json'
import common from '../../public/locales/en/common.json'
import home from '../../public/locales/en/home.json'

declare module 'react-i18next' {
  interface Resources {
    common: typeof common
    about: typeof about
    allMovies: typeof allMovies
    home: typeof home
  }
}
