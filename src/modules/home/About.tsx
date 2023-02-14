import {
  Center,
  VStack,
  Stack,
  useColorMode,
  Text,
  HStack
} from '@chakra-ui/react'
import SlideIn from 'core/components/Animations/SlideIn'
import { DARK_BG, HOME_DARK_BG_GRADIENT, HOME_LIGHT_BG_GRADIENT, LIGHT_BG } from 'core/utils/constants'
// import CustomGlobe from '../../components/3D/CustomGlobe'
import { HiChevronRight } from 'react-icons/hi'

import dynamic from 'next/dynamic'
import LogoFollowMouse from 'core/components/3D/LogoFollowMouse'
const CustomGlobe = dynamic(() => import('core/components/3D/CustomGlobe'), {
  ssr: false
})

const About = () => {
  const { colorMode } = useColorMode()

  return (
    <Center
      as="div"
      id="about"
      minH={{ base: 'unset', md: '100%' }}
      w="100%"
      flexDir="column"
      justifyContent="space-between"
    >
      <Stack h="100%" w="100%" direction={{ base: 'column', md: 'row' }}>
        <SlideIn
          styles={{
            w: { base: '100%', md: '40%' },
            h: { base: 'max-content', md: '100%' }
          }}
        >
          <VStack
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
            p={8}
            spacing={8}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <CustomGlobe />
            <VStack alignItems="flex-start" w="100%" spacing={8}>
              <Text
                fontSize={{ base: 'xl', md: '2xl', xl: '4xl' }}
                lineHeight="shorter"
              >
                I'm a <strong>frontend developer and graphic designer</strong>{' '}
                currently based in Buenos Aires.
              </Text>
              <HStack
                color={colorMode === 'light' ? 'gray.400' : 'gray.700'}
                w="100%"
                justifyContent="space-between"
              >
                <Text fontSize="xl" lineHeight="none">
                  More about me
                </Text>
                <HiChevronRight />
              </HStack>
            </VStack>
          </VStack>
        </SlideIn>
        <SlideIn
          direction="toLeft"
          delay={0.5}
          styles={{
            w: { base: '100%', md: '60%' },
            h: { base: 'auto', md: '100%' }
          }}
        >
          <LogoFollowMouse
            p={{ base: 20, md: 40 }}
            w="100%"
            h="100%"
            border="2px"
            borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
            borderRadius={20}
            _hover={{ borderColor: 'transparent' }}
          />
        </SlideIn>
      </Stack>
    </Center>
  )
}

export default About
