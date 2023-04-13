import {
  Center,
  CenterProps,
  ColorMode,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import SlideIn from 'core/components/Animations/SlideIn'
import {
  DARK_BG,
  HOME_DARK_BG_GRADIENT,
  HOME_LIGHT_BG_GRADIENT,
  LIGHT_BG
} from 'core/utils/constants'
import { HiChevronDown } from 'react-icons/hi'
import styles from 'core/styles/modules/home/home.module.css'
import Link from 'next/link'

const texts = [
  'Frontend developer',
  'Graphic designer',
  'Interface lover',
  'Minimalist'
]

const Home = ({ colorMode }: { colorMode: ColorMode }) => {
  const handleClickScroll = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleClickScrolltoContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const homeButtonsProps: CenterProps = {
    border: '2px',
    borderColor: colorMode === 'light' ? LIGHT_BG : DARK_BG,
    w: '100%',
    h: '100%',
    borderRadius: 20,
    fontSize: { base: 'lg', xl: '2.5rem' },
    cursor: 'pointer',
    transition: '1s',
    _hover: { bg: colorMode === 'light' ? 'gray.100' : 'gray.900' }
  }

  return (
    <VStack
      minH="100%"
      maxH="100%"
      w="100%"
      justifyContent="center"
      id="home"
      pos="relative"
    >
      <SlideIn width="100%" height="75%">
        <Flex
          display="flex"
          flexDir="column"
          w="100%"
          h="100%"
          border="2px"
          borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
          bgGradient={
            colorMode === 'light'
              ? HOME_LIGHT_BG_GRADIENT
              : HOME_DARK_BG_GRADIENT
          }
          borderRadius={20}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <VStack p={4} alignItems="flex-start" spacing={0}>
            <Heading
              fontSize="3rem"
              lineHeight="none"
              color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
            >
              hi!
            </Heading>
            <Heading fontSize="3rem" lineHeight="none">
              {' '}
              I'm Luis.
            </Heading>
            <Text  fontSize="1rem" pt={2}>
              A cool frontend <strong>designveloper</strong> who loves
              minimalistic and modern UI design.
            </Text>
          </VStack>
          <HStack
            justifyContent="flex-start"
            maxW="100%"
            overflow="hidden"
            spacing={4}
            h="100%"
            alignItems="flex-end"
          >
            <HStack className={styles.slider} spacing={4}>
              {texts.map((text, i) => (
                <Text
                  key={i}
                  fontSize={{ base: '15rem', md: '20rem', xl: '24rem' }}
                  lineHeight={{ base: '15rem', md: '20rem', xl: '24rem' }}
                  fontWeight="bold"
                  minW="max-content"
                  letterSpacing={{ base: -10, md: -20 }}
                  textTransform="uppercase"
                  opacity={i % 2 === 0 ? 1 : 0.5}
                  userSelect="none"
                  filter="auto"
                  transition="0.5s"
                  _hover={{ brightness: 3 }}
                >
                  {text}
                </Text>
              ))}
            </HStack>
            <HStack className={styles.slider} spacing={4}>
              {texts.map((text, i) => (
                <Text
                  key={i}
                  fontSize={{ base: '10rem', md: '20rem', xl: '24rem' }}
                  lineHeight={{ base: '10rem', md: '20rem', xl: '24rem' }}
                  fontWeight={600}
                  minW="max-content"
                  letterSpacing={{ base: -10, md: -20 }}
                  textTransform="uppercase"
                  opacity={i % 2 === 0 ? 1 : 0.5}
                  userSelect="none"
                  filter="auto"
                  transition="0.5s"
                  _hover={{ brightness: 3 }}
                >
                  {text}
                </Text>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </SlideIn>

      <Stack w="100%" h="25%" direction={{ base: 'column', md: 'row' }}>
        <HStack h="100%" w="100%">
          <SlideIn direction="toLeft" delay={1}>
            <Center {...homeButtonsProps} onClick={handleClickScrolltoContact}>
              Get in touch
            </Center>
          </SlideIn>
          <SlideIn direction="toLeft" delay={0.5}>
            <Link
              href="https://read.cv/roque.dev"
              target="_blank"
            >
              <Center
                {...homeButtonsProps}
                // onClick={handleClickScroll}
              >
                Resume
              </Center>
            </Link>
          </SlideIn>
        </HStack>
        <SlideIn direction="toLeft">
          <Center {...homeButtonsProps} onClick={handleClickScroll}>
            <HiChevronDown />
          </Center>
        </SlideIn>
      </Stack>
    </VStack>
  )
}

export default Home
