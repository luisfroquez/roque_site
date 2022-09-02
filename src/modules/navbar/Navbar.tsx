import {
  Button,
  Center,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react'
import { MenuItems } from './MenuItems'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Link from 'next/link'
import { ColorModeToggle } from './ThemeToggle/ColorModeToggle'
import Socials from './Socials'
import { ZacataLogo } from '../../components/Icons/ZacataLogo'

const Navbar = () => {
  const bg = useColorModeValue('#00000009', '#FFFFFF09')
  const color = useColorModeValue('gray.900', 'gray.100')
  const { colorMode } = useColorMode()
  //isLargerThan"md"
  const [isLTmd] = useMediaQuery('(min-width: 48em)')

  return (
    <HStack
      color={color}
      bg={bg}
      justifyContent="space-between"
      p="1em"
      width="48em"
      alignItems="center"
      pos="absolute"
      top="3em"
      zIndex={99}
      backdropFilter="blur(24px)"
      borderRadius="3em"
    >
      <Link href="/">
        {/* <Button fontWeight="normal" fontSize={['md', 'xl']} p={0}>
          LUIS<Text fontWeight="extrabold">ROQUE</Text>
        </Button> */}
        <Link href="#home">
        <Center cursor="pointer" bg="gray.900" w="40px"  h="40px" borderRadius={100} color="white" p="6px">
          <ZacataLogo />
        </Center>
        </Link>
      </Link>
      <HStack>
        <HStack>
          <ColorModeToggle />
          <Socials isLarge={isLTmd} />
        </HStack>
        {isLTmd ? (
          MenuItems.map((m, i) => (
            <Link href={m.link} key={i}>
              <Button
                isActive={false}
                variant={colorMode === 'light' ? 'light' : 'dark'}
                fontSize="1rem"
                borderRadius="2em"
                px={4}
              >
                {m.name}
              </Button>
            </Link>
          ))
        ) : (
          <Button variant="primary">
            <HiOutlineMenuAlt4 />
          </Button>
        )}
      </HStack>
    </HStack>
  )
}

export default Navbar
