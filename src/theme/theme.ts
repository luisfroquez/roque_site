import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { Button } from './components/Button'
import {
  fonts,
  fontSizes,
  fontWeights,
  lineWeights,
  letterSpacings
} from './fonts'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
}

export const components = { Button }

export const theme = extendTheme({
  fonts,
  colors,
  fontSizes,
  fontWeights,
  lineWeights,
  letterSpacings,
  breakpoints,
  components,
  config
})
