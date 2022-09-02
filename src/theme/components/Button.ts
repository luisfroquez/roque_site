import { whiten, darken } from '@chakra-ui/theme-tools'

export const Button = {
  // style object for base or default style
  baseStyle: {
    bg: 'transparent',
    _focus: {
      boxShadow: 'none'
    }
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      px: 2,
      py: 1,
      borderRadius: "2em",
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    light: {
      color: 'black',
      fontWeight: 'normal',
      _hover: {
        bg: darken('white', 5)
      },
      _focus: {
        borderColor: 'black',
        paddingBottom: 2,
        borderBottomWidth: 1
      },
      _active: {
        borderColor: 'black',
        paddingBottom: 2,
        borderBottomWidth: 1
      }
    },
    dark: {
      color: 'white',

      fontWeight: 'normal',
      _hover: {
        bg: whiten('black', 10)
      },
      _focus: {
        borderColor: 'white',
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderRadius: 0,
      },
      _active: {
        borderColor: 'white',
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderRadius: 0,
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'sm',
    variant: '',
  }
}
