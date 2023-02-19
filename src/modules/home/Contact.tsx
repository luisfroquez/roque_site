import {
  Box,
  Center,
  ColorMode,
  Heading,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useRef } from 'react'
import { RoqueLogo } from 'public/svg/RoqueLogo'
import {
  DARK_BG,
  HOME_DARK_BG_GRADIENT,
  HOME_LIGHT_BG_GRADIENT,
  LIGHT_BG
} from 'core/utils/constants'

const links = [
  { name: 'EMAIL', href: 'mailto:luisfroquez@gmail.com' },
  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/luisfroquez/' },
  { name: 'GITHUB', href: 'https://github.com/luisfroquez' },
  { name: 'DRIBBLE', href: 'https://dribbble.com/Zacata' }
]

const Contact = ({ colorMode }: { colorMode: ColorMode }) => {
  const ref = useRef<HTMLHeadingElement>(null)

  const height = ref.current?.clientHeight ?? 0
  const width = ref.current?.clientWidth ?? 0

  function handleMove(e: any) {
    const xVal = e.layerX
    const yVal = e.layerY

    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)

    const string =
      'perspective(500px) scale(1.1) rotateX(' +
      xRotation +
      'deg) rotateY(' +
      yRotation +
      'deg)'

    if (ref.current) {
      ref.current.style.transform = string
    }
  }

  return (
    // <Center
    //   as="div"
    //   id="contact"
    //   minH="100vh"
    //   maxH="100vh"
    //   w="100%"
    //   flexDir="column"
    //   color={color}
    // >
    //   <Box
    //     w={{ base: '90%', md: '60em' }}
    //     p={{ base: 0, md: '2em' }}
    //     h="30em"
    //     mt="8em"
    //     gap="8em"
    //     borderRadius="2.5em"
    //     display="flex"
    //     flexDirection={{ base: 'column', md: 'row' }}
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <VStack alignItems="flex-startf" justifyContent="center">
    //       <a
    //         href="mailto:luisfroquez@gmail.com"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Heading {...headingStyleProps}>EMAIL</Heading>
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/luisfroquez/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Heading {...headingStyleProps}>LINKEDIN</Heading>
    //       </a>
    //       <a
    //         href="https://github.com/luisfroquez"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Heading {...headingStyleProps}>GITHUB</Heading>
    //       </a>

    //       <a
    //         href="https://dribbble.com/Zacata"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Heading {...headingStyleProps}>DRIBBLE</Heading>
    //       </a>
    //     </VStack>

    //     <Center
    //       ref={ref}
    //       id="roqueLogo"
    //       w="auto"
    //       dropShadow="2xl"
    //       h="100%"
    //       transition="all 0.25s ease"
    //       onMouseEnter={() =>
    //         ref.current?.addEventListener('mousemove', handleMove)
    //       }
    //       onMouseLeave={() => {
    //         if (ref.current) {
    //           ref.current.style.transform = ''
    //           ref.current.removeEventListener('mousemove', handleMove)
    //         }
    //       }}
    //     >
    //       <RoqueLogo fill={color} width="auto" />
    //     </Center>
    //   </Box>
    // </Center>
    <Center as="div" id="work" w="100%" flexDir="row" gap={2}>
      <Center
        w="100%"
        p={8}
        h="100%"
        border="2px"
        borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
        borderRadius={20}
        bgGradient={
          colorMode === 'light' ? HOME_LIGHT_BG_GRADIENT : HOME_DARK_BG_GRADIENT
        }
      >
        <Heading fontSize="4xl" lineHeight="none">
          Feel free to contact me.
        </Heading>
      </Center>
      <VStack w="100%">
        {links.map((link, i) => (
          <Center
            key={i}
            p={8}
            borderRadius={20}
            w="100%"
            h="100%"
            // minW="12em"
            maxW="50vw"
            border="2px"
            borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
            _hover={{
              bg: colorMode === 'light' ? LIGHT_BG : DARK_BG,
              fontSize: '6rem'
            }}
            transition="all 0.8s"
            textTransform="capitalize"
            cursor="pointer"
            fontSize="4xl"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Heading fontSize="inherit">{link.name}</Heading>
            </a>
          </Center>
        ))}
      </VStack>
    </Center>
  )
}

export default Contact
