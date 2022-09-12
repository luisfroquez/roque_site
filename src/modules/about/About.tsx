import {
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Flex,
  Stack
} from '@chakra-ui/react'
import styles from '../../styles/modules/home/about.module.css'
import ZacataStack from './ZacataStack'

const About = () => {
  const color = useColorModeValue('black', 'gray.100')
  const aboutColor = useColorModeValue('gray.50', 'gray.500')
  return (
    <Center
      as="div"
      id="about"
      minH="100vh"
      maxH="100vh"
      w="100%"
      flexDir="column"
      color={color}
      justifyContent="space-between"
    >
      <Center h="100%" w="100%" mt="8em">
        <Box
          border="1px"
          borderColor="#40404180"
          w={{ base: '90%', md: '60em' }}
          minH="22em"
          borderRadius="2.5em"
          flexDirection={{ base: 'column', md: 'row' }}
          display="flex"
          p={{ base: 0, md: '2em' }}
        >
          <Box
            w={{ base: '100%', md: '50%' }}
            h="100%"
            alignItems="center"
            justifyContent="flex-end"
            pos="relative"
          >
            <img
              className={styles.img}
              src="/Luis-Roque.png"
              alt="Foto de Luis Roque"
            />
          </Box>
          <Flex
            w={{ base: '100%', md: '50%' }}
            mt={{ base: '20em', md: '0' }}
            h="fill"
            justifyContent="space-between"
            flexDir="column"
            p={{ base: 0, md: '1em' }}
          >
            <VStack
              align="flex-end"
              w="100%"
              spacing={0}
              px={{ base: '2em', md: 0 }}
              overflow="hidden"
              pos="relative"
              h="6em"
              justify="flex-end"
            >
              <div className={styles.divName}>
                <Heading fontSize="2rem" lineHeight="2rem">
                  Luis Roque
                </Heading>
                <Text lineHeight="0.85rem" fontSize="0.85rem">
                  Front End Developer + Graphic Designer
                </Text>
              </div>
              <Text
                fontSize={{ base: '8rem', md: '10rem' }}
                fontWeight="bold"
                color={aboutColor}
                pos="absolute"
                bottom="-0.48em"
                alignSelf={{ base: 'center', md: '' }}
              >
                ABOUT
              </Text>
            </VStack>
            <VStack
              align="flex-end"
              maxW="22em"
              spacing="2em"
              justify="flex-start"
              mt={{ base: '2em', md: '0' }}
              px={{ base: '2em', md: 0 }}
              pb={{ base: '2em', md: 0 }}
            >
              <Text lineHeight="0.85rem" fontSize="0.85rem">
                I'm a front end developer & graphic designer based in Buenos
                Aires, Argentina. I'm in love with Web Development and
                enthusiastic about the Blockchain world.
              </Text>
              <Text lineHeight="0.85rem" fontSize="0.85rem">
                I'm currently working as a Software Developer at{' '}
                <b>
                  <a href="https://www.bechsud.com/" target="_blank">
                    BECHEM SUDAMERIKA.
                  </a>
                </b>
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Center>
      <ZacataStack />
    </Center>
  )
}

export default About
