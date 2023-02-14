import { Center, ColorMode, HStack } from '@chakra-ui/react'
import styles from 'core/styles/modules/home/zacataStack.module.css'
import { DARK_BG, LIGHT_BG } from 'core/utils/constants'

const ZacataStack = ({ colorMode }: { colorMode: ColorMode }) => {
  const items = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'Three JS',
    'Chakra UI',
    'Tailwind CSS',
    'C#',
    'Xamarin',
    'Figma',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe Dimension'
  ]

  return (
    <HStack>
      <HStack w="100%" className={styles.slider}>
        {items.map((e, i) => {
          return (
            <Center
              p={4}
              pt={40}
              key={i}
              h="100%"
              minW="12em"
              border="2px"
              borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
              borderRadius={8}
              _hover={{ bg: colorMode === 'light' ? LIGHT_BG : DARK_BG }}
              transition="all 0.8s"
              textTransform="capitalize"
            >
              <p>{e}</p>
            </Center>
          )
        })}
      </HStack>
      <HStack w="100%" className={styles.slider}>
        {items.map((e, i) => {
          return (
            <Center
              p={4}
              pt={40}
              key={i}
              h="100%"
              minW="12em"
              border="2px"
              borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
              borderRadius={8}
              _hover={{ bg: colorMode === 'light' ? LIGHT_BG : DARK_BG }}
              transition="all 0.8s"
              textTransform="capitalize"
            >
              <p>{e}</p>
            </Center>
          )
        })}
      </HStack>
    </HStack>
  )
}

export default ZacataStack
