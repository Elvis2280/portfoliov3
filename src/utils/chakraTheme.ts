import { extendTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#F0FDFC',
        100: '#CCFBF7',
        200: '#99F6EF',
        300: '#5FE9E5',
        400: '#2ED3D2',
        500: '#15B7B9',
        600: '#0E8F93',
        700: '#107276',
        800: '#115A5E',
        900: '#134B4E',
      },
    },
  },
  withProse()
)

export default theme
