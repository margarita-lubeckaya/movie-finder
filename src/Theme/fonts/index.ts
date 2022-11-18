import { css } from 'styled-components'

import * as mixins from '../mixins'

import trapWoff2 from './Trap-Regular.woff2'
import trapWoff from './Trap-Regular.woff'
import trapExtraBoldWoff2 from './Trap-ExtraBold.woff2'
import trapExtraBoldWoff from './Trap-ExtraBold.woff'
import laviossaWoff2 from './laviossa-medium.woff2'
import laviossaWoff from './laviossa-medium.woff'

const includeFonts = css`
  ${mixins.creatorFontFamily({
    name: '"Trap"',
    woff2: trapWoff2,
    woff: trapWoff,
    weight: '400',
    style: 'normal',
  })}
  ${mixins.creatorFontFamily({
    name: '"Trap"',
    woff2: trapExtraBoldWoff2,
    woff: trapExtraBoldWoff,
    weight: '800',
    style: 'normal',
  })}
  ${mixins.creatorFontFamily({
    name: '"laviossa"',
    woff2: laviossaWoff2,
    woff: laviossaWoff,
    weight: '400',
    style: 'normal',
  })}
`

export default includeFonts
