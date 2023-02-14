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
import { ZacataLogo } from '@/public/Icons/ZacataLogo'
import { AnimatePresence } from 'framer-motion'
import SlideIn from 'core/components/Animations/SlideIn'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const bg = useColorModeValue('#00000009', '#FFFFFF09')
  const color = useColorModeValue('gray.900', 'gray.50')
  const { colorMode } = useColorMode()

  //isLargerThan"md"
  const [isLTmd] = useMediaQuery('(min-width: 48em)')

  const [visible, setVisible] = useState(false)

  const container = document?.getElementById('main')

  const scrollToTop = () => container?.scrollTo(0, 0)

  const handleScroll = () => {
    const currentScrollPos = container?.scrollTop

    if (currentScrollPos && currentScrollPos > 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    container?.addEventListener('scroll', handleScroll)

    return () => container?.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <AnimatePresence>
        {visible && (
          <SlideIn
            direction="toDown"
            duration={0.75}
            styles={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              color: color,
              bg: bg,
              p: '1em',
              w: '90%',
              h: 'auto',
              maxWidth: '48em',
              pos: 'absolute',
              top: 2,
              zIndex: 99,
              backdropFilter: 'blur(24px)',
              borderRadius: '3em'
            }}
          >
            <Center
              cursor="pointer"
              bg="gray.900"
              w="40px"
              h="40px"
              borderRadius={100}
              color="gray.50"
              p="6px"
              onClick={scrollToTop}
            >
              <ZacataLogo />
            </Center>
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
          </SlideIn>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
