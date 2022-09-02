import {
  useColorMode,
  useColorModeValue,
  Button,
  Tooltip
} from '@chakra-ui/react'
import { MoonIcon } from '../../../components/Icons/MoonIcon'
import { SunIcon } from '../../../components/Icons/SunIcon'

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue('gray.100', 'gray.900')
  const bg = useColorModeValue('gray.500', 'white')
  const SwitchIcon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />
  const label = colorMode === 'light' ? 'OFF' : 'ON'

  return (
    <Tooltip
      label={`Lights ${label}`}
      background={bg}
      color={color}
      placement="left"
      shadow="none"
      borderRadius="2em"
    >
      <Button
        onClick={toggleColorMode}
        variant={colorMode === 'light' ? 'light' : 'dark'}
        _focus={{ border: 'none' }}
        mr={1}
      >
        {SwitchIcon}
      </Button>
    </Tooltip>
  )
}
