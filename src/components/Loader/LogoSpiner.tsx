import { Center, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const LogoSpiner = () => {
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const { colorMode } = useColorMode()

  return (
    <Center
      w="100%"
      h="100vh"
      position="absolute"
      bgColor={bg}
      color={color}
      zIndex={100}
    >
      <motion.img
        src={colorMode === 'dark' ? 'roque-logo.svg' : 'roque-logo-black.svg'}
        width="100px"
        height="100px"
        style={{ position: 'absolute' }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          ease: 'easeInOut',
          duration: 3,
          flip: Infinity,
          repeatDelay: 0
        }}
      />
    </Center>
  )
}

export default LogoSpiner
