import { Center, Flex, useColorModeValue, VStack } from '@chakra-ui/react'
import styles from '../../styles/modules/home/stack.module.css'

const ZacataStack = () => {
  const color = useColorModeValue('black', 'gray.100')
  const border = useColorModeValue('gray.300', 'gray.400')

  const items = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'NEXT.JS',
    'THREE.JS',
    'TAILWIND CSS',
    'C#',
    'XAMARIN',
    'FIGMA',
    'ADOBE ILLUSTRATOR',
    'ADOBE PHOTOSHOP',
    'ADOBE DIMENSION'
  ]
  return (
    <VStack spacing={0} m={{ base: '3em 0', md: '0 0 3em 0' }}>
      <Flex
        w="100%"
        maxW="49.5em"
        color={color}
        // scrollSnapType="x mandatory"
        gap="0.5em"
        minH="2em"
        h="3em"
        pb="0.5em"
        className={styles.slider}
      >
        <div className={styles.slideTrack}>
          {items.map((e, i) => {
            return (
              <Center
                key={i}
                h="100%"
                minW="12em"
                border="1px solid"
                borderColor={border}
                borderRadius={8}
                scrollSnapAlign="start"
                _hover={{ bg: border }}
                transition="all 0.8s"
              >
                <p>{e}</p>
              </Center>
            )
          })}
        </div>
      </Flex>
      <Flex
        w="100%"
        maxW="49.5em"
        // m={{ base: '3em 0', md: '0 0 3em 0' }}
        color={color}
        // scrollSnapType="x mandatory"
        gap="0.5em"
        minH="2em"
        h="3em"
        pb="0.5em"
        className={styles.slider}
      >
        <div className={styles.slideTrackReverse}>
          {items.map((e, i) => {
            return (
              <Center
                key={i}
                h="100%"
                minW="12em"
                border="1px solid"
                borderColor={border}
                borderRadius={8}
                scrollSnapAlign="start"
                _hover={{ bg: border }}
                transition="all 0.8s"
              >
                <p>{e}</p>
              </Center>
            )
          })}
        </div>
      </Flex>
    </VStack>
  )
}

export default ZacataStack
